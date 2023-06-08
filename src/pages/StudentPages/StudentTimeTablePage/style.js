import styled from "styled-components";
import Size from "@style/Size";

export const TimeTablePageWrap = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction:column;
  overflow-Y: hidden;
`

export const PageRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  ${Size('large')}{
    flex-direction:row;
    justify-content: center;
    height: 50rem;
  }
`

export const LectureListWrap = styled.div`
  width: 100%;
 ${Size('large')}{
  width: 55%;
 }
`