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
        overflow-y: hidden;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled.div`
    max-width: 1000px;
    width: 100%;

    @media (max-width: 767px) {
        width: 100%;
        max-width: 380px;
    }
`