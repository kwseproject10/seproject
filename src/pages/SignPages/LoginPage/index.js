import { AuthState } from "@./Atom";
import KWSeal from "@images/KWSeal_NonBG.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LecturesState, signUpState, userIDState, userInformState } from './../../../Atom';
import { AlretRow, ButtonRow, Input, InputTitle, LinkStyle, LoginPageLogo, SignButton, TestButton } from "./style";

const LoginPage = () => {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [Alret, setAlret] = useState("");
  const setUserID = useSetRecoilState(userIDState);
  const setAuth = useSetRecoilState(AuthState);
  const movePage = useNavigate();
  const setUserInform = useSetRecoilState(userInformState);
  const setLectures = useSetRecoilState(LecturesState);
  const setSignUp = useSetRecoilState(signUpState);

  const goStudent = () => {
    movePage('/student');
  }
  const goFaculty = () => {
    movePage('/faculty')
  }

  //* flow: 학번, 비밀번호 적었는지 확인 => get/auth로 회원 검사 => true일 경우 userID, auth 설정하고 type검사 => type이 student이면 lecture와 inform load.*/
  const logInSubmit = async () => {
    if (inputID === "") {
      setAlret("학번을 입력하세요.");
      return;
    }
    if (inputPW === "") {
      setAlret("비밀번호를 입력하세요.");
      return;
    }
    let route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/auth?userID=${inputID}&PW=${inputPW}`;
    try {
      const res = await axios.get(
        route
      )
      if (res.data.result === "true") {
        setUserID(res.data.userID);
        setAuth(true);
        if (res.data.userType === "student") {
          route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/userinform?userID=${inputID}`;
          const res_user = await axios.get(
            route
          );
          console.log(res_user.data);
          if (res_user.data.result === "false") {
            setAlret("회원정보 출력 오류가 발생하였습니다.");
            return
          } else {
            route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/lectures?userID=${inputID}`;
            const res_lectures = await axios.get(
              route
            );
            setUserInform(res_user.data);
            setLectures(res_lectures.data);
            goStudent();
          }
        } else {
          goFaculty();
        }
      } else if (res.data.result === "false") {
        setAlret("로그인 정보가 일치하지 않습니다.");
        return;
      }
    } catch (e) {
      setAlret("로그인 오류가 발생하였습니다.");
      return;
    }
  }

  const logInTestStudent = () => {
    setAuth(true);
    setUserID("2023123456");
    setUserInform({
      name: "홍길동",
      type: "학부생",
      major: "컴퓨터정보공학부",
      ID: "2023123456",
      grade: 4,
      numberOfTerm: 7,
      email: "gildong@gmail.com",
      phoneNum: "010-1234-5678",
      birthday: "1900.01.01",
      advisor: "이기훈",
      advisorEmail: "kihoonlee@kw.ac.kr",
      advisorNum: "02-940-8674",
      state: "재학"
    })
    setLectures([
      {
        "key": "0",
        "name": "소프트웨어공학",
        "professor": "이기훈",
        "major": "컴퓨터정보공학부",
        "type": "전선",
        "credit": "3",
        "numOfTime": "3",
        "time": [
          "월5",
          "수6"
        ],
        "place": [
          "새빛205",
          "새빛205"
        ],
        "ID": "H020-4-0846-01"
      },
      {
        "key": "0",
        "name": "디지털논리회로1",
        "professor": "유지현",
        "major": "컴퓨터정보공학부",
        "type": "전필",
        "credit": "3",
        "numOfTime": "3",
        "time": [
          "금5",
          "금6"
        ],
        "place": [
          "새빛203",
          "새빛203"
        ],
        "ID": "H020-2-0453-01"
      },
      {
        "key": "0",
        "name": "신호및시스템",
        "professor": "이성원",
        "major": "컴퓨터정보공학부",
        "type": "전선",
        "credit": "3",
        "numOfTime": "3",
        "time": [
          "월4",
          "수3"
        ],
        "place": [
          "새빛102",
          "새빛102"
        ],
        "ID": "H020-3-2004-01"
      },
      {
        "key": "0",
        "name": "임베디드시스템S/W설계",
        "professor": "김태석",
        "major": "컴퓨터정보공학부",
        "type": "전선",
        "credit": "3",
        "numOfTime": "3",
        "time": [
          "월6",
          "수5"
        ],
        "place": [
          "새빛205",
          "새빛205"
        ],
        "ID": "H020-4-5861-01"
      },
      {
        "key": "0",
        "name": "머신러닝",
        "professor": "박철수",
        "major": "컴퓨터정보공학부",
        "type": "전선",
        "credit": "3",
        "numOfTime": "3",
        "time": [
          "월3",
          "수4"
        ],
        "place": [
          "새빛203",
          "새빛203"
        ],
        "ID": "H020-4-8483-01"
      }
    ])
    goStudent();
  }

  const logInTestFaculty = () => {
    setAuth(true);
    setUserID("2023123456");
    goFaculty();
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
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            logInSubmit();
          }
        }}
      />

      <InputTitle>PASSWORD</InputTitle>
      <Input
        type="password"
        onChange={(e) => {
          setInputPW(e.target.value);
        }}
        value={inputPW}
        placeholder="비밀번호를 입력하세요."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            logInSubmit();
          }
        }}
      />

      <AlretRow>
        {Alret}
      </AlretRow>

      <ButtonRow>
        <LinkStyle to="/">
          <SignButton
            onClick={logInSubmit}
          >
            LOG IN
          </SignButton>
        </LinkStyle>
        <LinkStyle to="/signup" onClick={() => { setSignUp(true) }}>
          <SignButton>SIGN UP</SignButton>
        </LinkStyle>
      </ButtonRow>

      <ButtonRow>
        <LinkStyle to="/student">
          <TestButton
            onClick={logInTestStudent}
          >
            LOGIN TEST(학부)
          </TestButton>
        </LinkStyle>
        <LinkStyle to="/faculty">
          <TestButton
            onClick={logInTestFaculty}
          >
            LOGIN TEST(교수)
          </TestButton>
        </LinkStyle>
      </ButtonRow>
    </div>
  )
}

export default LoginPage;