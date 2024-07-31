import styled from "styled-components";
import { props } from "./Text";

export const TituloStyle = styled.h1<props>`
    font-size: ${(prop)=> prop.fontSize + 'px' || '32px'};
`