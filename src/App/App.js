import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Footer, FooterLine, Header } from "./Style";
import { useSetRecoilState } from "recoil";
import { ModalOpenState } from "@./Atom";
import Main from "@pages/Main";
import Login from "@pages/Login";
import Error from "@pages/Error";
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
            <Route path="/" element={<Main/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
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