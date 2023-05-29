import styled from "styled-components";
import Size from "@style/Size.js";

export const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  ${Size('large')}{
    flex-direction: row;
  }
`

export const Left = styled.div`
  width: 100%;
  height: 100%;
  ${Size('large')}{
    width: 48%;
    height: 94%;
  }
`

export const TimeTableWrap = styled.div`

`

export const Right= styled.div`
  width: 100%;
  height: 100%;
  ${Size('large')}{
    width: 48%;
    height: 94%;
    margin-left: 1.7%;
  }
`

export const LectureListWrap = styled.div`

`