import { useEffect, useState } from "react";
import DropDown from './../../../../components/DropDown/index';
import { AssignmentButton, AssignmentButtonWrap, Count, Dday, DeleteButton, DeleteButtonWrap, DropDownWrap, DueDate, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostTitle, RightButton, SearchIcon, SearchIconWrap, SearchInput, ViewButton, ViewButtonWrap } from "./style";

const FacultyAssignmentManagePage = ({ lectureName }) => {
  const [assignments, setAssignments] = useState([]);

  //API call
  const loadAssignments = () => {
    setAssignments([
      {
        ID: "0",
        title: "1차 프로젝트",
        subject: "소프트웨어공학",
        date: "2022.04.05(월) 12:00:00",
        duedate: "2023.04.21(금) 23:59:59",
        dday: 0,
        submitCount: 28,
        whole: 31,
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "0",
        title: "2차 프로젝트",
        subject: "소프트웨어공학",
        date: "2022.04.19(월) 12:00:00",
        duedate: "2023.05.12(금) 23:59:59",
        dday: 0,
        submitCount: 30,
        whole: 31,
        poster: "이기훈",
        hit: 10
      },
      {
        ID: "0",
        title: "3차 프로젝트",
        subject: "소프트웨어공학",
        date: "2022.05.10(월) 12:00:00",
        duedate: "2023.06.16(금) 23:59:59",
        dday: 1,
        submitCount: 8,
        whole: 31,
        poster: "이기훈",
        hit: 10
      },
    ])
  }


  const initSearchedLectures = () => {
    setSearchedList(assignments);
  }

  useEffect(loadAssignments, []);
  useEffect(initSearchedLectures, [assignments]);

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
    setSearchedList(assignments.filter(
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
        <ListTitleRow>
          <ListTitle>강의 과제 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>새 글 쓰기</PostButton>
          </PostButtonWrap>
        </ListTitleRow>
        <ListHeader>
          <PostTitle>제목</PostTitle>
          <PostDate>작성일자</PostDate>
          <DueDate>마감일시</DueDate>
          <Dday>D-day</Dday>
          <Count>제출현황</Count>
          <PostButtons>
            <ViewButtonWrap>조회</ViewButtonWrap>
            <AssignmentButtonWrap>수집</AssignmentButtonWrap>
            <ModifyButtonWrap>수정</ModifyButtonWrap>
            <DeleteButtonWrap>삭제</DeleteButtonWrap>
          </PostButtons>
        </ListHeader>
        <ListBody>
          {
            selectedList.map((assignment, assignmentIndex) => {
              return (
                <ListRow>
                  <PostTitle>{assignment.title}</PostTitle>
                  <PostDate>{assignment.date}</PostDate>
                  <DueDate>{assignment.duedate}</DueDate>
                  <Dday dday={assignment.dday}>{assignment.dday === 0 ? "마감" : `D - ${assignment.dday}`}</Dday>
                  <Count>{assignment.submitCount} / {assignment.whole}</Count>
                  <PostButtons>
                    <ViewButtonWrap>
                      <ViewButton />
                    </ViewButtonWrap>
                    <AssignmentButtonWrap>
                      <AssignmentButton />
                    </AssignmentButtonWrap>
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

export default FacultyAssignmentManagePage;