import NoticeList from "@components/Lists/NoticeList";
import { AssignmentCard, CalendarCard, CreditCard, Footer, GridContainer, GridWrap, MainPageWrap, NoticeCard, ProfileCard, TimeTableCard } from "./style";
import AssignmentList from "../../../components/Lists/AssignmentList";
import MainPageCalendar from "../../../components/Calendar/MainPageCalendar";

const StudentMainPage = () => {
  return (
    <MainPageWrap>
      <GridWrap>
        <GridContainer>
          <ProfileCard>
            Profile
          </ProfileCard>

          <TimeTableCard>
            TimeTable
          </TimeTableCard>

          <CreditCard>
            Credit
          </CreditCard>

          <CalendarCard>
            <MainPageCalendar/>
          </CalendarCard>

          <NoticeCard>
            <NoticeList/>
          </NoticeCard>

          <AssignmentCard>
            <AssignmentList/>
          </AssignmentCard>
        </GridContainer>
      </GridWrap>
    </MainPageWrap>
  )
}

export default StudentMainPage;