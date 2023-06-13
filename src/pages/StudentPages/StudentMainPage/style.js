import Size from "@style/Size.js";
import styled from "styled-components";
import { RenderAnimation } from "../../../style/GlobalStyle";

export const MainPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  overflow-X: hidden;
  animation: ${RenderAnimation} 1s;
`

export const GridWrap = styled.div`
  height: 100%;
  display: flex;
  jusify-content: center;
  padding: 1.25rem;
  padding-bottom: 0.625rem;
`
export const GridContainer = styled.div`
  display:flex;
  flex-direction:column;
  height: 100%;
  width: 100%;
  ${Size('large')}{
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: 14.6875rem 14.6875rem 17.1875rem;
    row-gap: 1.875rem;
    column-gap: 1.25rem;
  }
`

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 1rem;
  ${Size('large')}{
    margin-top:0;
  }
`

export const ProfileCard = styled(GridItem)`
  margin-top: 0;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`

export const TimeTableCard = styled(GridItem)`
  grid-column: 3 / 9;
  grid-row: 1 / 3;
`

export const CreditCard = styled(GridItem)`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`

export const LectureListCard = styled(GridItem)`
  grid-column: 6 / 9;
  grid-row: 1 / 3;
`

export const CalendarCard = styled(GridItem)`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
`

export const ScheduleListCard = styled(GridItem)`
  grid-column: 3 / 5;
  grid-row: 3 / 4;
`

export const NoticeCard = styled(GridItem)`
  grid-column: 5 / 7;
  grid-row: 3 / 4;
`

export const AssignmentCard = styled(GridItem)`
  grid-column: 7 / 9;
  grid-row: 3 / 4;
`

export const Footer = styled.div`
  width: 100%;
  background-color:white;
  position:fixed;
  bottom: 0;
  left: 0;
  height: 3.75rem;
  border-top: 0.0625rem var(--color-dg);
`