import { LectureSelectedState } from "@./Atom";
import ArchiveList from "@components/Lists/ArchiveList";
import AssignmentList from "@components/Lists/AssignmentList";
import AttendanceList from "@components/Lists/AttendanceList";
import NoticeList from "@components/Lists/NoticeList";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState } from "../../../../Atom";
import { ArchiveCard, AssignmentCard, AttendanceCard, AttendanceRow, BottomContents, BottomContentsWrap, MainWrap, NoticeCard } from "./style";

const LectureDetailMain = ({ setNavigationindex }) => {
  const selectedLecture = useRecoilValue(LectureSelectedState);
  const [attendance, setAttendance] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [assignmentList, setAssignmentList] = useState([]);

  //API call
  const userID = useRecoilValue(userIDState);

  useEffect(() => {
    const fetchAttendance = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/attendance?userID=${userID}&lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
          [
              1,
              0
          ],
          [
              1,
              1
          ],
          [
              0,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ],
          [
              1,
              1
          ]
  ]
      }
      if(res.data.result === "false") {
        console.log("attendance load fail");
        return
      }
      setAttendance(res.data);
    }
    fetchAttendance();
  }, [ userID, selectedLecture ])
  
  useEffect(() => {
    const fetchArchive = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/archive?lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
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
        ]
      }
      if(res.data.result === "false") {
        console.log("archive load fail");
        return
      }
      setArchiveList(res.data);
    }
    fetchArchive();
  }, [ userID, selectedLecture ])
  
  useEffect(() => {
    const fetchNotice = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/notice?lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: [
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
        ]
      }
      if(res.data.result === "false") {
        console.log("notice load fail");
        return
      }
      setNoticeList(res.data);
    }
    fetchNotice();
  }, [ userID, selectedLecture ])
  
  useEffect(() => {
    const fetchAssignment = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignment?lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: [
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
        ]
      }
      if(res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      let temp = [];
      for(let i = 0; i < res.data.length; i++ ) {
        if(parseInt(res.data[i].due) > 0){
          temp.push(res.data[i]);
        }
      }
      setAssignmentList(temp);
    }
    fetchAssignment();
  }, [ userID, selectedLecture ])
  
  return (
    <MainWrap>
      <AttendanceRow>
        <AttendanceCard>
          <AttendanceList
            listTitle={"출석 현황"}
            list={attendance}
          />
        </AttendanceCard>
      </AttendanceRow>
      <BottomContentsWrap>
        <BottomContents>
          <NoticeCard>
            <NoticeList
              listTitle={"강의 공지사항"}
              list={noticeList}
              maxRows={10}
              subjectName={false}
              onClickPlusButton={() => {
                setNavigationindex(1);
              }}
            />
          </NoticeCard>
          <ArchiveCard>
            <ArchiveList
              listTitle={"자료실"}
              list={archiveList}
              maxRows={10}
              subjectName={false}
              onClickPlusButton={() => {
                setNavigationindex(2);
              }}
            />
          </ArchiveCard>
          <AssignmentCard>
            <AssignmentList
              listTitle={"미제출 과제"}
              list={assignmentList}
              maxRows={10}
              subjectName={false}
              onClickPlusButton={() => {
                setNavigationindex(3);
              }}
            />
          </AssignmentCard>
        </BottomContents>
      </BottomContentsWrap>
    </MainWrap>
  )
}

export default LectureDetailMain;