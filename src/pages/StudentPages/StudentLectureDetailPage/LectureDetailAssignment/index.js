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