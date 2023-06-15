import BoardPageList from "@components/Lists/BoardPageList";
import PostDetail from "@components/Lists/BoardPageList/PostDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LectureSelectedState, SelectedPostIDState, SetInDetailPostState, userIDState } from "../../../../Atom";
import { NoticePageWrap } from "./style";

const LectureDetailNotice = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [inDetail, setInDetail] = useRecoilState(SetInDetailPostState);
  const [noticeID, setNoticeID] = useRecoilState(SelectedPostIDState);

  const userID = useRecoilValue(userIDState);
  const selectedLecture = useRecoilValue(LectureSelectedState);
  
  useEffect(() => {
    const fetchNotice = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/notice?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("notice load fail");
        return
      }
      setNoticeList(res.data);
    }
    fetchNotice();
  }, [ userID, selectedLecture ])

  return (
    <NoticePageWrap>
      {inDetail ?
        <PostDetail
          setInDetail={setInDetail}
          postID={noticeID}
          boardName={"강의 공지사항"}
        />
        :
        <BoardPageList
          list={noticeList}
          linePerPage={10}
          setInDetail={setInDetail}
          setPostID={setNoticeID}
          boardTitle={"강의 공지사항"}
        />
      }
    </NoticePageWrap>
  )
}

export default LectureDetailNotice;