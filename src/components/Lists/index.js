import { ListBox, ListTitle, ListWrap, TitleText } from "./style";

const LectureList = ({ listTitle, listRows, width, height, maxRow }) => {
  return(
    <ListWrap>
      <ListTitle>
        <TitleText>
          {listTitle}
        </TitleText>
      </ListTitle>
      <ListBox>
        {listRows.map((e)=>{return e;})}
      </ListBox>
    </ListWrap>
  )
}

export default LectureList;