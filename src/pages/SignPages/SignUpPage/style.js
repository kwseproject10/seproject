import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
    margin-bottom: 3.125rem;
    text-align: center;
    font-size: var(--font-size-xl);
`

export const InputTitle = styled.div`
    margin-top: 0.625rem;
    margin-bottom: 0.1875rem;
    font-size: var(--font-size-sm);
    width: 18.75rem;
`

export const Input = styled.input`
    padding: 0.625rem;
    font-size: var(--font-size-xs);
    color: var(--color-dg);
    border: 0.0625rem var(--color-gr) solid;
    width: 17.375rem;
    height: 0.5rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const PhoneNumRow = styled.div`
    display:flex;
    justify-content: space-between;
`

export const InputNum = styled(Input)`
    width: 4.25rem;
`

export const BirthDayRow = styled(PhoneNumRow)`
    line-height: 1.875rem;
    font-size: var(--font-size-sm);
`

export const InputBirth = styled(Input)`
    margin-right: -0.1875rem;
    width: 3.625rem;
`

export const EmailRow = styled(PhoneNumRow)`
    line-height: 1.875rem;
    font-size: var(--font-size-sm);
`

export const InputEmail = styled(Input)`
    margin-right: -0.1875rem;
    width: 8.625rem;
`

export const CheckRow = styled.div`
    margin-left: 0.1875rem;
    margin-top: 0.625rem;
    width: 100%;
    font-size: var(--font-size-xs);
    display: flex;
`

export const CheckBox = styled.input`
    position: relative;
    top: 0.0625rem;
    margin-right: 0.1875rem;
`

export const Policy = styled.div`
    color: rgba(50,50,200,1);
    cursor: pointer;
`

export const AlretRow = styled.div`
    margin-top: 1.5625rem;
    margin-bottom: 0.625rem;
    font-size: var(--font-size-sm);
    color: var(--color-nm);
    width: 100%;
    text-align: center;
`

export const ButtonRow = styled.div`
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
`

export const SignButton = styled.div`
    width: 7.8125rem;
    height: 1.875rem;
    line-height: 1.875rem;
    text-align: center;
    color: white;
    background-color: ${(props) => props.BG || "gray" };
    ${(props) => props.Enable?
    `
    &:hover{
        color: black;
        transform: translateY(0);
        transition: 0.3s;
    }
    `
    :
    ""
    }
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
`