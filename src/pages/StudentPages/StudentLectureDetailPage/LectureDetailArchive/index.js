import { useState } from "react";
import { NoticePageWrap } from "./style";
import { useEffect } from "react"; import { LectureSelectedState } from "@./Atom";
import { useRecoilState } from "recoil";
import BoardPageList from "@components/Lists/BoardPageList";

const LectureDetailArchive = () => {
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
    }
  ]);
  }
  useEffect(loadNoticeList, []);
  return (
    <NoticePageWrap>
      <BoardPageList
        list={noticeList}
        linePerPage={10}
      />
    </NoticePageWrap>
  )
}

export default LectureDetailArchive;