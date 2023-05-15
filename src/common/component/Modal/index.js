import { useRef } from "react";
import { ComponentLayOut, BG, ModalInner } from "./Style.js"

const Modal = ({ModalOpen, setModalOpen, innerContents}) => {
    const ModalBG = useRef();
    return(
        <ComponentLayOut>
        {ModalOpen ?
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