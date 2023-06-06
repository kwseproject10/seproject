import { Dates, Left, ListBox, ListRow, ListTitle, ListWrap, NoticeSubject, NoticeTitle, Right, TitlePlusButton, TitleText } from "./style";
import { TbPlus } from "react-icons/tb";

const ArchiveList = ({ listTitle, list, maxRows, height, width, subjectName, onClickPlusButton }) => {
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          {listTitle}
        </TitleText>
        <TitlePlusButton
          onClick={onClickPlusButton}
        >
          <TbPlus/>
        </TitlePlusButton>
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

export default ArchiveList;