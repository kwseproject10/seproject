import { Dates, DueDate, EndDate, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, StartDate, TitleText } from "./style";

const AssignmentList = ({ listTitle, list, maxRows, height, width, subjectName }) => {
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
              <DueDate>
                D-{element.due}
              </DueDate>
              <Right>
                <Dates>
                  <StartDate>
                    {element.startDate}                  
                  </StartDate>
                  <EndDate>
                    {element.endDate}
                  </EndDate>
                </Dates>
              </Right>
            </ListRow>
          )
        })}
      </ListBox>
    </ListWrap>
  )
}

export default AssignmentList;