import { ListBox, ListTitle, ListWrap, TitleText } from "./style";

const Lists = ({ listTitle, listRows, Lefts, Centers, Rights, width, height, rowHeight, maxRow, contentRatio }) => {
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

export default Lists;