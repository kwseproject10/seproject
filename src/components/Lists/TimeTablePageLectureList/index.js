import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LectureDetailNavigationState, LectureSelectedState, SelectedPostIDState, SetInDetailPostState, StudentNavigationAccordianActivedState, StudentNavigationState, userIDState } from "../../../Atom";
import { AttendanceChart, AttendanceChartChild, AttendanceChartRow, DefaultRow, DetailCenter, DetailInformRow, DetailLeft, DetailRight, LectureProfessor, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const DetailInform = ({ lectureID,lectureIndex }) => {
  const [lastNotice, setLastNotice] = useState();
  const [lastArchive, setLastArchive] = useState();
  const [lastAssignment, setLastAssignment] = useState();
  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/lecturelastboard?lectureID=${lectureID}`;
      const res = await axios.get(
        route
      );
      if (res.data.error === "No result found" || res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      res.data.forEach((e) => {
        if (e.type === "notice") {
          setLastNotice(e)
        } else if (e.type === "download") {
          setLastArchive(e)
        } else if (e.type === "assignment") {
          setLastAssignment(e)
        }
      })
    }
    fetchAssignment();
  }, [lectureID])

  const movePage = useNavigate();
  const setStudentNavigation = useSetRecoilState(StudentNavigationState);
  const setStudentNavigationAccordianActived = useSetRecoilState(StudentNavigationAccordianActivedState);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const setLectureDetailNavigationState = useSetRecoilState(LectureDetailNavigationState);
  const setSelectedPostID = useSetRecoilState(SelectedPostIDState);
  const setInDetail = useSetRecoilState(SetInDetailPostState);
  return (
    <DetailInformRow>
      <DetailLeft
      >
        최신 과제
        {!lastAssignment ? "가 없습니다." : ` ${lastAssignment.title}`}
      </DetailLeft>
      <DetailCenter

      >
        최신 자료
        {!lastArchive ? "가 없습니다." : ` ${lastArchive.title}`}
      </DetailCenter>
      <DetailRight

      >
        최신 공지
        {!lastNotice ? "가 없습니다." : ` ${lastNotice.title}`}
      </DetailRight>
    </DetailInformRow>
  )
}

const TimeTablePageLectureList = ({ lectures }) => {
  const userID = useRecoilValue(userIDState);
  const [attendance, setAttendance] = useState({});
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const setNavigationIndex = useSetRecoilState(StudentNavigationState);
  const setNavAccordianActived = useSetRecoilState(StudentNavigationAccordianActivedState);
  const setInDetail = useSetRecoilState(SetInDetailPostState);
  const setLectureDetailNavigation = useSetRecoilState(LectureDetailNavigationState);
  const movePage = useNavigate();
  const onClickListRow = (lectureID, index) => {
    setSelectedLecture(lectureID);
    setNavigationIndex(5 + index);
    setNavAccordianActived(true);
    setLectureDetailNavigation(0);
    setInDetail(false);
    movePage('/student/lecturedetail');
  }

  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/wholeattendance?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        return
      }
      setAttendance(res.data);
    }
    fetch()
  }, [userID])

  return (
    <ListWrap>
      <ListTitle>
        <TitleText>
          수강 중인 강의
        </TitleText>
      </ListTitle>
      <ListBox>
        {lectures.map((element, index) => {
          return (
            <ListRow key={index}>
              <DefaultRow
                onClick={() => {
                  onClickListRow(element.ID, index);
                }}
              >
                <Left>
                  <NoticeTitle>
                    {
                      element.name.length > 30 ?
                        element.name.slice(0, 29) + "..."
                        :
                        element.name
                    }
                  </NoticeTitle>
                  <NoticeSubject>{element.ID}</NoticeSubject>
                </Left>
                <LectureProfessor>
                  교수 {element.professor}
                </LectureProfessor>
                <LectureType>
                  분류 {element.type}
                </LectureType>
                <Right>
                  장소(시간) {element.time.map((e, i) => {
                    return (
                      e + "(" + (element.place[i]) + ")" + (i === element.time.length - 1 ? "" : " / ")
                    )
                  })}
                </Right>
              </DefaultRow>

              <DetailInform lectureID={element.ID} lectureIndex={index}/>

              <AttendanceChartRow col={16}>
                <AttendanceChart>
                  {
                    attendance[element.ID] !== undefined ?
                      attendance[element.ID].map(
                        (week, weekIndex) => {
                          if (week === undefined) return "";
                          const attdays = week.reduce((a, b) => a + b, 0);
                          const days = week.length;
                          return (
                            <>
                              <AttendanceChartChild
                                row={1}
                                column={weekIndex + 1}
                              >
                                {weekIndex + 1}주차
                              </AttendanceChartChild>
                              <AttendanceChartChild
                                row={2}
                                column={weekIndex + 1}
                                color={attdays === days ?
                                  "green"
                                  :
                                  (attdays === 0 ?
                                    "red"
                                    :
                                    "orange"
                                  )
                                }
                              >
                                {week.reduce((a, b) => a + b, 0)} / {week.length}
                              </AttendanceChartChild>
                            </>
                          )
                        }
                      )
                      :
                      ""
                  }
                </AttendanceChart>
              </AttendanceChartRow>

            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default TimeTablePageLectureList;