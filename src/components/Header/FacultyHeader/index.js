import HeaderButton from "@components/Buttons/HeaderButton";
import HeaderLogoBlack from "@images/HeaderLogo.png";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FacultyNavigationState, userIDState, userInformState } from '../../../Atom';
import { ButtonPartition, HeaderBar, HeaderWrap, LeftContents, LeftContentsWrap, LogoWrap, RightContents, RightContentsWrap, UserName, UserType } from "./style";

const FacultyHeader = () => {
  const setActived = useSetRecoilState(FacultyNavigationState);
  const userID = useRecoilValue(userIDState);
  const [userInform, setUserInform] = useRecoilState(userInformState);

  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/userinform?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      setUserInform(res.data);
    }
    fetchAssignment();
  }, [userID, setUserInform])

  return (
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
            <UserType>{userInform.major}  {userInform.type === "student" ? "학부생" : "교수"}({userInform.ID})</UserType>
          </LeftContents>
        </LeftContentsWrap>

        <RightContentsWrap>
          <RightContents>
            <HeaderButton text={"github"} out={true} link={"https://github.com/kwseproject10/seproject"} onClick={() => { }} />
            <ButtonPartition />
            <HeaderButton text={"광운대학교"} out={true} link={"https://www.kw.ac.kr/ko/"} onClick={() => { }} />
            <ButtonPartition />
            <HeaderButton text={"로그아웃"} out={false} link={""} onClick={() => {
              setActived(0);
            }} />
          </RightContents>
        </RightContentsWrap>

      </HeaderBar>
    </HeaderWrap>
  )
}

export default FacultyHeader;