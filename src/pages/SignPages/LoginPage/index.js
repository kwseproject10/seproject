import { AuthState } from "@./Atom";
import KWSeal from "@images/KWSeal_NonBG.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getAPILocal } from './../../../APIs/index';
import { userIDState } from './../../../Atom';
import { AlretRow, ButtonRow, Input, InputTitle, LinkStyle, LoginPageLogo, SignButton } from "./style";

const LoginPage = () => {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [Alret, setAlret] = useState("");
  const [logInResponse, setLogInResponse] = useState({});
  const setUserID = useSetRecoilState(userIDState);
  
  const setAuth = useSetRecoilState(AuthState);
  const movePage = useNavigate();
  const goStudent = () => {
    movePage('/student');
  }
  const goFaculty = () => {
    movePage('/faculty')
  }

  const logInSubmit = async () => {
    if (inputID === "") {
      setAlret("학번을 입력하세요.");
      return;
    }
    if (inputPW === "") {
      setAlret("비밀번호를 입력하세요.");
      return;
    }
    try{
      const router = `auth&userID=${inputID}&PW=${inputPW}`;
      console.log(router);
      getAPILocal(setLogInResponse, router);
      console.log(logInResponse);
    }catch(err){
      console.log("로그인 실패\n", err);
    }
  }

  const getUserAuth = async () => {
    const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/auth&userID=${inputID}&PW=${inputPW}`;
    console.log(route);
    const res = await axios.get(
      route
    );
    console.log(res);
  }

  return (
    <div>
      <LoginPageLogo>
        <img src={KWSeal}
          width='120' alt="KWSeal" />
      </LoginPageLogo>

      <InputTitle>STUDENT ID</InputTitle>
      <Input
        type="number"
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        maxLength={10}
        onChange={(e) => {
          setInputID(e.target.value);
        }}
        value={inputID}
        placeholder="학번을 입력하세요."
      />

      <InputTitle>PASSWORD</InputTitle>
      <Input
        type="password"
        onChange={(e) => {
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
          <SignButton onClick={() => { getUserAuth() }}>LOG IN</SignButton>
        </LinkStyle>
        <LinkStyle to="/signup">
          <SignButton onClick={() => { }}>SIGN UP</SignButton>
        </LinkStyle>
      </ButtonRow>

      <ButtonRow>
        <LinkStyle to="/student">
          <SignButton onClick={() => { setAuth(true) }}>STUDENT TEST</SignButton>
        </LinkStyle>
        <LinkStyle to="/faculty">
          <SignButton onClick={() => { }}>FACULTY TEST</SignButton>
        </LinkStyle>
      </ButtonRow>
    </div>
  )
}

export default LoginPage;