import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Footer, FooterLine, Header } from "./style";
import { useSetRecoilState } from "recoil";
import { ModalOpenState } from "@./Atom";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import ErrorPage from "@pages/ErrorPage";
import Navigation from "@components/Navigation";
import Modal from "@components/Modal";
import TestContent from "@components/ModalContents/TestContents";

const App = () => {
  const setModalOpen = useSetRecoilState(ModalOpenState);
  return (
    <div>
      <BrowserRouter>
        <Modal innerContents={<TestContent/>}/>
        <Header>
          <Navigation/>
        </Header>
        <Body>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          <button onClick={()=>{setModalOpen(true)}}>Modal Open Test</button>
        </Body>
        <Footer>
          <FooterLine>
            Footer
          </FooterLine>
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;