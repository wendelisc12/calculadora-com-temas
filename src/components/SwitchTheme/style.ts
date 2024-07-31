import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-between;
`

export const ContainerSwitch = styled.div`
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(prop)=> prop.theme.keyboardColor};
    border-radius: 40px;
    padding: 5px 10px;
`

export const CustomCheckbox = styled.div`
    input{
        display: none;
    }

    & input + label:before{
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: transparent;
        display: inline-block;
        vertical-align: middle;
        transition: all 200ms;
    }

    & input:checked + label:before{
        background-color: ${(prop)=>prop.theme.keyEqual};
    }
`