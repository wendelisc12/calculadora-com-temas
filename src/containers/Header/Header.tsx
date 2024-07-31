import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import Text from "../../components/Text/Text";
import { HeaderStyle } from "./style";
import { propTema } from "../../components/SwitchTheme/SwitchTheme";

const Header = ({temaEscolhido}:propTema) => {

    const handleTema = (tema: string) => {
        temaEscolhido(tema)
    }

    return ( 
        <HeaderStyle>
            <Text>calc</Text>
            <SwitchTheme temaEscolhido={handleTema}/>
        </HeaderStyle>
     );
}
 
export default Header;