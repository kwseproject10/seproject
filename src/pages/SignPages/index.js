import { Outlet } from "react-router-dom";
import { LoginInnerWrapper, LoginInnerWrapper2, LoginPageBG, LoginPageFooter, LoginPageInner, LoginPageViwer } from "./style";
import { useState } from "react";
import InformPolicy from "@components/ModalContents/InformPolicy";
import Modal from "@components/Modal";

const SignPages = () => {
    const [ policyModalOpen, setPolicyModalOpen ] = useState(false);
    return(
        <LoginPageViwer>
            <Modal
                modalOpen={policyModalOpen}
                setModalOpen={setPolicyModalOpen}
                innerContents={<InformPolicy/>}
            />
                <LoginPageBG>
                        <LoginInnerWrapper>
                            <LoginInnerWrapper2>
                                    <LoginPageInner>
                                        <Outlet context={{ setPolicyModalOpen }}/>
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