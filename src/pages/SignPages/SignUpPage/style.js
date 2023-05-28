import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
    margin-bottom: 50px;
    text-align: center;
    font-size: 26px;
`

export const InputTitle = styled.div`
    margin-top: 10px;
    margin-bottom: 3px;
    font-size: 14px;
    width: 300px;
`

export const Input = styled.input`
    padding: 10px;
    font-size: 12px;
    color: rgba(150,150,150,1);
    border: 1px rgba(180,180,180,1) solid;
    width: 278px;
    height: 8px;
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
    width: 68px;
`

export const BirthDayRow = styled(PhoneNumRow)`
    line-height: 30px;
    font-size: 13px;
`

export const InputBirth = styled(Input)`
    margin-right: -3px;
    width: 58px;
`

export const EmailRow = styled(PhoneNumRow)`
    line-height: 30px;
    font-size: 13px;
`

export const InputEmail = styled(Input)`
    margin-right: -3px;
    width: 138px;
`

export const CheckRow = styled.div`
    margin-left: 3px;
    margin-top: 10px;
    width: 100%;
    font-size: 12px;
    display: flex;
`

export const CheckBox = styled.input`
    position: relative;
    top: 1px;
    margin-right: 3px;
`

export const Policy = styled.div`
    color: rgba(50,50,200,1);
    cursor: pointer;
`

export const AlretRow = styled.div`
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 13px;
    color: rgba(200,50,50,1);
    width: 100%;
    text-align: center;
`

export const ButtonRow = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`

export const SignButton = styled.div`
    width: 125px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background-color: ${(props) => props.BG || "gray" };
    ${(props) => props.Enable?
    `
    &:hover{
        color: black;
        transform: translateY(0px);
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