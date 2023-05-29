import { Center, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const LectureList = ({ lectures }) => {
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
              <Left>
                <NoticeTitle>{
                  element.name.length > 30 ?
                    element.name.slice(0,29) + "..."
                  :
                    element.name
                }</NoticeTitle>
                <NoticeSubject>{element.ID}</NoticeSubject>
              </Left>
              <Center>
                <div>
                  {element.professor}
                </div>
                <div>
                  {element.type}
                </div>
              </Center>
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