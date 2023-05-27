import { Outlet } from "react-router-dom";
import { Body, Footer, FooterLine } from "./style";
import { useSetRecoilState } from "recoil";
import { ModalOpenState } from "@./Atom";
import StudentNavigation from "@components/StudentNavigation";
import Modal from "@components/Modal";
import TestContent from "@components/ModalContents/TestContents";

const StudentPages = () => {
  const setModalOpen = useSetRecoilState(ModalOpenState);
  return (
    <div>
        <Modal innerContents={<TestContent/>}/>
            <StudentNavigation/>
        <Body>
            <Outlet/>
        </Body>
        <Footer>
          <FooterLine>
            Footer<br/>
            <button onClick={()=>{setModalOpen(true)}}>Modal Open Test</button>
          </FooterLine>
        </Footer>
    </div>
  );
}

export default StudentPages;