import styled from "styled-components";

export const ComponentLayOut = styled.div`
    width:100%;
    position: fixed;
    z-index: 30;
    font-size: 50px;
`

export const BG = styled.div`
    width:100%;
    height:100vh;
    background:rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
`

export const ModalInner = styled.div`
    z-index: 25;
    width: 500px;
    height: 60%;
    background: white;
    position: fixed;
    top: 20%;
    padding: 10px;
    font-size: 18px;
    overflow-Y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: rgba(100,100,100,1);
    }
`