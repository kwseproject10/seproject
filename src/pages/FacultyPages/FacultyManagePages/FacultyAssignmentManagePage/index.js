import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FacultyLectureSelectedState, SelectedPostIDState } from "../../../../Atom";
import { toStringFormat } from "../../../../utils/date";
import DropDown from './../../../../components/DropDown/index';
import AssignmentPost from "./AssignmentPost";
import AssignmentPostDetail from "./AssignmentPostDetail";
import AssignmentPostUpdate from './AssignmentPostUpdate/index';
import AssignmentSubmitted from "./AssignmentSubmitted";
import { AssignmentButton, AssignmentButtonWrap, Dday, DeleteButton, DeleteButtonWrap, DropDownWrap, DueDate, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostTitle, RightButton, SearchIcon, SearchIconWrap, SearchInput, ViewButton, ViewButtonWrap } from "./style";

const FacultyAssignmentManagePage = ({ lectureName }) => {
  const [assignments, setAssignments] = useState([]);
  const selectedLecture = useRecoilValue(FacultyLectureSelectedState);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedPostID, setSelectedPostID] = useRecoilState(SelectedPostIDState);

  useEffect(() => {
    const fetchNotice = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignment?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setAssignments(res.data);
    }
    fetchNotice();
  }, [selectedLecture, pageIndex])


  const initSearchedLectures = () => {
    setSearchedList(assignments);
  }

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

  //delete notice API
  const deleteSubmit = (key) => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/deleteassignment?assignmentID=${key}`;
      const res = await axios.delete(
        route
      );
      if (res.data.result === "false") {
        console.log("delete fail");
        return
      }
      console.log(res.data);
    }
    const fetchArchive = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/assignment?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setAssignments(res.data);
    }

    fetch().then(fetchArchive);
  }

  return (
    <PageWrap>
      {pageIndex === 4 ?
        <AssignmentSubmitted
          selectedPostID={selectedPostID}
          setPageIndex={setPageIndex}
        />
        :
        (pageIndex === 3 ?
          <AssignmentPostUpdate
            selectedPostID={selectedPostID}
            setPageIndex={setPageIndex}
          />
          :
          (pageIndex === 2 ?
            <AssignmentPostDetail
              selectedPostID={selectedPostID}
              setPageIndex={setPageIndex}
            />
            :
            (pageIndex === 1 ?
              <AssignmentPost
                setPageIndex={setPageIndex}
                setSelectedPostID={setSelectedPostID}
              />
              :
              <ListWrap>
                <ListTitleRow>
                  <ListTitle>강의 과제 관리</ListTitle>
                  <PostButtonWrap>
                    <PostButton
                      onClick={() => {
                        setPageIndex(1);
                      }}
                    >
                      새 글 쓰기</PostButton>
                  </PostButtonWrap>
                </ListTitleRow>
                <ListHeader>
                  <PostTitle>제목</PostTitle>
                  <PostDate>시작일시</PostDate>
                  <DueDate>마감일시</DueDate>
                  <Dday>D-day</Dday>
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
                          <PostDate>{toStringFormat(assignment.startDate)}</PostDate>
                          <DueDate>{toStringFormat(assignment.endDate)}</DueDate>
                          <Dday dday={assignment.due}>{assignment.due <= 0 ? "마감" : `D - ${assignment.due}`}</Dday>
                          <PostButtons>
                            <ViewButtonWrap>
                              <ViewButton
                                onClick={() => {
                                  setSelectedPostID(assignment.key);
                                  setPageIndex(2);
                                }}
                              />
                            </ViewButtonWrap>
                            <AssignmentButtonWrap>
                              <AssignmentButton
                                onClick={() => {
                                  setSelectedPostID(assignment.key);
                                  setPageIndex(4);
                                }}
                              />
                            </AssignmentButtonWrap>
                            <ModifyButtonWrap>
                              <ModifyButton
                                onClick={() => {
                                  setSelectedPostID(assignment.key);
                                  setPageIndex(3);
                                }}
                              />
                            </ModifyButtonWrap>
                            <DeleteButtonWrap>
                              <DeleteButton
                                onClick={() => {
                                  let result = window.confirm(`공지사항을 삭제하시겠습니까?`);
                                  if (result) {
                                    deleteSubmit(assignment.key);
                                    window.alert(`공지사항이 삭제되었습니다.`);
                                  } else {
                                    return;
                                  }
                                }}
                              />
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
            )
          )
        )
      }
    </PageWrap>
  )
}

export default FacultyAssignmentManagePage;