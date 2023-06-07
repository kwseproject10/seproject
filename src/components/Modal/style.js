import styled from "styled-components";

export const ComponentLayOut = styled.div`
    width:100%;
    height:100vh;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 30;
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
    width: 31.25rem;
    height: 60%;
    background: white;
    position: fixed;
    top: 20%;
    padding: 0.625rem;
    font-size: var(--font-size-md);
    overflow-Y: scroll;
    &::-webkit-scrollbar {
      width: 0.375rem;
      border-radius: 0.125rem;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background-color: var(--color-dg);
    }
`