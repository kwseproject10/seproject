import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LectureDetailNavigationState, LectureSelectedState, LecturesState, SelectedPostIDState, SetInDetailPostState, StudentNavigationAccordianActivedState, StudentNavigationState } from './../../../Atom';
import { toStringFormat } from './../../../utils/date';
import { Dates, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const NoticeList = ({ listTitle, list, maxRows, height, width, subjectName }) => {
  const setStudentNavigation = useSetRecoilState(StudentNavigationState);
  const setStudentNavigationAccordianActived = useSetRecoilState(StudentNavigationAccordianActivedState);
  const setSelectedPostID = useSetRecoilState(SelectedPostIDState);
  const setInDetail = useSetRecoilState(SetInDetailPostState);
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const setLectureDetailNavigation = useSetRecoilState(LectureDetailNavigationState);
  const lectures = useRecoilValue(LecturesState);
  const movePage = useNavigate();

  const handleSelectedLecture = (lectureName) => {
    lectures.forEach((lecture, index) => {
      if (lecture.name === lectureName) {
        setSelectedLecture(lecture.ID);
        setStudentNavigation(index + 5);
        setLectureDetailNavigation(1);
        return;
      }
    })
  }

  return (
    <ListWrap>
      <ListTitle>
        <TitleText>
          {listTitle}
        </TitleText>
      </ListTitle>
      <ListBox>
        {list.map((element, index) => {
          if (index > maxRows - 1) { return "" }
          return (
            <ListRow key={index}
              onClick={() => {
                handleSelectedLecture(element.subject);
                setSelectedPostID(element.key);
                setStudentNavigationAccordianActived(true);
                setInDetail(true);
                movePage('/student/lecturedetail');
              }}
            >
              <Left>
                <NoticeTitle subjectName={subjectName}>{
                  element.title && element.title.length > 30 ?
                    element.title.slice(0, 29) + "..."
                    :
                    element.title
                }</NoticeTitle>
                {subjectName ?
                  <NoticeSubject>{element.subject}</NoticeSubject>
                  :
                  ""
                }
              </Left>
              <Right>
                <Dates>
                  {toStringFormat(element.date)}
                </Dates>
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default NoticeList;