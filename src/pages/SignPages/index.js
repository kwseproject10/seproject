import { Outlet } from "react-router-dom";
import { LoginInnerWrapper, LoginInnerWrapper2, LoginPageBG, LoginPageFooter, LoginPageInner, LoginPageViwer } from "./style";

const SignPages = () => {
    return(
        <LoginPageViwer>
                <LoginPageBG>
                        <LoginInnerWrapper>
                            <LoginInnerWrapper2>
                                    <LoginPageInner>
                                        <Outlet/>
                                    </LoginPageInner>
                                    <LoginPageFooter>
                                        본 페이지는 광운대학교 2023학년도 1학기 컴퓨터정보공학부<br/>
                                        소프트웨어공학 강의 프로젝트 목적으로 제작되었습니다.
                                    </LoginPageFooter>
                            </LoginInnerWrapper2>
                        </LoginInnerWrapper>
                </LoginPageBG>
        </LoginPageViwer>
    )
}

export default SignPages;