import TimeTable from "@components/TimeTable";
import TimeTablePageLectureList from "@components/Lists/TimeTablePageLectureList";
import { useEffect } from "react";
import { useState } from "react";
import { LectureListWrap, PageRow, TimeTablePageWrap } from "./style";

const StudentTimeTablePage = () => {
  const [ lectures, setLectures ] = useState([]);
  const [ selectedSemester, setSelectedSemester ] = useState("");
  const [ semesters, setSemesters ] = useState([]);

  //API call
  const loadSemsters = () => {
    setSemesters([
      "2023학년도 1학기",
      "2022학년도 2학기",
      "2022학년도 1학기",
      "2021학년도 2학기",
      "2021학년도 1학기",
      "2020학년도 2학기",
      "2020학년도 1학기",
    ]);
    setSelectedSemester("2023학년도 1학기");
  };
  const loadLectures = (semester) => {
    if(semester === "2023학년도 1학기"){
      setLectures([
        {
          key: "0",
          name: "소프트웨어공학",
          professor: "이기훈",
          type: "전선",
          time: ["월5","수6"],
          place: ["새빛205","새빛205"],
          ID: "H020-4-0846-01",
        },
        {
          key: "1",
          name: "디지털논리회로1",
          professor: "유지현",
          type: "전필",
          time: ["금5","금6"],
          place: ["새빛203","새빛203"],
          ID: "H020-2-0453-01",
        },
        {
          key: "2",
          name: "신호및시스템",
          professor: "이성원",
          type: "전선",
          time: ["월4","수3"],
          place: ["새빛102","새빛102"],
          ID: "H020-3-2004-01",
        },
        {
          key: "3",
          name: "임베디드시스템S/W설계",
          professor: "김태석",
          type: "전선",
          time: ["월6","수5"],
          place: ["새빛205","새빛205"],
          ID: "H020-4-5861-01",
        },
        {
          key: "4",
          name: "머신러닝",
          professor: "박철수",
          type: "전선",
          time: ["월3","수4"],
          place: ["새빛203","새빛203"],
          ID: "H020-4-8483-01",
        },
        {
          key: "4",
          name: "머신러닝",
          professor: "박철수",
          type: "전선",
          time: ["월9","수2"],
          place: ["새빛203","새빛203"],
          ID: "H020-4-8483-01",
        }
      ])
     }else{
      setLectures([]);
     }
  }
  useEffect(loadSemsters,[]);
  useEffect(() => {loadLectures(selectedSemester);},[selectedSemester]);

  return(
      <TimeTablePageWrap>
        <PageRow>
          <TimeTable
            setSelectedSemester={setSelectedSemester}
            selectedSemester={selectedSemester}
            semesters={semesters}
            lectures={lectures}
            isDetail={true}
          />
          <LectureListWrap>
            <TimeTablePageLectureList
              lectures={lectures}
            />
          </LectureListWrap>
        </PageRow>
      </TimeTablePageWrap>
  )
}

export default StudentTimeTablePage;