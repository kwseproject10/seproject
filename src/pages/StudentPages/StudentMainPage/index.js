import { AssignmentCard, CalendarCard, CreditCard, Footer, GridContainer, GridWrap, MainPageWrap, NoticeCard, ProfileCard, TimeTableCard } from "./style";
import AssignmentList from "@components/Lists/AssignmentList";
import MainPageCalendar from "@components/Calendar/MainPageCalendar";
import MainPageTimeTable from "@components/TimeTable/MainPageTimeTable";
import CreditList from "@components/Lists/CreaditList";
import Profile from "@components/Profile";
import NoticeList from "@components/Lists/NoticeList";

const StudentMainPage = () => {
  return (
    <MainPageWrap>
      <GridWrap>
        <GridContainer>
          <ProfileCard>
            <Profile/>
          </ProfileCard>

          <TimeTableCard>
            <MainPageTimeTable/>
          </TimeTableCard>

          <CreditCard>
            <CreditList/>
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