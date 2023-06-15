import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LectureDetailNavigationState, LectureSelectedState, SetInDetailPostState, StudentNavigationAccordianActivedState, StudentNavigationState, userIDState } from "../../../Atom";
import { AttendanceChart, AttendanceChartChild, AttendanceChartRow, DefaultRow, DetailCenter, DetailInformRow, DetailLeft, DetailRight, LectureProfessor, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

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
  const [renderData, setRenderData] = useState([]);

  const loadRenderData = async() => {
    let temp = [];
    if(lectures){
      for(let i = 0; i < lectures.length; i++){
        const lecture = lectures[i];

        const routeAssignment = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignment?lectureID=${lecture.ID}`;
        const resAssignment = await axios.get(
          routeAssignment
        );

        const routeArchive = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/archive?lectureID=${lecture.ID}`;
        const resArchive = await axios.get(
          routeArchive
        );

        const routeNotice = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/notice?lectureID=${lecture.ID}`;
        const resNotice = await axios.get(
          routeNotice
        );

        temp.push({
          name : lecture.name,
          ID : lecture.ID,
          professor : lecture.professor,
          type : lecture.type,
          time : lecture.time,
          place : lecture.place,
          firstAssignment : ( resAssignment.data ? resAssignment.data[0] : null),
          firstArchive : ( resArchive.data ? resArchive.data[0] : null),
          firstNotice : ( resNotice.data ? resNotice.data[0] : null)
        });
      }
    }
    setRenderData(temp);
    console.log("renderData" , renderData);
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
    fetch().then(
      loadRenderData()
    )
  }, [userID])

  return (
    <ListWrap>
      <ListTitle>
        <TitleText>
          수강 중인 강의
        </TitleText>
      </ListTitle>
      <ListBox>
        {renderData.map((element, index) => {
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

              <DetailInformRow>
                <DetailLeft>
                  최신 과제{renderData.firstAssignment ? renderData.firstAssignment.title : "가 없습니다."}
                </DetailLeft>
                <DetailCenter>
                  최신 자료{renderData.firstArchive ? renderData.firstArchive.title : "가 없습니다."}
                </DetailCenter>
                <DetailRight>
                  최신 공지{renderData.firstNotice ? renderData.firstNotice.title : "가 없습니다."}
                </DetailRight>
              </DetailInformRow>

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