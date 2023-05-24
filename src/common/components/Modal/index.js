import { useRef } from "react";
import { useRecoilState } from "recoil";
import { ComponentLayOut, BG, ModalInner } from "./style.js"
import { ModalOpenState } from "@./Atom";

const Modal = ({innerContents}) => {
    const [ModalOpen, setModalOpen] = useRecoilState(ModalOpenState);
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