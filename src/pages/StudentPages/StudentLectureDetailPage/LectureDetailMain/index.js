import { LectureSelectedState } from "@./Atom";
import ArchiveList from "@components/Lists/ArchiveList";
import AssignmentList from "@components/Lists/AssignmentList";
import AttendanceList from "@components/Lists/AttendanceList";
import NoticeList from "@components/Lists/NoticeList";
import axios from "axios";
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
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/attendance?userID=${userID}&lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("attendance load fail");
        return
      }
      console.log(res.data);
      setAttendance(res.data);
    }

    fetchAttendance();
  }, [ userID, selectedLecture ])
  
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
      console.log(res.data);
      setNoticeList(res.data);
    }
    fetchNotice();
  }, [ userID, selectedLecture ])
  
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