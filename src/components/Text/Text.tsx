import { TituloStyle } from "./style";

export type props = {
    fontSize?:number
    children:string
}

const Text = ({fontSize, children}:props) => {
    return <TituloStyle fontSize={fontSize}>{children}</TituloStyle>;
}
 
export default Text;