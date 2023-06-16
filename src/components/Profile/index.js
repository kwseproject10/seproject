import EmptyProfileImage from "@images/EmptyProfileImage.png";
import { TbPlus } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { userInformState } from "../../Atom";
import { AdvisorEmail, AdvisorName, AdvisorNum, Bottom, Center, Grade, GradeWrap, InformRows, LastConnect, Left, NameRow, ProfileWrap, Right, TitlePlusButton, Top, UserID, UserInformWrap, UserMajor, UserName, UserPhotoWrap } from "./style";

const Profile = ({ onClickPlusButton }) => {
  const userInform = useRecoilValue(userInformState);
  const endPoint = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/api/render-image/${userInform.filePath !== undefined && userInform.filePath !== null ? userInform.filePath.split('\\')[2] : "" }`;
  return (
    <ProfileWrap>
      <Top>
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
            <UserMajor>{userInform.major} {userInform.type === "student" ? "학부생" : "교수"}</UserMajor>
            <GradeWrap>
              <Grade>{userInform.grade} 학년 ( {userInform.numberOfTerm} 학기 ) {userInform.state === "enroll" ? "재학" : "휴학"} 중</Grade>
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