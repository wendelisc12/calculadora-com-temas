import { useEffect, useState } from "react";
import { Container, Key, TableKeys, TableResults } from "./style";

type prop = {
    operacao: (operacao:string)=>void
}

const Keyboard = ({operacao}:prop) => {

    const[equacao, setEquacao] = useState('')

    useEffect(()=>{
        operacao(equacao)
    },[equacao, operacao])


    return ( 
        <Container>
            <TableKeys>
                <Key onClick={() => setEquacao(equacao + '7')}>7</Key>
                <Key onClick={() => setEquacao(equacao + '8')}>8</Key>
                <Key onClick={() => setEquacao(equacao + '9')}>9</Key>
                <Key onClick={() => setEquacao(equacao.slice(0, -1))} especialkey={true}>Del</Key>
                <Key onClick={() => setEquacao(equacao + '4')}>4</Key>
                <Key onClick={() => setEquacao(equacao + '5')}>5</Key>
                <Key onClick={() => setEquacao(equacao + '6')}>6</Key>
                <Key onClick={() => setEquacao(equacao + '+')}>+</Key>
                <Key onClick={() => setEquacao(equacao + '1')}>1</Key>
                <Key onClick={() => setEquacao(equacao + '2')}>2</Key>
                <Key onClick={() => setEquacao(equacao + '3')}>3</Key>
                <Key onClick={() => setEquacao(equacao + '-')}>-</Key>
                <Key onClick={() => setEquacao(equacao + '.')}>.</Key>
                <Key onClick={() => setEquacao(equacao + '0')}>0</Key>
                <Key onClick={() => setEquacao(equacao + '/')}>/</Key>
                <Key onClick={() => setEquacao(equacao + '*')}>x</Key>
            </TableKeys>

            <TableResults>
                <Key onClick={() => setEquacao('')} especialkey={true}>reset</Key>
                <Key onClick={() => setEquacao(equacao[equacao.length-1] == '-' || equacao[equacao.length-1] == '+' || equacao[equacao.length-1] =='/' ||equacao[equacao.length-1] =='*' ? eval(equacao + '0').toString() : eval(equacao).toString())} equalkey={true}>=</Key>
            </TableResults>
        </Container>
     );
}
 
export default Keyboard;