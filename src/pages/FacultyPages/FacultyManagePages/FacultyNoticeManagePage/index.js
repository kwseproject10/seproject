import { useEffect, useState } from "react";
import DropDown from './../../../../components/DropDown/index';
import { DeleteButton, DeleteButtonWrap, DropDownWrap, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostHit, PostTitle, RightButton, SearchIcon, SearchIconWrap, SearchInput, ViewButton, ViewButtonWrap } from "./style";

const FacultyNoticeManagePage = ({ lectureName }) => {
  const [notices, setNotices] = useState([]);

  //API call
  const loadNotices = () => {
    setNotices([
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
      },
      {
        ID: "2",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "김태석",
        hit: 10
      },
      {
        ID: "3",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이성원",
        hit: 10
      },
      {
        ID: "4",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "박철수",
        hit: 10
      },
      {
        ID: "5",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "6",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "7",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "8",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "9",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "10",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "11",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "12",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "13",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "16",
        title: "2차 프로젝트 점수 공지",
        subject: "소프트웨어공학",
        date: "2023.05.28(일)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "17",
        title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
        subject: "임베디드시스템S/W설계",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "18",
        title: "Assignment for INCOMPLETE PREREQUISITE",
        subject: "신호및시스템",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "19",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "14",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "15",
        title: "중간고사 시험범위",
        subject: "소프트웨어공학",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "20",
        title: "금일 수업 휴강 공지",
        subject: "머신러닝",
        date: "2022.01.01(월)",
        poster: "이기훈",
        hit: 10
      }
    ])
  }


  const initSearchedLectures = () => {
    setSearchedList(notices);
  }

  useEffect(loadNotices, []);
  useEffect(initSearchedLectures, [notices]);

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
    setSearchedList(notices.filter(
      (e) => {
      switch (searchType){
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
          <ListTitleRow>
            <ListTitle>강의 공지사항 관리</ListTitle>
            <PostButtonWrap>
              <PostButton>새 글 쓰기</PostButton>
            </PostButtonWrap>
          </ListTitleRow>
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
              selectedList.map((notice, noticeIndex) => {
                return (
                  <ListRow>
                    <PostTitle>{notice.title}</PostTitle>
                    <PostDate>{notice.date}</PostDate>
                    <PostHit>{notice.hit}</PostHit>
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
            </LectureSearchBar>
          </LectureSearchBarWrap>
        </ListWrap>
      </PageWrap>
    )
  }

  export default FacultyNoticeManagePage;