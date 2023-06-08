import { Dates, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitleText } from "./style";

const NoticeList = ({ listTitle, list, maxRows, height, width, subjectName }) => {
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          {listTitle}
        </TitleText>
      </ListTitle>
      <ListBox>
        {list.map((element,index)=>{
          if(index > maxRows - 1){return ""}
          return(
            <ListRow key={index}>
              <Left>
                <NoticeTitle subjectName={subjectName}>{
                  element.title.length > 30 ?
                    element.title.slice(0,29) + "..."
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
                 {element.date}
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