import { AuthState } from "@./Atom";
import KWSeal from "@images/KWSeal_NonBG.png";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { AlretRow, ButtonRow, Input, InputTitle, LinkStyle, LoginPageLogo, SignButton } from "./style";

const LoginPage = () => {
    const [ inputID, setInputID ] = useState("");
    const [ inputPW, setInputPW ] = useState("");
    const [ Alret, setAlret ] = useState("");
    const setAuth = useSetRecoilState(AuthState);

    const logInSubmit = () => {
        if(inputID === ""){
            setAlret("학번을 입력하세요.");
            return;
        }
        if(inputPW === ""){
            setAlret("비밀번호를 입력하세요.");
        }
        //로그인 유효성 검사 및 alret 설정
        setInputID("");
        setInputPW("");
    }

    return(
        <div>
            <LoginPageLogo>
            <img src={KWSeal}
            width='120' alt="KWSeal"/>
            </LoginPageLogo>
            
            <InputTitle>STUDENT ID</InputTitle>
            <Input
                type="number"
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
                maxLength={10}
                onChange={(e)=>{
                    setInputID(e.target.value);
                }}
                value={inputID}
                placeholder="학번을 입력하세요."
            />

            <InputTitle>PASSWORD</InputTitle>
            <Input
                type="password"
                onChange={(e)=>{
                    setInputPW(e.target.value);
                }}
                value={inputPW}
                placeholder="비밀번호를 입력하세요."
            />

            <AlretRow>
                {Alret}
            </AlretRow>

            <ButtonRow>
                <LinkStyle to="/">
                    <SignButton onClick={() => {logInSubmit()}}>LOG IN</SignButton>
                </LinkStyle>
                <LinkStyle to="/signup">
                    <SignButton onClick={() => {}}>SIGN UP</SignButton>
                </LinkStyle>
            </ButtonRow>

            <ButtonRow>
                <LinkStyle to="/student">
                    <SignButton onClick={() => {setAuth(true)}}>STUDENT TEST</SignButton>
                </LinkStyle>
                <LinkStyle to="/faculty">
                    <SignButton onClick={() => {}}>FACULTY TEST</SignButton>
                </LinkStyle>
            </ButtonRow>
        </div>
    )
}

export default LoginPage;