import styled from "styled-components";

type especialKey = {
    especialkey?:boolean
    equalkey?:boolean
}

export const Container = styled.div`
    background-color: ${(prop)=> prop.theme.keyboardColor};
    margin-top: 25px;
    padding: 30px;
    border-radius: 10px;

    @media (max-width: 767px) {
        padding: 20px;
    }
`

export const Key = styled.button<especialKey>`
    height: 100%;
    height: 80px;
    border: 0;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    background-color: ${(prop)=> prop.especialkey ? prop.theme.keyEspecial : prop.equalkey ? prop.theme.keyEqual : prop.theme.keyBackground};
    box-shadow: 0 4px 0 ${(prop)=> prop.especialkey ? prop.theme.keyEspecialShadow : prop.equalkey ? prop.theme.keyEqualShadow : prop.theme.keyShadow};
    color: ${prop => prop.especialkey ? '#fff' : prop.equalkey ? prop.theme.textEqual : prop.theme.textKeys};
    text-transform: ${prop => prop.especialkey ? 'uppercase' : 'lowercase'};
    transition: all 200ms;
    font-size: 48px;
    font-weight: bold;

    &:hover{
        background-color: ${(prop)=>  prop.especialkey || prop.equalkey ? '' : prop.theme.keyHover};
        box-shadow: none;
    }

    @media (max-width: 767px) {
        font-size: ${(prop)=> prop.especialkey ? '28px' : '42px'};
    }
`

export const TableKeys = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;

    @media (max-width: 767px) {
        column-gap: 10px;
        row-gap: 10px;
    }
`

export const TableResults = styled(TableKeys)`
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;

    @media (max-width: 767px) {
        margin-top: 20px;
        row-gap: 10px;
    }
`