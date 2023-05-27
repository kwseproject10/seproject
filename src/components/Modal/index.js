import { useRef } from "react";
import { ComponentLayOut, BG, ModalInner } from "./style.js"

const Modal = ({modalOpen, setModalOpen, innerContents}) => {
    const ModalBG = useRef();
    return(
        <ComponentLayOut>
        {modalOpen ?
          (
            <BG ref={ModalBG} onClick={(e)=>{
                if(ModalBG.current === e.target){
                    setModalOpen(false);
                }
            }}>
                <ModalInner>
                    {innerContents}
                </ModalInner>
            </BG>
          )
        :
            null
        }
        </ComponentLayOut>
    )
}

export default Modal;