import { useEffect, useState } from "react";
import { Center, Left, LeftButton, ListBody, ListHeader, ListRow, ListWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, Right, RightButton } from "./style";

const BoardPageList = ({ list, linePerPage }) => {
  const [ selectedPage, setSelectedPage ] = useState(1);
  const [ selectedList, setSelectedList ] = useState([]);
  let page = 1;
  if(list !== undefined) page = parseInt(list.length / linePerPage) + 1;
  let pageButtons = [];
  for(let i = 0; i < page; i++){
    pageButtons.push(
      <PageButton
        onClick={()=>{
          setSelectedPage(i + 1);
          console.log(selectedPage);
        }}
        index={i + 1}
        selectedPage={selectedPage}
      >
        {i + 1}
      </PageButton>
    );
  }

  const sliceList = () => {
    setSelectedList(list.slice((selectedPage - 1) * linePerPage, (selectedPage - 1) * linePerPage + linePerPage))
    console.log(selectedList);
  };

  useEffect(sliceList, [ selectedPage, setSelectedList, list, linePerPage ]);

  return (
    <>
      <ListWrap>
        <ListHeader>
          <Left>
            제목
          </Left>
          <Center>
            조회수
          </Center>
          <Right>
            작성일
          </Right>
        </ListHeader>
        <ListBody>
          {selectedList.map((element, index)=>{
            return(
              <ListRow>
                <Left>

                </Left>
                <Center>

                </Center>
                <Right>

                </Right>
              </ListRow>
            )
          })}
        </ListBody>
      </ListWrap>
      <PageSelectorWrap>
        <PageSelector>
          <PageButtonWrap>
            <PageButton>
              <LeftButton
                onClick={()=>{
                  if(selectedPage > 1) setSelectedPage(prev => prev - 1);
                  console.log(selectedPage);
                }}
              />
            </PageButton>
            {pageButtons.map((e)=>{return e;})}
            <PageButton>
              <RightButton
                onClick={()=>{
                  if(selectedPage < page) setSelectedPage(prev => prev + 1);
                  console.log(selectedPage);
                }}
              />
            </PageButton>
          </PageButtonWrap>
        </PageSelector>
      </PageSelectorWrap>
    </>
  );
}

export default BoardPageList;