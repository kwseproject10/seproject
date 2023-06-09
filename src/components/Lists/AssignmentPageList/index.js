import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { SetInDetailPostState } from "../../../Atom";
import DropDown from "../../DropDown";
import { toStringFormat } from './../../../utils/date';
import { DDay, DropDownWrap, DueDate, HeaderDDay, HeaderDueDate, HeaderPostDate, HeaderPostName, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListWrap, ListWrapAlign, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PostDate, PostName, RightButton, SearchBar, SearchBarWrap, SearchIcon, SearchIconWrap, SearchInput } from "./style";

const RenderList = ({ list, linePerPage, setPostID }) => {
  const setInDetail = useSetRecoilState(SetInDetailPostState);
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
        >
          <PostName>{list[i].title}</PostName>
          <PostDate>{toStringFormat(list[i].startDate)}</PostDate>
          <DueDate>{toStringFormat(list[i].endDate)}</DueDate>
          <DDay>{list[i].due <= 0 ? "마감" : `D - ${list[i].due}`}</DDay>
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

const AssignmentPageList = ({ boardTitle, list, linePerPage, setInDetail, setPostID }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedList, setSelectedList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("제목");
  const [searchDropIsOpen, setSearchDropIsOpen] = useState(false);
  const searchTypeList = [
    "제목",
    "작성일"
  ]
  //page control
  let page = 1;
  if (searchedList !== undefined) page = parseInt(searchedList.length / 10) + 1;
  let pageButtons = [];
  let start = selectedPage - ((selectedPage-1) % 10)
  let end = start + 10
  if(page >= start && page < end)end = page + 1;
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
          <ListTitle>{boardTitle}</ListTitle>
          <ListHeader>
            <HeaderPostName>제목</HeaderPostName>
            <HeaderPostDate>작성일</HeaderPostDate>
            <HeaderDueDate>마감일</HeaderDueDate>
            <HeaderDDay>D-Day</HeaderDDay>
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
            onKeyPress={(e)=>{
              if(e.key === 'Enter'){
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

export default AssignmentPageList;