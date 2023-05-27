import { Outlet } from "react-router-dom";
import { Body, Footer, FooterLine } from "./style";
import StudentNavigation from "@components/StudentNavigation";
import Modal from "@components/Modal";
import TestContent from "@components/ModalContents/TestContents";
import { useState } from "react";

const StudentPages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          innerContents={<TestContent setModalOpen={setModalOpen}/>}
        />
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