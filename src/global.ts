import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
    }

    body{
        background-color: ${(prop) => prop.theme.backgroundBody};
    }
`

export const Container = styled.div`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 0;

    @media (max-width: 767px) {
        width: 85%;
    }
`