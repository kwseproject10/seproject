import { Outlet } from "react-router-dom";
import { Body, Footer, FooterLine } from "./style";
import { useSetRecoilState } from "recoil";
import { ModalOpenState } from "@./Atom";
import Modal from "@components/Modal";
import TestContent from "@components/Modal/ModalContents/TestContents";
import FacultyNavigation from "@components/Navigation/FacultyNavigation";

const FacultyPages = () => {
  const setModalOpen = useSetRecoilState(ModalOpenState);
  return (
    <div>
        <Modal innerContents={<TestContent/>}/>
            <FacultyNavigation/>
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

export default FacultyPages;