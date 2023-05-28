import { useState } from "react";
import { Left, Right, WholeWrap } from "./style";
import { useEffect } from "react";
import ScheduleList from "../../Lists/ScheduleList";
import Calendar from "..";

const MainPageCalendar = () => {
  const [ schedules, setSchedules ] = useState([]);

  const loadSchedules = () => {
    setSchedules([
      {
        key: "0",
        title: "13주차 강의",
        subject: "머신러닝",
        date: "2023.05.29(월)",
        time: "12:00"
      },
      {
        key: "1",
        title: "13주차 강의",
        subject: "신호및시스템",
        date: "2023.05.29(월)",
        time: "13:30"
      },
      {
        key: "2",
        title: "13주차 강의(온라인)",
        subject: "임베디드시스템S/W설계",
        date: "2023.05.29(월)",
        time: "15:00"
      },
      {
        key: "3",
        title: "13주차 강의",
        subject: "소프트웨어공학",
        date: "2023.05.29(월)",
        time: "16:30"
      },
      {
        key: "4",
        title: "[과제] 3차 프로젝트",
        subject: "소프트웨어공학",
        date: "2023.05.30(화)",
        time: "23:59"
      }
    ])
  };
  useEffect(loadSchedules,[]);

  return(
    <WholeWrap>
      <Left>
        <Calendar schedules={schedules}/>
      </Left>

      <Right>
        <ScheduleList schedules={schedules}/>
      </Right>
    </WholeWrap>
  )
}

export default MainPageCalendar;