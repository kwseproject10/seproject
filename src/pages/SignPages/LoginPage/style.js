import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageLogo = styled.div`
    text-align: center;
`

export const InputTitle = styled.div`
    margin-top: 20px;
    font-size: 16px;
    margin-bottom: 5px;
    width: 300px;
`

export const Input = styled.input`
    padding: 10px;
    font-size: 15px;
    color: rgba(150,150,150,1);
    border: 1px rgba(180,180,180,1) solid;
    width: 278px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`

export const PWInput = styled.input`
    padding: 10px;
    font-size: 15px;
    color: rgba(150,150,150,1);
    border: 1px rgba(180,180,180,1) solid;
    width: 278px;
`

export const AlretRow = styled.div`
    margin-top: 20px;
    font-size: 13px;
    color: rgba(255,0,0,0.8);
    width: 100%;
    text-align: center;
`

export const ButtonRow = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`

export const SignButton = styled.div`
    width: 125px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(139,11,2);
    color: white;
    &:hover{
        color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`
export const LinkStyle = styled(Link)`
    text-decoration: none;
`