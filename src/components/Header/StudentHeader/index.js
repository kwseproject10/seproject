import { StudentNavigationState } from '@./Atom';
import { useEffect, useState } from "react";
import { ButtonPartition, HeaderBar, HeaderWrap, LeftContents, LeftContentsWrap, LogoWrap, RightContents, RightContentsWrap, UserName, UserType } from "./style";
import HeaderLogoBlack from "@images/HeaderLogo.png";
import HeaderButton from "@components/Buttons/HeaderButton";
import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

const StudentHeader = () => {
  const setActived = useSetRecoilState(StudentNavigationState);
  const [ userName, setUserName ] = useState("");
  const [ userID, setUserID ] = useState("");
  const [ userMajor, setUserMajor ] = useState("");
  const [ userType, setUserType ] = useState("");
  const location = useLocation();
  console.log(location["pathname"]);

  const getUserInform = () => {
    /** get userName, userMajor, userType API */
    setUserName("홍길동");
    setUserID("2023123456");
    setUserMajor("컴퓨터정보공학부");
    setUserType("재학");
  }
  useEffect(getUserInform,[]);

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
                <UserName>{userName} 님</UserName>
                <UserType>{userMajor} {userType} ({userID})</UserType>
              </LeftContents>
            </LeftContentsWrap>

            <RightContentsWrap>
              <RightContents>
                <HeaderButton text={"github"} out={true} link={"https://github.com/kwseproject10/seproject"} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"광운대학교"} out={true} link={"https://www.kw.ac.kr/ko/"} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"로그아웃"} out={false} link={""} onClick={() => {}}/>
              </RightContents>
            </RightContentsWrap>

          </HeaderBar>
        </HeaderWrap>
    )
}

export default StudentHeader;