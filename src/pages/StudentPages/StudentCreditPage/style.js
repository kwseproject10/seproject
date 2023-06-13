import Size from "@style/Size";
import styled from "styled-components";
import { RenderAnimation } from "../../../style/GlobalStyle";

export const CreditPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-Y: auto;
  animation: ${RenderAnimation} 1s;
`

export const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
`

export const Middle = styled.div`
  width: 100%;
  min-height: 40%;
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  flex-direction:column;
  ${Size('large')}{
    flex-direction:row;
    justify-content: center;
  }
`

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1%;
  margin-top: 1%;
`

export const Title = styled.div`
  width: 92%;
  margin-left: 4%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-size:var(--font-size-lg);
  height: 3rem;
  font-weight: bold;
  color: black;
  border-bottom: 2px solid black;
`

export const CreditListPerSemestersVisualized = styled.div`
  height: 20rem;
  width: 53rem;
  margin-right: 1%;
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

