import Text from "../Text/Text";
import { Container, ContainerSwitch, CustomCheckbox } from "./style";

const SwitchTheme = () => {
    return ( 
        <Container>
            <Text fontSize={16}>THEME </Text>
            <ContainerSwitch>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema1"/>
                    <label htmlFor="tema1"></label>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema3" />
                    <label htmlFor="tema3"></label>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input type="radio" name="temas" id="tema2" />
                    <label htmlFor="tema2"></label>
                </CustomCheckbox>
            </ContainerSwitch>
        </Container>
     );
}
 
export default SwitchTheme;