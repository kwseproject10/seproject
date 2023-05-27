import { ModalOpenState } from "@./Atom";
import { useSetRecoilState } from "recoil";

const TestContent = () => {
    const setModalOpen = useSetRecoilState(ModalOpenState);
    return(
        <div>
            TestContent
            <button onClick={
                ()=>{setModalOpen(false)}
            }>
                closeModal
            </button>
        </div>
    )
}

export default TestContent;