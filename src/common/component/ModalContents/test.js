const ModalTest = ({setModalOpen}) => {
    return(
        <div>
            ModalTest
            <button onClick={
                ()=>{setModalOpen(false)}
            }>
                closeModal
            </button>
        </div>
    )
}

export default ModalTest;