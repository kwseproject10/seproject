import { useEffect, useState } from "react";
import DropDown from '../../../../components/DropDown/index';
import { DeleteButton, DeleteButtonWrap, DropDownWrap, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostTitle, RightButton, Scoring, SearchIcon, SearchIconWrap, SearchInput, SubmitCount, ViewButton, ViewButtonWrap } from "./style";

const FacultyExamManagePage = ({ lectureName }) => {
  const [exams, setExams] = useState([]);

  //API call
  const loadExams = () => {
    setExams([
      {
        ID: "0",
        title: "중간고사",
        date: "2022.04.26(월)",
        poster: "이기훈",
        submitCount: 30,
        whole: 31,
        scoring: true,  //성적입력 완료여부
      },
      {
        ID: "1",
        title: "중간고사 보강시험",
        date: "2022.05.08(월)",
        poster: "이기훈",
        submitCount: 30,
        whole: 31,
        scoring: true,  //성적입력 완료여부
      },
      {
        ID: "2",
        title: "기말고사",
        date: "2022.06.14(수)",
        poster: "이기훈",
        submitCount: 28,
        whole: 31,
        scoring: false,  //성적입력 완료여부
      }
    ])
  }


  const initSearchedLectures = () => {
    setSearchedList(exams);
  }

  useEffect(loadExams, []);
  useEffect(initSearchedLectures, [exams]);

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
  let start = selectedPage - ((selectedPage - 1) % 10)
  let end = start + 10
  if (pages >= start && pages < end) end = pages + 1;
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
    setSearchedList(exams.filter(
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
          <ListTitle>강의 시험 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>새 글 쓰기</PostButton>
          </PostButtonWrap>
        </ListTitleRow>
        <ListHeader>
          <PostTitle>제목</PostTitle>
          <PostDate>작성일자</PostDate>
          <SubmitCount>응시인원</SubmitCount>
          <Scoring>성적입력</Scoring>
          <PostButtons>
            <ViewButtonWrap>조회</ViewButtonWrap>
            <ModifyButtonWrap>수정</ModifyButtonWrap>
            <DeleteButtonWrap>삭제</DeleteButtonWrap>
          </PostButtons>
        </ListHeader>
        <ListBody>
          {
            selectedList.map((exam, examIndex) => {
              return (
                <ListRow>
                  <PostTitle>{exam.title}</PostTitle>
                  <PostDate>{exam.date}</PostDate>
                  <SubmitCount>{exam.submitCount} / {exam.whole}</SubmitCount>
                  <Scoring scoring={exam.scoring}>{exam.scoring ? "완료" : "진행 중"}</Scoring>
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
          </LectureSearchBar>
        </LectureSearchBarWrap>
      </ListWrap>
    </PageWrap>
  )
}

export default FacultyExamManagePage;