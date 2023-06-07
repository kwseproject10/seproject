import { useEffect, useState } from "react";
import { HeaderPostDate, HeaderPostHit, HeaderPostName, HeaderPoster, LeftButton, ListBody, ListHeader, ListRow, ListWrap, ListWrapAlign, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PostDate, PostHit, PostName, Poster, RightButton } from "./style";

const RenderList = ({ list, linePerPage }) => {
  let Rows = [];
  for(let i = 0; i < linePerPage; i++){
    if(list===undefined || list[i]===undefined){
      Rows.push(
        <ListRow linePerPage={linePerPage} hidden={true}/>
      )
    }else{
      Rows.push(
        <ListRow linePerPage={linePerPage} hidden={false}>
          <PostName>{list[i].title}</PostName>
          <Poster>{list[i].poster}</Poster>
          <PostDate>{list[i].date}</PostDate>
          <PostHit>{list[i].hit}</PostHit>
        </ListRow>
      )
    }
  }
  return(
    <ListBody>
      {Rows.map((e)=>{return e;})}
    </ListBody>
  )
}

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
    setSelectedList(list.slice((selectedPage - 1) * linePerPage, (selectedPage - 1) * linePerPage + linePerPage));
  };

  useEffect(sliceList, [ selectedPage, setSelectedList, list, linePerPage ]);

  return (
    <>
      <ListWrap>
        <ListWrapAlign>
          <ListHeader>
            <HeaderPostName>제목</HeaderPostName>
            <HeaderPoster>작성자</HeaderPoster>
            <HeaderPostDate>작성일</HeaderPostDate>
            <HeaderPostHit>조회수</HeaderPostHit>
          </ListHeader>
          <RenderList list={selectedList} linePerPage={linePerPage} />
        </ListWrapAlign>
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