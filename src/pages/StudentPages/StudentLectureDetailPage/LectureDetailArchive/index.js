import BoardPageList from "@components/Lists/BoardPageList";
import PostDetail from "@components/Lists/BoardPageList/PostDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LectureSelectedState, SelectedPostIDState, SetInDetailPostState, userIDState } from "../../../../Atom";
import { NoticePageWrap } from "./style";

const LectureDetailArchive = () => {
  const [archiveList, setArchiveList] = useState([]);
  const [inDetail, setInDetail] = useRecoilState(SetInDetailPostState);
  const [archiveID, setArchiveID] = useRecoilState(SelectedPostIDState);
  
  const userID = useRecoilValue(userIDState);
  const selectedLecture = useRecoilValue(LectureSelectedState);
  
  useEffect(() => {
    const fetchArchive = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/archive?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("archive load fail");
        return
      }
      console.log(res.data);
      setArchiveList(res.data);
    }
    fetchArchive();
  }, [ userID, selectedLecture ])

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