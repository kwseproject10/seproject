import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FacultyLectureSelectedState, FacultyNavigationAccordianActivedState, FacultyNavigationState, userIDState } from "../../../Atom";
import { DefaultRow, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const FacultyLectureList = ({ lectures }) => {
  const userID = useRecoilValue(userIDState);
  const setSelectedLecture = useSetRecoilState(FacultyLectureSelectedState);
  const setNavigationIndex = useSetRecoilState(FacultyNavigationState);
  const setNavAccordianActived = useSetRecoilState(FacultyNavigationAccordianActivedState);
  const movePage = useNavigate();

  const onClickListRow = (lectureID, index) => {
    setSelectedLecture(lectureID);
    setNavigationIndex(5 + index);
    setNavAccordianActived(true);
    movePage('/faculty/manage');
  }
  console.log(lectures);
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
              <DefaultRow>
                <Left>
                  <NoticeTitle
                    onClick={() => {
                      onClickListRow(lecture.ID, index);
                    }}
                  >
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
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default FacultyLectureList;