import { useState } from "react";
import Display from "../../components/Display/Display";
import Keyboard from "../../components/Keyboard/Keyboard";

const Calculadora = () => {
    const[operacao, setOperacao] = useState('')

    const handleOperacao = (operacao:string) => {
        setOperacao(operacao)
    }

    return ( 
        <>
            <Display showOperacao={operacao}/>
            <Keyboard operacao={handleOperacao}/>
        </>
     );
}
 
export default Calculadora;