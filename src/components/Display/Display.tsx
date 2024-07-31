import { Container, DisplayContainer } from "./style"

type prop = {
    showOperacao:string
}

const Display = ({showOperacao}:prop) => {

    return ( 
        <Container>
            <DisplayContainer type="text" value={showOperacao} disabled></DisplayContainer>
        </Container>
     );
}
 
export default Display;