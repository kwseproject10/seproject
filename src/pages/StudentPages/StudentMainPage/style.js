import styled from "styled-components";

export const MainPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  margin-left: 4px;
`

export const GridWrap = styled.div`
  height: 88%;
  display: flex;
  jusify-content: center;
  padding: 20px;
  padding-bottom: 10px;
`
export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(8,1fr);
  grid-template-rows: 235px 235px 275px;
  row-gap: 20px;
  column-gap: 20px;
`

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px rgba(200,200,200) solid;
`

export const ProfileCard = styled(GridItem)`
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
  bottom: 0px;
  left: 0px;
  height: 60px;
  border-top: 1px rgb(150,150,150) solid;
`