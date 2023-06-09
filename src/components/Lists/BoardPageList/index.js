import { useEffect, useState } from "react";
import DropDown from "../../DropDown";
import { DropDownWrap, HeaderPostDate, HeaderPostHit, HeaderPostName, HeaderPoster, LeftButton, ListBody, ListHeader, ListRow, ListWrap, ListWrapAlign, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PostDate, PostHit, PostName, Poster, RightButton, SearchBar, SearchBarWrap, SearchIcon, SearchIconWrap, SearchInput } from "./style";

const RenderList = ({ list, linePerPage, setInDetail, setPostID }) => {
  let Rows = [];
  for (let i = 0; i < linePerPage; i++) {
    if (list === undefined || list[i] === undefined) {
      Rows.push(
        <ListRow linePerPage={linePerPage} hidden={true} />
      )
    } else {
      Rows.push(
        <ListRow
          linePerPage={linePerPage}
          hidden={false}
          onClick={() => {
            setInDetail(true);
            setPostID(list[i].ID);
          }}
        >
          <PostName>{list[i].title}</PostName>
          <Poster>{list[i].poster}</Poster>
          <PostDate>{list[i].date}</PostDate>
          <PostHit>{list[i].hit}</PostHit>
        </ListRow>
      )
    }
  }
  return (
    <ListBody>
      {Rows.map((e) => { return e; })}
    </ListBody>
  )
}

const BoardPageList = ({ list, linePerPage, setInDetail, setPostID }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedList, setSelectedList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("제목");
  const [searchDropIsOpen, setSearchDropIsOpen] = useState(false);
  const searchTypeList = [
    "제목",
    "작성자",
    "작성일"
  ]
  let page = 1;
  if (searchedList !== undefined) page = parseInt(searchedList.length / linePerPage) + 1;
  let pageButtons = [];
  for (let i = 0; i < page; i++) {
    pageButtons.push(
      <PageButton
        onClick={() => {
          setSelectedPage(i + 1);
        }}
        index={i + 1}
        selectedPage={selectedPage}
      >
        {i + 1}
      </PageButton>
    );
  }

  const sliceList = () => {
    setSelectedList([]);
    setSelectedList(list.slice((selectedPage - 1) * linePerPage, (selectedPage - 1) * linePerPage + linePerPage));
  };
  const initSearchedList = () => {
    setSearchedList(list);
  }

  useEffect(sliceList, [selectedPage, setSelectedList, list, linePerPage]);
  useEffect(initSearchedList, [list]);

  //searchBar control
  const onClickSearch = () => {
    setSelectedPage(1);
    if (searchText === "") {
      initSearchedList();
      setSearchType("제목");
      return;
    }
    setSearchedList(list.filter(
      (e) => {
        switch (searchType) {
          case "제목":
            return e.title.indexOf(searchText) !== -1;
          case "작성일자":
            return e.date.indexOf(searchText) !== -1;
          default:
            return true;
        }
      }
    ))
    setSearchText("");
  }

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
          <RenderList
            list={searchedList}
            linePerPage={linePerPage}
            setInDetail={setInDetail}
            setPostID={setPostID}
          />
        </ListWrapAlign>
      </ListWrap>

      <PageSelectorWrap>
        <PageSelector>
          <PageButtonWrap>
            <PageButton>
              <LeftButton
                onClick={() => {
                  if (selectedPage > 1) setSelectedPage(prev => prev - 1);
                }}
              />
            </PageButton>
            {pageButtons.map((e) => { return e; })}
            <PageButton>
              <RightButton
                onClick={() => {
                  if (selectedPage < page) setSelectedPage(prev => prev + 1);
                }}
              />
            </PageButton>
          </PageButtonWrap>
        </PageSelector>
      </PageSelectorWrap>
      <SearchBarWrap>
        <SearchBar>
          <DropDownWrap>
            <DropDown
              state={searchType}
              setState={setSearchType}
              isOpen={searchDropIsOpen}
              setIsOpen={setSearchDropIsOpen}
              list={searchTypeList}
              fontSize={"var(--font-size-xs)"}
              width={"6rem"}
              listWidth={"3.5rem"}
              height={"1.875rem"}
            />
          </DropDownWrap>
          <SearchInput
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <SearchIconWrap>
            <SearchIcon
              onClick={onClickSearch}
            />
          </SearchIconWrap>
        </SearchBar>
      </SearchBarWrap>
    </>
  );
}

export default BoardPageList;