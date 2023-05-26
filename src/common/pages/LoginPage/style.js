import styled from "styled-components";
import LoginBG from "../../../images/LoginBG.jpg"
import { Link } from "react-router-dom";

export const LoginPageViwer = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url(${LoginBG});
    background-size: cover;
    width: 100%;
    height: 100%;
`;

export const LoginPageBG = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
`;

export const LoginInnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginPageInner = styled.div`
    background-color: rgba(255,255,255,0.85);
    width: 300px;
    min-height: 300px;
    padding: 35px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: -5px 20px 10px 3px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    color: rgba(100,100,100,1);
`;

export const LoginPageLogo = styled.div`
    text-align: center;
`

export const LoginPageInnerHeader = styled.div`
    margin-top: 20px;
    font-size: 30px;
    text-align: center;
`

export const InputName = styled.div`
    margin-top: 20px;
    font-size: 16px;
    margin-bottom: 5px;
`

export const IDInput = styled.input`
    padding: 10px;
    font-size: 15px;
    color: rgba(150,150,150,1);
    border: 1px rgba(180,180,180,1) solid;
`

export const PWInput = styled.input`
    padding: 10px;
    font-size: 15px;
    color: rgba(150,150,150,1);
    border: 1px rgba(180,180,180,1) solid;
`

export const CheckRow = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(180,180,180,1);
    color: white;
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
`

export const KWSeal = styled.img`
    width: 30px;
    height: 30px;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
`