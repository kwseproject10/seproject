import EmptyProfileImage from "@images/EmptyProfileImage.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbPlus } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { userIDState } from "../../Atom";
import { AdvisorEmail, AdvisorName, AdvisorNum, Bottom, Center, Grade, GradeWrap, InformRows, LastConnect, Left, NameRow, ProfileWrap, Right, TitlePlusButton, Top, UserID, UserInformWrap, UserMajor, UserName, UserPhotoWrap } from "./style";

const Profile = ({ onClickPlusButton }) => {
  const userID = useRecoilValue(userIDState);
  const [userInform, setUserInform] = useState({});
  
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/userinform?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("profile load error");
        return
      }
      console.log(res.data);
      setUserInform(res.data);
    }

    fetch()
  }, [ userID ])

  return (
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
              <TbPlus />
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