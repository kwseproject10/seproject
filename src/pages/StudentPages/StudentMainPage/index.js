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

  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/wholeassignment?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("load fail");
        return
      }
      let temp = [];
      for(let i = 0; i < res.data.length; i++ ) {
        if(parseInt(res.data[i].due) > 0){
          temp.push(res.data[i]);
        }
      }
      setAssignment(temp);
    }

    fetch()
  }, [ userID ])

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