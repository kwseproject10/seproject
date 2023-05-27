import styled from "styled-components";
import LoginBG from "@images/LoginBG.jpg"

export const LoginPageViwer = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url(${LoginBG});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const LoginPageBG = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginInnerWrapper = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-item: center;
`

export const LoginInnerWrapper2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-item: center;
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

export const LoginPageFooter = styled.div`
    margin-top: 30px;
    text-align: center;
    width: 400px;
    color: rgba(150,150,150,1);
    font-size: 13px;
    align-items: center;
`