import { LectureSelectedState } from "@./Atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { ArchiveCard, AssignmentCard, AttendanceCard, AttendanceRow, BottomContents, BottomContentsWrap, MainWrap, NoticeCard } from "./style";
import NoticeList from "@components/Lists/NoticeList";
import AttendanceList from "@components/Lists/AttendanceList";
import ArchiveList from "@components/Lists/ArchiveList";
import AssignmentList from "@components/Lists/AssignmentList";

const LectureDetailMain = ({ setNavigationindex }) => {
  const [selectedLecture, setSelectedLecture] = useRecoilState(LectureSelectedState);
  const [attendance, setAttendance] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [assignmentList, setAssignmentList] = useState([]);

  //API call
  const loadInforms = (selectedLecture) => {
    setAssignmentList([
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
    ]);
    setNoticeList([
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
    ]);
    const AttendanceAll = {
      "H020-4-0846-01": [
        [1, 0], [1, 1], [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
      ],
      "H020-2-0453-01": [
        [1], [0.6], [1], [1], [0], [1], [1], [1], [1, 1], [1, 1], [1, 1], [0, 1, 1], [1, 1]
      ],
      "H020-3-2004-01": [
        [1, 1], [1, 0], [0, 1], [1, 1], [1, 1], [1, 1], [1, 1], [], [0.6, 0], [1, 0.6], [1, 0.6], [1, 0.6], [1, 1]
      ],
      "H020-4-5861-01": [
        [0], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [], [1, 1], [1, 1], [1, 1], [1, 1, 1], [1, 0], [1, 1]
      ],
      "H020-4-8483-01": [
        [1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 0, 0], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1], [1], [1], [0], [1, 0], [1]
      ]
    };
    setAttendance(AttendanceAll[selectedLecture]);
    setArchiveList([
      {
        key: "0",
        title: "A. Exception Handling",
        subject: "소프트웨어공학",
        date: "2023.06.05(월)",
        hit: 6
      },
      {
        key: "1",
        title: "11-2, 3 Reliability",
        subject: "소프트웨어공학",
        date: "2023.06.03(토)",
        hit: 21
      },
      {
        key: "2",
        title: "11-1 Reliability",
        subject: "소프트웨어공학",
        date: "2023.05.25(목)",
        hit: 11
      },
      {
        key: "3",
        title: "10 Dependable Systems",
        subject: "소프트웨어공학",
        date: "2023.05.25(목)",
        hit: 11
      },
      {
        key: "4",
        title: "09 Software Evolution",
        subject: "소프트웨어공학",
        date: "2023.05.13(토)",
        hit: 24
      },
      {
        key: "5",
        title: "08 Software Testing",
        subject: "소프트웨어공학",
        date: "2023.05.07(일)",
        hit: 11
      },
      {
        key: "6",
        title: "07 Design and Implementation",
        subject: "소프트웨어공학",
        date: "2023.05.01(월)",
        hit: 29
      },
      {
        key: "7",
        title: "06 Architectural Design",
        subject: "소프트웨어공학",
        date: "2023.04.11(화)",
        hit: 30
      }
    ]);
  }

  useEffect(() => { loadInforms(selectedLecture) }, [selectedLecture]);
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