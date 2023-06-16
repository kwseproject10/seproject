import EmptyProfileImage from '@images/EmptyProfileImage.png';
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userIDState, userInformState } from "../../../Atom";
import { ButtonRow, ButtonWrap, FileInputWrap, HeaderTitle, ModifyButton, ModifyCancelButton, ModifySubmitButton, MyPageWrap, PasswordSubmit, PhotoRow, PhotoRowContent, Profile, ProfileHeader, ProfileRow, ProfileWrap, RowContent, RowInput, RowInputWrap, RowTitle, SubmitButtonWrap, SubmitWrap, UserPhotoWrap } from "./style";

const StudentMyPageAuthed = () => {
  const [modifyMode, setModifyMode] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoneNum, setInputPhoneNum] = useState("");
  const [modifyPW, setModifyPW] = useState("");
  const [reModifyPW, setReModifyPW] = useState("");
  const [files, setFiles] = useState();
  const [userInform,setUserInform] = useRecoilState(userInformState);
  const userID = useRecoilValue(userIDState);
  const endPoint = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/api/render-image/${userInform.filePath !== undefined && userInform.filePath !== null ? userInform.filePath.split('\\')[2] : "" }`;

  const initInput = () => {
    setInputEmail(userInform.email);
    setInputPhoneNum(userInform.phoneNum);
  }

  useEffect(initInput, [userInform.birthday, userInform.email, userInform.phoneNum]);

  const onChangeFiles = (e) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }
  };

  const upload = async (e) => {
    if (modifyPW === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    }
    if (reModifyPW === "") {
      window.alert("비밀번호를 다시 입력해주세요.");
      return;
    }
    if (modifyPW !== reModifyPW) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (inputPhoneNum === "") {
      window.alert("연락처를 입력해주세요.");
      return;
    }
    if (inputEmail === "") {
      window.alert("email을 입력해주세요.");
      return;
    }
    e.preventDefault();
    const formData = new FormData();
    if(files !== undefined){
      Array.from(files).forEach((el) => {
        formData.append("file", el);
      });
    }
    formData.append("userID", userInform.ID);
    formData.append("Email", inputEmail);
    formData.append("PhoneNum", inputPhoneNum);
    formData.append("PW", modifyPW);

    try {
      
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/updateuserinform`;
      const res = await axios.post(
        route,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: [
            function () {
              return formData;
            },
          ],
        }
      );
      if(res.data.result === "false"){
        console.log("post error");
        return
      }
      console.log(res.data);
      window.alert("회원정보가 수정되었습니다.");
      const fetch = async () => {
        const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/userinform?userID=${userID}`;
        const res = await axios.get(
          route
        );
        if(res.data.result === "false") {
          console.log("load fail");
          return
        }
        console.log(res.data);
        setUserInform(res.data);
      }

      fetch();
      initInput();
      setModifyMode(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubmitWrap>
    <form
      onSubmit={upload}
      encType="multipart/form-data"
    >
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
          {userInform.filePath !== undefined && userInform.filePath !== null ?
          <img
            src={endPoint}
            width="100%"
            height="100%"
            alt="Profile"
          />
          : 
          <img
            src={EmptyProfileImage}
            width="100%"
            height="100%"
            alt="EmptyProfileImage"
          />
          }
              </UserPhotoWrap>
              {modifyMode ?
                <FileInputWrap>
                <RowInput
                  type="file"
                  name="file"
                  onChange={onChangeFiles}
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
            <RowContent>{userInform.birthday}</RowContent>
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
            type="submit"
            value="확인"
            />
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
      
      </form>
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