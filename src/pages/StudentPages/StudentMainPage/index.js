import MainPageCalendar from "@components/Calendar/MainPageCalendar";
import AssignmentList from "@components/Lists/AssignmentList";
import CreditList from "@components/Lists/CreaditList";
import NoticeList from "@components/Lists/NoticeList";
import Profile from "@components/Profile";
import MainPageTimeTable from "@components/TimeTable/MainPageTimeTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { StudentNavigationState, userIDState } from "../../../Atom";
import { AssignmentCard, CalendarCard, CreditCard, GridContainer, GridWrap, MainPageWrap, NoticeCard, ProfileCard, TimeTableCard } from "./style";

const StudentMainPage = () => {
  const [assignment, setAssignment] = useState([]);
  const [notices, setNotices] = useState([]);
  const userID = useRecoilValue(userIDState);

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

  useEffect(loadAssignment, []);
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/wholenotice?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("load fail");
        return
      }
      console.log(res.data);
      setNotices(res.data);
    }

    fetch()
  }, [ userID ])

  const movePage = useNavigate();
  const setNavigationIndex = useSetRecoilState(StudentNavigationState);

  const goProfile = () => {
    movePage('/student/mypage');
  }

  const goLectureList = () => {
    movePage('/student/timetable');
  }

  return (
    <MainPageWrap>
      <GridWrap>
        <GridContainer>
          <ProfileCard>
            <Profile
              onClickPlusButton={() => {
                goProfile();
                setNavigationIndex(4);
              }}
            />
          </ProfileCard>

          <TimeTableCard>
            <MainPageTimeTable
              onClickPlusButton={() => {
                goLectureList();
                setNavigationIndex(1);
              }}
            />
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
            />
          </NoticeCard>

          <AssignmentCard>
            <AssignmentList
              listTitle={"미제출 과제 현황"}
              list={assignment}
              maxRows={5}
              subjectName={true}
            />
          </AssignmentCard>
        </GridContainer>
      </GridWrap>
    </MainPageWrap>
  )
}

export default StudentMainPage;