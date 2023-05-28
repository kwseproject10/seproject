import styled from "styled-components";

export const PageViewer = styled.div`
    z-index: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
`

export const PageBG = styled.div`
    width: 100%;
    height: 100vh;
`

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const BodyWrapper = styled.div`
    padding-top: 7.5rem;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(220,200,210,0);
    display: flex;
    justify-content: center;
    overflow-Y: scroll;
    &::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: 0.125rem;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background-color: var(--color-dg);
    }
`