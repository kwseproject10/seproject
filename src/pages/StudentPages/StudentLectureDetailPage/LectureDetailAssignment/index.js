import { useEffect, useState } from "react";
import AssignmentDetail from "../../../../components/Lists/AssignmentPageList/PostDetail";
import AssignmentPageList from './../../../../components/Lists/AssignmentPageList/index';
import { NoticePageWrap } from "./style";

const LecutreDetailAssignment = () => {
  const [assignmentList, setAssignmentList] = useState([]);
  const [inDetail, setInDetail] = useState(false);
  const [assignmentID, setAssignmentID] = useState("");
  
  //API call
  const loadNoticeList = () => {
    setAssignmentList([
      {
        ID: "0",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "1",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "2",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "김태석",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "3",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이성원",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "4",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "박철수",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "5",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "6",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "7",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "8",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "9",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "10",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "11",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "12",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "13",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "14",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "15",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "16",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "17",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "18",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "19",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      },
      {
        ID: "20",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10,
        dueDate: "2023.06.15(금)",
        Dday: 3,
        state: "미제출"
      }
    ]);
  }
  useEffect(loadNoticeList, []);
  return (
    <NoticePageWrap>
    {inDetail ?
      <AssignmentDetail
        setInDetail={setInDetail}
        postID={assignmentID}
        boardName={"과제"}
      />
      :
      <AssignmentPageList
        list={assignmentList}
        linePerPage={5}
        setInDetail={setInDetail}
        setPostID={setAssignmentID}
        boardTitle={"과제"}
      />
    }
    </NoticePageWrap>
  )
}

export default LecutreDetailAssignment;