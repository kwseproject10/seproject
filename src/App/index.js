import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Footer, FooterLine, Header } from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalOpenState } from "@./Atom";
import { AuthState } from "@./Atom";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import ErrorPage from "@pages/ErrorPage";
import LectureListPage from "@pages/LectureListPage";
import StudentLectureManagePage from "@pages/StudentLectureManagePage";
import TimeTablePage from "@pages/TimeTablePage";
import Navigation from "@components/Navigation";
import Modal from "@components/Modal";
import TestContent from "@components/ModalContents/TestContents";

const App = () => {
  const setModalOpen = useSetRecoilState(ModalOpenState);
  const Auth = useRecoilValue(AuthState)
  return (
    <div>
      <BrowserRouter>
        <Modal innerContents={<TestContent/>}/>
        {
          Auth === true ?
            <Navigation/>
          :
            ""
        }
        <Body>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/homeS" element={<MainPage/>}/>
            <Route path="/LL" element={<LectureListPage/>}/>
            <Route path="/SLM" element={<StudentLectureManagePage/>}/>
            <Route path="/TT" element={<TimeTablePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Body>
        <Footer>
          <FooterLine>
            Footer<br/>
            <button onClick={()=>{setModalOpen(true)}}>Modal Open Test</button>
          </FooterLine>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;