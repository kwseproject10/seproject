const TestContent = ({ setModalOpen }) => {
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