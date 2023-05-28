import { useEffect, useState } from "react";
import { ButtonPartition, HeaderBar, HeaderWrap, LeftContents, LeftContentsWrap, LogoWrap, RightContents, RightContentsWrap, UserName, UserType } from "./style";
import HeaderLogoBlack from "@images/HeaderLogo.png";
import HeaderButton from "@components/Buttons/HeaderButton";

const StudentHeader = () => {
  const [ userName, setUserName ] = useState("");
  const [ userID, setUserID ] = useState("");
  const [ userMajor, setUserMajor ] = useState("");
  const [ userType, setUserType ] = useState("");

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
                <LogoWrap>
                  <img
                    src={HeaderLogoBlack}
                    height={34}
                    alt="HeaderLogoBlack"
                  />
                </LogoWrap>
                <UserName>{userName} 님</UserName>
                <UserType>{userMajor} {userType} ({userID})</UserType>
              </LeftContents>
            </LeftContentsWrap>

            <RightContentsWrap>
              <RightContents>
                <HeaderButton text={"학생게시판"} link={""} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"중앙도서관"} link={""} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"광운대학교"} link={""} onClick={() => {}}/>
                <ButtonPartition/>
                <HeaderButton text={"로그아웃"} link={""} onClick={() => {}}/>
              </RightContents>
            </RightContentsWrap>

          </HeaderBar>
        </HeaderWrap>
    )
}

export default StudentHeader;