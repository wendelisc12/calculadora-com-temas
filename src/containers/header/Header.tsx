import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import Text from "../../components/Text/Text";
import { HeaderStyle } from "./style";

const Header = () => {
    return ( 
        <HeaderStyle>
            <Text>calc</Text>
            <SwitchTheme />
        </HeaderStyle>
     );
}
 
export default Header;