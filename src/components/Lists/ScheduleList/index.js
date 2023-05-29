import { Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const ScheduleList = ({ schedules }) => {
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          일정
        </TitleText>
      </ListTitle>
      <ListBox>
        {schedules.slice(0,5).map((element,index)=>{
          return(
            <ListRow key={index}>
              <Left>
                <NoticeTitle>{
                  element.title.length > 30 ?
                    element.title.slice(0,30) + "..."
                  :
                    element.title
                }</NoticeTitle>
                <NoticeSubject>{element.subject}</NoticeSubject>
              </Left>
              <Right>
                {element.date}
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default ScheduleList;