import { Center, LectureProfessor, LectureType, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitlePlusButton, TitleText } from "./style";
import { TbPlus } from "react-icons/tb";

const LectureList = ({ lectures, onClickPlusButton }) => {
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
            <ListRow key={index}>
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