import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FacultyLectureSelectedState, FacultyNavigationAccordianActivedState, FacultyNavigationState, FacultySelectedLectureNameState, userIDState } from "../../../Atom";
import { Button, ButtonRow, ButtonRowsWrap, DefaultRow, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const FacultyLectureList = ({ lectures }) => {
  const userID = useRecoilValue(userIDState);
  const setSelectedLectureID = useSetRecoilState(FacultyLectureSelectedState);
  const setSelectedLectureName = useSetRecoilState(FacultySelectedLectureNameState);
  const setNavigationIndex = useSetRecoilState(FacultyNavigationState);
  const setNavAccordianActived = useSetRecoilState(FacultyNavigationAccordianActivedState);
  const movePage = useNavigate();
  const [actived, setActived] = useState(-1);

  const onClickButton = (lectureID, lectureName, index, url) => {
    setNavAccordianActived(`${index}`);
    setSelectedLectureID(lectureID);
    setSelectedLectureName(lectureName);
    setNavigationIndex(3 + index);
    movePage(url);
  }

  return (
    <ListWrap>
      <ListTitle>
        <TitleText>
          강의 목록
        </TitleText>
      </ListTitle>
      <ListBox>
        {lectures.map((lecture, index) => {
          return (
            <ListRow key={index}>
              <DefaultRow
                onClick={() => {
                  if (index === actived) { setActived(-1); }
                  else { setActived(index); }
                }}
              >
                <Left>
                  <NoticeTitle>
                    {
                      lecture.name.length > 30 ?
                        lecture.name.slice(0, 29) + "..."
                        :
                        lecture.name
                    }</NoticeTitle>
                  <NoticeSubject>{lecture.ID}</NoticeSubject>
                </Left>
                <LectureType>
                  분류 {lecture.type}
                </LectureType>
                <Right>
                  장소(시간) {lecture.time.map((e, i) => {
                    return (
                      e + "(" + (lecture.place[i]) + ")" + (i === lecture.time.length - 1 ? "" : " / ")
                    )
                  })}
                </Right>
              </DefaultRow>
              <ButtonRowsWrap
                actived={actived}
                index={index}
              >
                <ButtonRow>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 1, 'manage')
                    }}
                  >
                    강의계획서 관리
                  </Button>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 2, 'manage')
                    }}
                  >
                    공지사항 관리
                  </Button>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 3, 'manage')
                    }}
                  >
                    자료실 관리
                  </Button>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 4, 'manage')
                    }}
                  >
                    과제 관리
                  </Button>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 5, 'manage')
                    }}
                  >
                    출석 관리
                  </Button>
                  <Button
                    onClick={() => {
                      onClickButton(lecture.ID, lecture.name, 7, 'manage')
                    }}
                  >
                    성적 관리
                  </Button>
                </ButtonRow>
              </ButtonRowsWrap>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default FacultyLectureList;