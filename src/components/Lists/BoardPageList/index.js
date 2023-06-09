import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { SelectedPostIDState, SetInDetailPostState } from "../../../Atom";
import DropDown from "../../DropDown";
import { toStringFormat } from './../../../utils/date';
import { DropDownWrap, HeaderPostDate, HeaderPostHit, HeaderPostName, HeaderPoster, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListWrap, ListWrapAlign, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PostDate, PostHit, PostName, Poster, RightButton, SearchBar, SearchBarWrap, SearchIcon, SearchIconWrap, SearchInput } from "./style";

const RenderList = ({ list, linePerPage }) => {
  const setInDetail = useSetRecoilState(SetInDetailPostState);
  const setPostID = useSetRecoilState(SelectedPostIDState);
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
            setPostID(list[i].key);
            setInDetail(true);
          }}
          isLast={i === linePerPage}
        >
          <PostName>{list[i].title}</PostName>
          <Poster>{list[i].poster}</Poster>
          <PostDate>{toStringFormat(list[i].date)}</PostDate>
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

const BoardPageList = ({ boardTitle, list, linePerPage }) => {
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
  //page control
  let page = 1;
  if (searchedList !== undefined) page = parseInt(searchedList.length / 10) + 1;
  let pageButtons = [];
  let start = selectedPage - ((selectedPage - 1) % 10)
  let end = start + 10
  if (page >= start && page < end) end = page + 1;
  for (let i = start; i < end; i++) {
    pageButtons.push(
      <PageButton
        onClick={() => {
          setSelectedPage(i);
        }}
        index={i}
        selectedPage={selectedPage}
      >
        {i}
      </PageButton>
    )
  }

  const sliceList = () => {
    setSelectedList([]);
    let temp = searchedList.slice((selectedPage - 1) * linePerPage, (selectedPage - 1) * linePerPage + linePerPage)
    setSelectedList(temp);
  };
  const initSearchedList = () => {
    setSearchedList(list);
  }

  useEffect(sliceList, [selectedPage, setSelectedList, searchedList, linePerPage]);
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
          <ListTitle>{boardTitle}</ListTitle>
          <ListHeader>
            <HeaderPostName>제목</HeaderPostName>
            <HeaderPoster>작성자</HeaderPoster>
            <HeaderPostDate>작성일</HeaderPostDate>
            <HeaderPostHit>조회수</HeaderPostHit>
          </ListHeader>
          <RenderList
            list={selectedList}
            linePerPage={linePerPage}
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onClickSearch();
              }
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