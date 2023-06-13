import { TbPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LectureSelectedState, StudentNavigationAccordianActivedState, StudentNavigationState } from './../../../Atom';
import { LectureProfessor, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitlePlusButton, TitleText } from "./style";

const LectureList = ({ lectures, onClickPlusButton }) => {
  const setSelectedLecture = useSetRecoilState(LectureSelectedState);
  const setNavigationIndex = useSetRecoilState(StudentNavigationState);
  const setNavAccordianActived = useSetRecoilState(StudentNavigationAccordianActivedState);
  const movePage = useNavigate();
  const onClickListRow = (lectureID, index) => {
    setSelectedLecture(lectureID);
    setNavigationIndex(5 + index);
    setNavAccordianActived(true);
    movePage('/student/lecturedetail');
  }
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          수강 중인 강의
        </TitleText>
        <TitlePlusButton
          onClick={onClickPlusButton}
        >
          <TbPlus/>
        </TitlePlusButton>
      </ListTitle>
      <ListBox>
        {lectures.map((element,index)=>{
          return(
            <ListRow
              key={index}
              onClick={() => {
                onClickListRow(element.ID, index);
              }}
            >
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
                  {element.professor}
                </LectureProfessor>
                <LectureType>
                  {element.type}
                </LectureType>
              <Right>
                {element.time.map((e, i)=>{
                  return(
                    e + "(" + (element.place[i]) + ")" + (i === element.time.length - 1 ? "" : " / ")
                  )
                })}
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default LectureList;