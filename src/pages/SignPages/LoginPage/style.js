import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageLogo = styled.div`
    text-align: center;
`

export const InputTitle = styled.div`
    margin-top: 1.25rem;
    font-size: var(--font-size-md);
    margin-bottom: 0.3125rem;;
    width: 18.75rem;
`

export const Input = styled.input`
    padding: 0.625rem;
    font-size: var(--font-size-md);
    color: var(--color-dg);
    border: 0.0625rem var(--color-gr) solid;
    width: 17.375rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`

export const PWInput = styled.input`
    padding: 0.625rem;
    font-size: var(--font-size-md);
    color: var(--color-dg);
    border: 0.0625rem var(--color-gr) solid;
    width: 17.375rem;
`

export const AlretRow = styled.div`
    margin-top: 1.25rem;
    font-size: var(--font-size-sm);
    color: var(--color-nm);
    width: 100%;
    text-align: center;
`

export const ButtonRow = styled.div`
    margin-top: 1.875rem;
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
`

export const SignButton = styled.div`
    width: 7.8125rem;
    height: 1.875rem;
    line-height: 1.875rem;
    text-align: center;
    background-color: var(--color-nm);
    color: white;
    &:hover{
        color: black;
        transform: translateY(0);
        transition: 0.3s;
    }
`
export const LinkStyle = styled(Link)`
    text-decoration: none;
`