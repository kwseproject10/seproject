import StudentHeader from "@components/Header/StudentHeader";
import Modal from "@components/Modal";
import TestContent from "@components/Modal/ModalContents/TestContents";
import StudentNavigation from "@components/Navigation/StudentNavigation";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Body, BodyWrapper, PageBG, PageLayout, PageViewer } from "./style";

const StudentPages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <PageViewer>
        <PageLayout>
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              innerContents={<TestContent setModalOpen={setModalOpen}/>}
            />
            <StudentHeader/>
            <StudentNavigation/>

            <BodyWrapper>
              <Body>
                  <Outlet/>
              </Body>
            </BodyWrapper>
        </PageLayout>
      <PageBG/>
    </PageViewer>
  );
}
//<div onClick={()=>{setModalOpen(true)}}>Modal Open Test</div>
export default StudentPages;