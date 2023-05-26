import { useSetRecoilState } from "recoil";
import { AuthState } from "@./Atom";
import { ButtonRow, IDInput, InputName, LinkStyle, LoginInnerWrapper, LoginPageBG, LoginPageInner, LoginPageLogo, LoginPageViwer, PWInput, SignButton } from "./style";
import KWSeal from "../../../images/KWSeal_NonBG.png";

const LoginPage = () => {
    const setAuth = useSetRecoilState(AuthState);
    return(
        <LoginPageViwer>
            <LoginPageBG>
                <LoginInnerWrapper>
                <LoginPageInner>
                    <LoginPageLogo>
                    <img src={KWSeal}
                    width='120' alt="KWSeal"/>
                    </LoginPageLogo>
                    <InputName>STUDENT ID</InputName>
                    <IDInput type="text" placeholer="Student ID"/>
                    <InputName>PASSWORD</InputName>
                    <PWInput type="password" placeholer="Password"/>
                    <ButtonRow>
                        <LinkStyle to="/">
                            <SignButton onClick={() => {}}>LOG IN</SignButton>
                        </LinkStyle>
                        <LinkStyle to="/">
                            <SignButton onClick={() => {}}>SIGN UP</SignButton>
                        </LinkStyle>
                    </ButtonRow>
                    <ButtonRow>
                        <LinkStyle to="/homeS">
                            <SignButton onClick={() => {setAuth(true)}}>STUDENT TEST</SignButton>
                        </LinkStyle>
                        <LinkStyle to="">
                            <SignButton onClick={() => {}}>PROF TEST</SignButton>
                        </LinkStyle>
                    </ButtonRow>
                </LoginPageInner>
                </LoginInnerWrapper>
            </LoginPageBG>
        </LoginPageViwer>
    )
}

export default LoginPage;