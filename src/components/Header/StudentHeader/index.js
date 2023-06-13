import { StudentNavigationState } from '@./Atom';
import HeaderButton from "@components/Buttons/HeaderButton";
import HeaderLogoBlack from "@images/HeaderLogo.png";
import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { AuthState, LectureSelectedState, LecturesState, StudentNavigationAccordianActivedState, userIDState, userInformState } from './../../../Atom';
import { ButtonPartition, HeaderBar, HeaderWrap, LeftContents, LeftContentsWrap, LogoWrap, RightContents, RightContentsWrap, UserName, UserType } from "./style";

const StudentHeader = () => {
  const userInform = useRecoilValue(userInformState);
  const userID = useRecoilValue(userIDState);
  const resetUserInform = useResetRecoilState(userInformState);
  const resetUserID = useResetRecoilState(userIDState);
  const resetAuth = useResetRecoilState(AuthState);
  const resetLectures = useResetRecoilState(LecturesState);
  const resetActived = useResetRecoilState(StudentNavigationState);
  const resetSelectedLecture = useResetRecoilState(LectureSelectedState);
  const resetStudentNavigationAccordianActived = useResetRecoilState(StudentNavigationAccordianActivedState);

    return(
        <HeaderWrap>
          <HeaderBar>

            <LeftContentsWrap>
              <LeftContents>
                <Link to="" onClick={() => {
                  resetActived();
                }}>
                  <LogoWrap>
                    <img
                      src={HeaderLogoBlack}
                      height="34"
                      alt="HeaderLogoBlack"
                    />
                  </LogoWrap>
                </Link>
                <UserName>{userInform.name} 님</UserName>
                <UserType>{userInform.major} {userInform.type === "student" ? "학부생" : "교수"} ({userID})</UserType>
              </LeftContents>
            </LeftContentsWrap>

            <RightContentsWrap>
              <RightContents>
                <HeaderButton text={"github"} out={true} link={"https://github.com/kwseproject10/seproject"} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"광운대학교"} out={true} link={"https://www.kw.ac.kr/ko/"} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"로그아웃"} out={false} link={""} onClick={() => {
                  resetUserInform();
                  resetUserID();
                  resetAuth();
                  resetLectures();
                  resetActived();
                  resetSelectedLecture();
                  resetStudentNavigationAccordianActived();
                }}/>
              </RightContents>
            </RightContentsWrap>

          </HeaderBar>
        </HeaderWrap>
    )
}

export default StudentHeader;