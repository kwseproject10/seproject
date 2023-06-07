import { useState } from "react";
import { NoticePageWrap } from "./style";
import { useEffect } from "react"; import { LectureSelectedState } from "@./Atom";
import { useRecoilState } from "recoil";
import BoardPageList from "@components/Lists/BoardPageList";

const LecutreDetailAssignment = () => {
  const [selectedLecture, setSelectedLecture] = useRecoilState(LectureSelectedState);
  const [noticeList, setNoticeList] = useState([]);
  
  //API call
  const loadNoticeList = () => {
    setNoticeList([
      {
        key: "0",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "1",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "2",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "김태석",
        hit: 10
      },
      {
        key: "3",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이성원",
        hit: 10
      },
      {
        key: "4",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "박철수",
        hit: 10
      },
      {
        key: "5",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "6",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "7",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "8",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "9",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "10",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "11",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "12",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "13",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "14",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "15",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "16",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "17",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "18",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "19",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        key: "20",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      }
    ]);
  }
  useEffect(loadNoticeList, []);
  return (
    <NoticePageWrap>
      <BoardPageList
        list={noticeList}
        linePerPage={5}
      />
    </NoticePageWrap>
  )
}

export default LecutreDetailAssignment;