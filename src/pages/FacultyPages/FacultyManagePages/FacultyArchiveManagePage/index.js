import { useEffect, useState } from "react";
import DropDown from './../../../../components/DropDown/index';
import { DeleteButton, DeleteButtonWrap, DropDownWrap, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostHit, PostTitle, RightButton, SearchIcon, SearchIconWrap, SearchInput, ViewButton, ViewButtonWrap } from "./style";

const FacultyArchiveManagePage = ({ lectureName }) => {
  const [archives, setArchives] = useState([]);

  //API call
  const loadArchives = () => {
    setArchives([
      {
        ID: "0",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "1",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      }
    ])
  }


  const initSearchedLectures = () => {
    setSearchedList(archives);
  }

  useEffect(loadArchives, []);
  useEffect(initSearchedLectures, [archives]);

  const [searchedList, setSearchedList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedList, setSelectedList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("제목");
  const [searchDropIsOpen, setSearchDropIsOpen] = useState(false);
  const searchTypeList = [
    "제목",
    "작성일자"
  ]
  //page control
  let pages = 1;
  if (searchedList !== undefined) pages = parseInt(searchedList.length / 10) + 1;
  let pageButtons = [];
  let start = selectedPage - ((selectedPage-1) % 10)
  let end = start + 10
  if(pages >= start && pages < end)end = pages + 1;
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
    setSelectedList(searchedList.slice((selectedPage - 1) * 10, (selectedPage - 1) * 10 + 10));
  };

  useEffect(sliceList, [selectedPage, setSelectedList, searchedList]);

  //searchBar control
  const onClickSearch = () => {
    setSelectedPage(1);
    if (searchText === "") {
      initSearchedLectures();
      setSearchType("제목");
      return;
    }
    setSearchedList(archives.filter(
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
    <PageWrap>
      <ListWrap>
        <ListHeader>
          <ListTitle>강의 자료실 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>새 글 쓰기</PostButton>
          </PostButtonWrap>
        </ListHeader>
        <ListHeader>
          <PostTitle>제목</PostTitle>
          <PostDate>작성일자</PostDate>
          <PostHit>조회수</PostHit>
          <PostButtons>
            <ViewButtonWrap>조회</ViewButtonWrap>
            <ModifyButtonWrap>수정</ModifyButtonWrap>
            <DeleteButtonWrap>삭제</DeleteButtonWrap>
          </PostButtons>
        </ListHeader>
        <ListBody>
          {
            selectedList.map((archive, archiveIndex) => {
              return (
                <ListRow>
                  <PostTitle>{archive.title}</PostTitle>
                  <PostDate>{archive.date}</PostDate>
                  <PostHit>{archive.hit}</PostHit>
                  <PostButtons>
                    <ViewButtonWrap>
                      <ViewButton />
                    </ViewButtonWrap>
                    <ModifyButtonWrap>
                      <ModifyButton />
                    </ModifyButtonWrap>
                    <DeleteButtonWrap>
                      <DeleteButton />
                    </DeleteButtonWrap>
                  </PostButtons>
                </ListRow>
              )
            })
          }
        </ListBody>
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
                    if (selectedPage < pages) setSelectedPage(prev => prev + 1);
                  }}
                />
              </PageButton>
            </PageButtonWrap>
          </PageSelector>
        </PageSelectorWrap>
        <LectureSearchBarWrap>
          <LectureSearchBar>
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
          </LectureSearchBar>
        </LectureSearchBarWrap>
      </ListWrap>
    </PageWrap>
  )
}

export default FacultyArchiveManagePage;