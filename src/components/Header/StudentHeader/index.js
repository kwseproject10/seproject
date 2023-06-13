import { StudentNavigationState } from '@./Atom';
import HeaderButton from "@components/Buttons/HeaderButton";
import HeaderLogoBlack from "@images/HeaderLogo.png";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { AuthState, userIDState, userInformState } from './../../../Atom';
import { ButtonPartition, HeaderBar, HeaderWrap, LeftContents, LeftContentsWrap, LogoWrap, RightContents, RightContentsWrap, UserName, UserType } from "./style";

const StudentHeader = () => {
  const setActived = useSetRecoilState(StudentNavigationState);
  const [userInform, setUserInform] = useRecoilState(userInformState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const setAuth = useSetRecoilState(AuthState);

    return(
        <HeaderWrap>
          <HeaderBar>

            <LeftContentsWrap>
              <LeftContents>
                <Link to="" onClick={() => {
                  setActived(0);
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
                  setUserInform({});
                  setUserID(0);
                  setAuth(false);
                  setActived(0);
                }}/>
              </RightContents>
            </RightContentsWrap>

          </HeaderBar>
        </HeaderWrap>
    )
}

export default StudentHeader;