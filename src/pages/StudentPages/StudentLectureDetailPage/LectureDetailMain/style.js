import styled from "styled-components";
import { RenderAnimation } from "../../../../style/GlobalStyle";

export const MainWrap = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  animation: ${RenderAnimation} 1s;
`

export const AttendanceRow = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
`

export const AttendanceCard = styled.div`
  width: 95%;
`

export const BottomContentsWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
`

export const BottomContents = styled.div`
  width: 95%;
  display: flex;
  height: 100%;
  justify-content: space-between;
`

export const NoticeCard = styled.div`
  width: 33%;
  height: 100%;
`

export const ArchiveCard = styled.div`
  width: 33%;
  height: 100%;
`

export const AssignmentCard = styled.div`
  width: 33%;
  height: 100%;
`