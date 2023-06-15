import BoardPageList from "@components/Lists/BoardPageList";
import PostDetail from "@components/Lists/BoardPageList/PostDetail";
import { useEffect, useState } from "react";
import { NoticePageWrap } from "./style";

const LectureDetailArchive = () => {
  const [archiveList, setArchiveList] = useState([]);
  const [inDetail, setInDetail] = useState(false);
  const [archiveID, setArchiveID] = useState("");
  
  //API call
  const loadNoticeList = () => {
    setArchiveList([
      {
      ID: "0",
      title: "중간고사 시험범위",
      subject: "소프트웨어공학",
      date: "2022.01.01(월)",
      poster: "이기훈",
      hit: 10
    },
    {
      ID: "1",
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
    {inDetail ?
      <PostDetail
        setInDetail={setInDetail}
        postID={archiveID}
        boardName={"자료실"}
      />
      :
      <BoardPageList
        list={archiveList}
        linePerPage={10}
        setInDetail={setInDetail}
        setPostID={setArchiveID}
        boardTitle={"자료실"}
      />
    }
    </NoticePageWrap>
  )
}

export default LectureDetailArchive;