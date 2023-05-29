import { Outlet } from "react-router-dom";
import { Body, BodyWrapper, PageBG, PageLayout, PageViewer } from "./style";
import { useState } from "react";
import FacultyNavigation from "@components/Navigation/FacultyNavigation";
import Modal from "@components/Modal";
import TestContent from "@components/Modal/ModalContents/TestContents";
import FacultyHeader from "../../components/Header/FacultyHeader";

const FacultyPages = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <PageViewer>
        <PageLayout>
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              innerContents={<TestContent setModalOpen={setModalOpen}/>}
            />
            <FacultyHeader/>
            <FacultyNavigation/>

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
export default FacultyPages;