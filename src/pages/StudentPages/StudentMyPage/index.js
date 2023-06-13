import EmptyProfileImage from "@images/EmptyProfileImage.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState, userInformState } from "../../../Atom";
import { ButtonRow, ButtonWrap, FileInputWrap, HeaderTitle, ModifyButton, ModifyCancelButton, ModifySubmitButton, MyPageWrap, PasswordSubmit, PhotoRow, PhotoRowContent, Profile, ProfileHeader, ProfileRow, ProfileWrap, RowContent, RowInput, RowInputWrap, RowTitle, SubmitButtonWrap, SubmitWrap, UserPhotoWrap } from "./style";

const StudentMyPageAuthed = () => {
  const [modifyMode, setModifyMode] = useState(false);
  const [inputBirthDay, setInputBirthDay] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoneNum, setInputPhoneNum] = useState("");
  const [modifyPW, setModifyPW] = useState("");
  const [reModifyPW, setReModifyPW] = useState("");
  const userInform = useRecoilValue(userInformState);

  const initInput = () => {
    setInputBirthDay(userInform.birthday);
    setInputEmail(userInform.email);
    setInputPhoneNum(userInform.phoneNum);
  }

  useEffect(initInput, [userInform.birthday, userInform.email, userInform.phoneNum]);

  //API call
  const submitModifiedInform = () => {
    //post API
  }

  return (
    <SubmitWrap>
      <ProfileWrap>
        <Profile>
          <ProfileHeader>
            <HeaderTitle>개인정보</HeaderTitle>
            <ButtonWrap>
              {modifyMode ?
                ""
                :
                <ModifyButton
                  onClick={() => { setModifyMode(true) }}
                />
              }
            </ButtonWrap>
          </ProfileHeader>
          <PhotoRow>
            <RowTitle>사진</RowTitle>
            <RowContent>
              <PhotoRowContent>
              <UserPhotoWrap>
                <img
                  src={EmptyProfileImage}
                  width="100%"
                  height="100%"
                  alt="EmptyProfileImage"
                />
              </UserPhotoWrap>
              {modifyMode ?
                <FileInputWrap>
                <RowInput
                  type="file"
                />
                </FileInputWrap>
                :
                ""
              }
              </PhotoRowContent>
            </RowContent>
          </PhotoRow>
          <ProfileRow>
            <RowTitle>이름</RowTitle>
            <RowContent>{userInform.name}</RowContent>
          </ProfileRow>
          <ProfileRow>
            <RowTitle>구분</RowTitle>
            <RowContent>{userInform.type === "student" ? "학부생" : "교수"}</RowContent>
          </ProfileRow>
          <ProfileRow>
            <RowTitle>소속학과</RowTitle>
            <RowContent>{userInform.major}</RowContent>
          </ProfileRow>
          <ProfileRow>
            <RowTitle>상태</RowTitle>
            <RowContent>{userInform.grade}학년, {userInform.numberOfTerm}학기 {userInform.state === "enroll" ? "재학" : "휴학"} 중</RowContent>
          </ProfileRow>
          <ProfileRow>
            <RowTitle>학번</RowTitle>
            <RowContent>{userInform.ID}</RowContent>
          </ProfileRow>
          <ProfileRow>
            <RowTitle>생년월일</RowTitle>
            {!modifyMode ?
            <RowContent>{userInform.birthday}</RowContent>
              :
              <RowInputWrap>
              <RowInput
                type="text"
                onChange={(e) => {
                  setInputBirthDay(e.target.value);
                }}
                value={inputBirthDay}
                placeholder="0000.00.00"
              />
            </RowInputWrap>
            }
          </ProfileRow>
          <ProfileRow>
            <RowTitle>e-mail</RowTitle>
            {!modifyMode ?
            <RowContent>{userInform.email}</RowContent>
              :
              <RowInputWrap>
              <RowInput
                type="text"
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                value={inputEmail}
                placeholder="ID @ mail.com"
              />
            </RowInputWrap>
            }
          </ProfileRow>
          <ProfileRow>
            <RowTitle>연락처</RowTitle>
            {!modifyMode ?
            <RowContent>{userInform.phoneNum}</RowContent>
              :
              <RowInputWrap>
              <RowInput
                type="text"
                onChange={(e) => {
                  setInputPhoneNum(e.target.value);
                }}
                value={inputPhoneNum}
                placeholder="000-0000-0000"
              />
            </RowInputWrap>
            }
          </ProfileRow>
          {modifyMode ?
          <>
          <ProfileRow>
              <RowTitle>비밀번호 변경</RowTitle>
              <RowInputWrap>
              <RowInput
                type="password"
                onChange={(e) => {
                  setModifyPW(e.target.value);
                }}
                value={modifyPW}
                placeholder="비밀번호를 입력하세요."
              />
            </RowInputWrap>
            </ProfileRow>
          <ProfileRow>
              <RowTitle>변경 비밀번호 확인</RowTitle>
              <RowInputWrap>
              <RowInput
                type="password"
                onChange={(e) => {
                  setReModifyPW(e.target.value);
                }}
                value={reModifyPW}
                placeholder="비밀번호를 다시 입력하세요."
              />
            </RowInputWrap>
            </ProfileRow>
            </>
            :
              ""
          }
        </Profile>
      </ProfileWrap>
      <ButtonRow>
        {modifyMode ?
          <SubmitButtonWrap>
            <ModifySubmitButton
              onClick={() => {
                submitModifiedInform();
                setModifyMode(false);
              }}
            >
              확인
            </ModifySubmitButton>
            <ModifyCancelButton
              onClick={() => {
                setModifyMode(false);
              }}
            >
              취소
            </ModifyCancelButton>
          </SubmitButtonWrap>
          :
          ""
        }
      </ButtonRow>
    </SubmitWrap>
  )
}

const StudentMyPage = () => {
  const [inputPW, setInputPW] = useState("");
  const [authed, setAuthed] = useState(false);
  const userID = useRecoilValue(userIDState);

  //API call
  const submitPW = async() => {
    let route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/auth?userID=${userID}&PW=${inputPW}`;
    const res = await axios.get(
      route
    );
    if(res.data.result === "true"){
      setAuthed(true);
    }else{
      alert("비밀번호가 일치하지 않습니다.");
    }
  }

  return (
    <MyPageWrap>
      {authed ?
        <StudentMyPageAuthed/>
        :
        <SubmitWrap>
          <ProfileWrap>
            <Profile>
              <ProfileHeader>
                <HeaderTitle>비밀번호 입력</HeaderTitle>
              </ProfileHeader>
              <ProfileRow>
                <RowTitle>비밀번호 확인</RowTitle>
                <RowInputWrap>
                  <RowInput
                    type="password"
                    onChange={(e) => {
                      setInputPW(e.target.value);
                    }}
                    value={inputPW}
                    placeholder="비밀번호를 입력하세요."
                    onKeyPress={(e) => {
                      if(e.key === 'Enter'){
                        submitPW();
                      }
                    }}
                  />
                </RowInputWrap>
              </ProfileRow>
            </Profile>
          </ProfileWrap>
          <ButtonRow>
            <SubmitButtonWrap>
              <PasswordSubmit
                onClick={() => {
                  submitPW();
                }}
              >
                확인
              </PasswordSubmit>
            </SubmitButtonWrap>
          </ButtonRow>
        </SubmitWrap>
      }
    </MyPageWrap>
  )
}

export default StudentMyPage;