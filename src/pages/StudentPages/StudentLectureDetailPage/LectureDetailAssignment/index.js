import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LectureSelectedState, SelectedPostIDState, SetInDetailPostState, userIDState } from "../../../../Atom";
import AssignmentDetail from "../../../../components/Lists/AssignmentPageList/PostDetail";
import AssignmentPageList from './../../../../components/Lists/AssignmentPageList/index';
import { NoticePageWrap } from "./style";

const LecutreDetailAssignment = () => {
  const [assignmentList, setAssignmentList] = useState([]);
  const [inDetail, setInDetail] = useRecoilState(SetInDetailPostState);
  const [assignmentID, setAssignmentID] = useRecoilState(SelectedPostIDState);
  const userID = useRecoilValue(userIDState);
  const selectedLecture = useRecoilValue(LectureSelectedState);
  
  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignment?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setAssignmentList(res.data);
    }
    fetchAssignment();
  }, [ userID, selectedLecture ])

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