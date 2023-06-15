import DropDown from "@components/DropDown";
import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { signUpState } from "../../../Atom";
import { AlretRow, BirthDayRow, ButtonRow, CheckBox, CheckRow, EmailRow, Input, InputBirth, InputEmail, InputNum, InputTitle, LinkStyle, PhoneNumRow, Policy, SignButton, Title } from "./style";

const SignUpPage = () => {
  const setSignUp = useSetRecoilState(signUpState);
  const [checkInformPolicy, setCheckInformPolicy] = useState(false);
  const [phoneNum1, setPhoneNum1] = useState('010');
  const [PhoneNumDropDown, setPhoneNumDropDown] = useState(false);
  const PhoneNum1List = ['010', '011', '016', '017'];
  const [EmailDomain, setEmailDomain] = useState('gmail.com');
  const [EmailDropDown, setEmailDropDown] = useState(false);
  const EmailDomainList = ['gmail.com', 'naver.com', 'nate.com', 'kw.ac.kr']
  const [major, setMajor] = useState("컴퓨터정보공학부");
  const [majorDropDown, setMajorDropDown] = useState(false);
  const majorList = ['컴퓨터정보공학부', '소프트웨어학부', '정보융합학부', '법학부', '경영학부'];
  const [type, setType] = useState('학생');
  const [typeDropDown, setTypeDropDown] = useState(false);
  const typeList = ['학생', '교수'];

  const checkInformPolicyHandler = () => {
    setCheckInformPolicy((prev) => !prev);
  }
  const { setPolicyModalOpen } = useOutletContext();

  const [userID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [EmailID, setEmailID] = useState("");

  const [Alret, setAlret] = useState("학번을 입력해주세요.");
  const [canSubmit, setCanSubmit] = useState(false);

  const checkValidate = (userID, password, rePassword, name, phoneNum1, phoneNum2, phoneNum3, birthYear, birthMonth, birthDay, EmailID, EmailDomain, checkInformPolicy) => {
    if (userID === "") {
      setCanSubmit(false);
      setAlret("학번을 입력해주세요.");
      return;
    }
    if (userID.length !== 10) {
      setCanSubmit(false);
      setAlret("학번 열 자리를 입력하세요.");
      return;
    }
    if (password.length < 8) {
      setCanSubmit(false);
      setAlret("비밀번호를 여덟 자리 이상 입력하세요.");
      return;
    }
    if (password === "") {
      setCanSubmit(false);
      setAlret("비밀번호를 입력해주세요.");
      return;
    }
    if (rePassword === "") {
      setCanSubmit(false);
      setAlret("비밀번호를 다시 입력해주세요.");
      return;
    }
    if (password !== rePassword) {
      setCanSubmit(false);
      setAlret("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (name === "") {
      setCanSubmit(false);
      setAlret("이름을 입력해주세요.");
      return;
    }
    if (phoneNum1 === "" || phoneNum2 === "" || phoneNum3 === "") {
      setCanSubmit(false);
      setAlret("연락처를 입력해주세요.");
      return;
    }
    if (phoneNum1.length !== 3 || phoneNum2.length !== 4 || phoneNum3.length !== 4) {
      setCanSubmit(false);
      setAlret("연락처 형식이 올바르지 않습니다.");
      return;
    }
    if (birthYear === "" || birthMonth === "" || birthDay === "") {
      setCanSubmit(false);
      setAlret("생일을 입력해주세요.");
      return;
    }
    if (birthYear.length !== 4 || birthMonth.length > 12 || birthDay > 31) {
      setCanSubmit(false);
      setAlret("생일 형식이 올바르지 않습니다.");
      return;
    }
    if (EmailID === "" || EmailDomain === "") {
      setCanSubmit(false);
      setAlret("email을 입력해주세요.");
      return;
    }
    if (!checkInformPolicy) {
      setCanSubmit(false);
      setAlret("개인정보 처리방침에 동의하지 않았습니다.");
      return;
    }
    setAlret("");
    setCanSubmit(true);
  }

  useEffect(() => {
    const timeID = setTimeout(() => {
      checkValidate(userID, password, rePassword, name, phoneNum1, phoneNum2, phoneNum3, birthYear, birthMonth, birthDay, EmailID, EmailDomain, checkInformPolicy);
    }, 300);
    return () => {
      clearTimeout(timeID);
    };
  }, [userID, password, rePassword, name, phoneNum1, phoneNum2, phoneNum3, birthYear, birthMonth, birthDay, EmailID, EmailDomain, checkInformPolicy, setCanSubmit]);

  const OnSubmit = () => {
    const data = {
      "userID": userID,
      "PW": password,
      "userName": name,
      "type": type,
      "major": major,
      "phoneNum1": phoneNum1,
      "phoneNum2": phoneNum2,
      "phoneNum3": phoneNum3,
      "birthYear": birthYear,
      "birthMonth": birthMonth,
      "birthDay": birthDay,
      "EmailID": EmailID,
      "EmailDomain": EmailDomain,
    }
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/signup`;
      const res = await axios.post(
        route, data
      );
      if (res.data.result === "false") {
        return
      }
    }
    fetch();
  }

  return (
    <div>
      <Title>
        SIGN UP
      </Title>

      <InputTitle>STUDENT ID</InputTitle>
      <Input
        type="number"
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        maxLength={10}
        onChange={(e) => {
          setStudentID(e.target.value);
        }}
        value={userID}
      />

      <InputTitle>PASSWORD</InputTitle>
      <Input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <InputTitle>RE-ENTER PASSWORD </InputTitle>
      <Input
        type="password"
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
        value={rePassword}
      />

      <InputTitle>NAME</InputTitle>
      <Input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      <InputTitle>TYPE</InputTitle>
      <DropDown
        state={type}
        setState={setType}
        isOpen={typeDropDown}
        setIsOpen={setTypeDropDown}
        list={typeList}
        fontSize={"var(--font-size-xs)"}
        width={"18.75rem"}
        listWidth={"16.125rem"}
        height={"1.875rem"}
        listHeight={"3.75rem"}
      />

      <InputTitle>MAJOR</InputTitle>
      <DropDown
        state={major}
        setState={setMajor}
        isOpen={majorDropDown}
        setIsOpen={setMajorDropDown}
        list={majorList}
        fontSize={"var(--font-size-xs)"}
        width={"18.75rem"}
        listWidth={"16.125rem"}
        height={"1.875rem"}
      />

      <InputTitle>PHONE NUMBER</InputTitle>
      <PhoneNumRow>
        <DropDown
          state={phoneNum1}
          setState={setPhoneNum1}
          isOpen={PhoneNumDropDown}
          setIsOpen={setPhoneNumDropDown}
          list={PhoneNum1List}
          fontSize={"var(--font-size-xs)"}
          width={"5.625rem"}
          listWidth={"3.125rem"}
          height={"1.875rem"}
        />
        <InputNum
          type="number"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={4}
          onChange={(e) => {
            setPhoneNum2(e.target.value);
          }}
          value={phoneNum2}
        />
        <InputNum
          type="number"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={4}
          onChange={(e) => {
            setPhoneNum3(e.target.value);
          }}
          value={phoneNum3}
        />
      </PhoneNumRow>

      <InputTitle>BIRTHDAY</InputTitle>
      <BirthDayRow>
        <InputBirth
          type="number"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={4}
          onChange={(e) => {
            setBirthYear(e.target.value);
          }}
          value={birthYear}
        />년
        <InputBirth
          type="number"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={2}
          onChange={(e) => {
            setBirthMonth(e.target.value);
          }}
          value={birthMonth}
        />월
        <InputBirth
          type="number"
          onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
              e.target.value = e.target.value.slice(0, e.target.maxLength);
          }}
          maxLength={2}
          onChange={(e) => {
            setBirthDay(e.target.value);
          }}
          value={birthDay}
        />일
      </BirthDayRow>

      <InputTitle>E-MAIL</InputTitle>
      <EmailRow>
        <InputEmail
          type="text"
          onChange={(e) => {
            setEmailID(e.target.value);
          }}
          value={EmailID}
        />@
        <DropDown
          state={EmailDomain}
          setState={setEmailDomain}
          isOpen={EmailDropDown}
          setIsOpen={setEmailDropDown}
          list={EmailDomainList}
          fontSize={"var(--font-size-xs)"}
          width={"7.5rem"}
          listWidth={"5rem"}
          height={"1.875rem"}
        />
      </EmailRow>

      <CheckRow>
        <CheckBox type="checkbox" checked={checkInformPolicy} onClick={() => { checkInformPolicyHandler() }} />
        <Policy onClick={() => { setPolicyModalOpen(true) }}>개인정보 처리방침</Policy>에 동의합니다.
      </CheckRow>
      <AlretRow>
        {Alret}
      </AlretRow>
      <ButtonRow>
        {
          canSubmit
            ?
            <LinkStyle to="/">
              <SignButton
                BG={"green"}
                onClick={() => { OnSubmit(); }}
                Enable={true}
              >
                SIGN UP
              </SignButton>
            </LinkStyle>
            :
            <SignButton
              BG={"rgba(139,11,2,0.5)"}
              Enable={false}
            >
              SIGN UP
            </SignButton>
        }
        <LinkStyle to="/">
          <SignButton
            BG={"gray"}
            onClick={() => {
              setSignUp(false);
            }}
            Enable={true}
          >
            CANCEL
          </SignButton>
        </LinkStyle>
      </ButtonRow>
    </div>
  )
}

export default SignUpPage;