import { useEffect, useState } from "react";
import { AttendanceChart, AttendanceChartChild, AttendanceChartRow,  DefaultRow, DetailCenter, DetailInformRow, DetailLeft, DetailRight, LectureProfessor, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const TimeTablePageLectureList = ({ lectures }) => {
  const [ attendance, setAttendance ] = useState({});
  
  //API call
  const loadAttendance = () => {
    setAttendance({
      "H020-4-0846-01": [
        [1,0],[1,1],[0,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
      ],
      "H020-2-0453-01": [
        [1],[0.6],[1],[1],[0],[1],[1],[1],[1,1],[1,1],[1,1],[0,1,1],[1,1]
      ],
      "H020-3-2004-01": [
        [1,1],[1,0],[0,1],[1,1],[1,1],[1,1],[1,1],[],[0.6,0],[1,0.6],[1,0.6],[1,0.6],[1,1]
      ],
      "H020-4-5861-01": [
        [0],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[],[1,1],[1,1],[1,1],[1,1,1],[1,0],[1,1]
      ],
      "H020-4-8483-01": [
        [1,1,1,1],[1,1,1,0],[1,1,0,0],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1],[1],[1],[0],[1,0],[1]
      ]
    });
  }

  useEffect(loadAttendance,[]);

  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          수강 중인 강의
        </TitleText>
      </ListTitle>
      <ListBox>
        {lectures.map((element,index)=>{
          return(
            <ListRow key={index}>
              <DefaultRow>
                <Left>
                  <NoticeTitle>{
                    element.name.length > 30 ?
                      element.name.slice(0,29) + "..."
                    :
                      element.name
                  }</NoticeTitle>
                  <NoticeSubject>{element.ID}</NoticeSubject>
                </Left>
                  <LectureProfessor>
                    교수 {element.professor}
                  </LectureProfessor>
                  <LectureType>
                    분류 {element.type}
                  </LectureType>
                <Right>
                  장소(시간) {element.time.map((e, i)=>{
                    return(
                      e + "(" + (element.place[i]) + ")" + (i === element.time.length - 1 ? "" : " / ")
                    )
                  })}
                </Right>
              </DefaultRow>

              <DetailInformRow>
                <DetailLeft>
                  과제 1개 중 1개가 2일 남았습니다.
                </DetailLeft>
                <DetailCenter>
                  최신 자료: [실습] 개발환경실습
                </DetailCenter>
                <DetailRight>
                  최신 공지사항: 실습 수업 장소 및 자리 배치
                </DetailRight>
              </DetailInformRow>

              <AttendanceChartRow col={16}>
                <AttendanceChart>
                  {
                    attendance[element.ID] !== undefined ?
                    attendance[element.ID].map(
                      (week, weekIndex) => {
                        if(week === undefined) return "";
                        const attdays = week.reduce((a,b) => a+b, 0);
                        const days = week.length;
                        return(
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
                              {week.reduce((a,b)=>a+b, 0)} / {week.length}
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