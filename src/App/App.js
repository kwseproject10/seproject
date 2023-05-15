import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../common/pages/Main";
import Login from "../common/pages/Login";
import Error from "../common/pages/Error";
import Navigation from "../common/component/Navigation";
import { Body, Header } from "./Style";
import Modal from "../common/component/Modal";
import { useState } from "react";
import ModalTest from "../common/component/ModalContents/test";

const App = () => {
  const [ModalOpen, setModalOpen] = useState(true);
  return (
    <div>
      <BrowserRouter>
                <Modal ModalOpen={ModalOpen} setModalOpen={setModalOpen} innerContents={<ModalTest setModalOpen={setModalOpen}/>}/>
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
      </BrowserRouter>
    </div>
  );
}

export default App;