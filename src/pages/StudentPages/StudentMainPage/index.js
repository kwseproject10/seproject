import { AssignmentCard, CalendarCard, CreditCard, Footer, GridContainer, GridWrap, MainPageWrap, NoticeCard, ProfileCard, TimeTableCard } from "./style";
import AssignmentList from "@components/Lists/AssignmentList";
import MainPageCalendar from "@components/Calendar/MainPageCalendar";
import MainPageTimeTable from "@components/TimeTable/MainPageTimeTable";
import CreditList from "@components/Lists/CreaditList";
import Profile from "@components/Profile";
import NoticeList from "@components/Lists/NoticeList";
import { useEffect, useState } from "react";

const StudentMainPage = () => {
  const [ assignment, setAssignment ] = useState([]);
  const [ notices, setNotices ] = useState([]);

  //API call
  const loadAssignment = () => {
    setAssignment([
      {
        key: "0",
        title: "Implementation of Ripple Carry Adder using Verilog",
        subject: "디지털논리회로1",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "3"
      },
      {
        key: "1",
        title: "3차 프로젝트",
        subject: "소프트웨어공학",
        startDate: "2023.05.10(일)",
        endDate: "2023.06.16(월)",
        due: "6"
      },
      {
        key: "2",
        title: "Term Project",
        subject: "컴퓨터네트워크",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "6"
      },
      {
        key: "3",
        title: "Signal&System HW #5",
        subject: "신호및시스템",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "13"
      },
      {
        key: "4",
        title: "[project]embedded system design on uCOS - final",
        subject: "임베디드시스템S/W설계",
        startDate: "2022.01.01(월)",
        endDate: "2023.12.31(월)",
        due: "20"
      }
    ])
  };
  const loadNotices = () => {
    setNotices([
      {
        key: "0",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)"
      },
      {
        key: "1",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)"
      },
      {
        key: "2",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)"
      },
      {
        key: "3",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)"
      },
      {
        key: "4",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)"
      }
    ])
  };

  useEffect(loadAssignment,[]);
  useEffect(loadNotices,[]);

  return (
    <MainPageWrap>
      <GridWrap>
        <GridContainer>
          <ProfileCard>
            <Profile
              onClickPlusButton={() => {
                    
              }}
            />
          </ProfileCard>

          <TimeTableCard>
            <MainPageTimeTable />
          </TimeTableCard>

          <CreditCard>
            <CreditList />
          </CreditCard>

          <CalendarCard>
            <MainPageCalendar />
          </CalendarCard>

          <NoticeCard>
            <NoticeList
              listTitle={"강의 공지사항"}
              list={notices}
              maxRows={5}
              subjectName={true}
              onClickPlusButton={() => {

              }}
            />
          </NoticeCard>

          <AssignmentCard>
            <AssignmentList
              listTitle={"미제출 과제 현황"}
              list={assignment}
              maxRows={5}
              subjectName={true}
              onClickPlusButton={() => {
                
              }}
            />
          </AssignmentCard>
        </GridContainer>
      </GridWrap>
    </MainPageWrap>
  )
}

export default StudentMainPage;