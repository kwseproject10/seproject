import { useEffect } from "react";
import { useState } from "react";
import { AdvisorEmail, AdvisorName, AdvisorNum, Bottom, Center, Grade, GradeWrap, InformRows, LastConnect, Left, NameRow, ProfileWrap, Right, TitlePlusButton, Top, UserID, UserInformWrap, UserMajor, UserName, UserPhotoWrap } from "./style";
import EmptyProfileImage from "@images/EmptyProfileImage.png";
import { TbPlus } from "react-icons/tb";

const Profile = ({ onClickPlusButton }) => {
  const [ userInform, setUserInform ] = useState({
    name : "홍길동",
    type : "학부생",
    major : "컴퓨터정보공학부",
    ID : "2023123456",
    grade : 4,
    numberOfTerm : 7,
    advisor : "이기훈",
    advisorEmail : "kihoonlee@kw.ac.kr",
    advisorNum : "02-940-8674",
    state : "재학"
  })

  //API call
  const loadUserInform = () => {
    setUserInform({
      name : "홍길동",
      type : "학부생",
      major : "컴퓨터정보공학부",
      ID : "2023123456",
      grade : 4,
      numberOfTerm : 7,
      advisor : "이기훈",
      advisorEmail : "kihoonlee@kw.ac.kr",
      advisorNum : "02-940-8674",
      state : "재학"
    });
  };
  useEffect(loadUserInform,[]);

  return(
    <ProfileWrap>
      <Top>
        <UserPhotoWrap>
          <img
            src={EmptyProfileImage}
            width="100%"
            height="100%"
            alt="EmptyProfileImage"
          />
        </UserPhotoWrap>
        <UserInformWrap>
          <NameRow>
            <UserName>{userInform.name}</UserName>
            <TitlePlusButton
              onClick={onClickPlusButton}
            >
              <TbPlus/>
            </TitlePlusButton>
          </NameRow>
          <InformRows>
            <UserID>{userInform.ID}</UserID>
            <UserMajor>{userInform.major} {userInform.type}</UserMajor>
            <GradeWrap>
              <Grade>{userInform.grade} 학년 ( {userInform.numberOfTerm} 학기 ) {userInform.state} 중</Grade>
            </GradeWrap>
            <LastConnect>최종접속 2023.05.29 AM 01:01:13</LastConnect>
          </InformRows>
        </UserInformWrap>
      </Top>
      <Bottom>
        <Left>지도교수</Left>
        <Center>
          <AdvisorName>{userInform.advisor} 교수</AdvisorName>
        </Center>
        <Right>
          <AdvisorEmail>{userInform.advisorEmail}</AdvisorEmail>
          <AdvisorNum>{userInform.advisorNum}</AdvisorNum>
        </Right>
      </Bottom>
    </ProfileWrap>
  )
}

export default Profile;