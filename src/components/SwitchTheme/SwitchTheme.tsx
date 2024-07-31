import { useEffect, useState } from "react";
import Text from "../Text/Text";
import { Container, ContainerSwitch, CustomCheckbox } from "./style";

export type propTema = {
    temaEscolhido: (tema:string)=>void
}

const SwitchTheme = ({temaEscolhido}:propTema) => {

    const[tema, setTema] = useState('whiteTheme')

    useEffect(()=> {
        temaEscolhido(tema)
    }, [tema, temaEscolhido])

    return ( 
        <Container>
            <Text fontSize={16}>THEME</Text>
            <ContainerSwitch>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema1" value='whiteTheme' checked={tema ==='whiteTheme' ? true : false} onChange={e => setTema(e.target.value)}/>
                    <label htmlFor="tema1"></label>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema3" value='blueTheme' onChange={e => setTema(e.target.value)}/>
                    <label htmlFor="tema3"></label>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema2" value='purpleTheme' onChange={e => setTema(e.target.value)}/>
                    <label htmlFor="tema2"></label>
                </CustomCheckbox>
            </ContainerSwitch>
        </Container>
     );
}
 
export default SwitchTheme;