import styled from "styled-components";
import { RenderAnimation } from "../../../style/GlobalStyle";

export const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${RenderAnimation} 1s;
`

export const DropDownRow = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  background-color: var(--color-gr);
`

export const DropDownWrap = styled.div`
  margin-left: 2rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LectureTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  margin-top: -0.1875rem;
  font-weight: bold;
  font-size: var(--font-size-nm);
`

export const LectureID = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.625rem;
  margin-top: -0.1875rem;
  font-size: var(--font-size-sm);
`