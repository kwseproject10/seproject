import styled from "styled-components";
import Size from "@style/Size.js";

export const PageViewer = styled.div`
    z-index: 0;
    width: 100%;
    height: 100%;
`

export const PageBG = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 0;
    position: fixed;
    background-color: var(--color-sh);
`

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const BodyWrapper = styled.div`
    padding-top: 7.5rem;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    ${Size('large')}{
      padding-top: 3.75rem;
      padding-left: 13%;
      width: 87%;
    }
`

export const Body = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-Y: auto;
    &::-webkit-scrollbar {
      width: 0.25rem;
      border-radius: 0.125rem;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0.125rem;
        background-color: var(--color-dg);
    }
    ${Size('large')}{
      background-color: var(--color-sh);
    }
`