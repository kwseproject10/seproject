import Size from "@style/Size";
import styled from "styled-components";

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
  overflow: auto;
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
  width: 55%;
 }
`