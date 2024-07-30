import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
    }

    body{
        background-color: hsl(225, 21%, 49%);
    }
`