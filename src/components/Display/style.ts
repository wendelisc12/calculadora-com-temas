import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(prop)=> prop.theme.displayColor};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 30px;
    height: 150px;
    border-radius: 10px;

    @media (max-width: 767px) {
        height: 120px;
    }
`

export const DisplayContainer = styled.input`
    font-size: 4em;
    text-align: right;
    font-weight: bold;
    width: 100%;
    color: ${(prop)=> prop.theme.textDisplay};
    border: 0;
    background-color: transparent;

    @media (max-width: 767px) {
        font-size: 3em;
    }
`
