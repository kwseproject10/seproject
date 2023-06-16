import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FacultyLectureSelectedState } from './../../../../Atom';
import DropDown from './../../../../components/DropDown/index';
import { toStringFormat } from './../../../../utils/date';
import Post from "./Post";
import PostDetail from "./PostDetail";
import PostUpdate from "./PostUpdate";
import { DeleteButton, DeleteButtonWrap, DropDownWrap, LectureSearchBar, LectureSearchBarWrap, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostHit, PostTitle, RightButton, SearchIcon, SearchIconWrap, SearchInput, ViewButton, ViewButtonWrap } from "./style";

const FacultyNoticeManagePage = ({ lectureName }) => {
  const [notices, setNotices] = useState([]);
  const selectedLecture = useRecoilValue(FacultyLectureSelectedState);
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedPostID, setSelectedPostID] = useState("");

  useEffect(() => {
    const fetchNotice = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/notice?lectureID=${selectedLecture}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("notice load fail");
        return
      }
      console.log(res.data);
      setNotices(res.data);
    }
    fetchNotice();
  }, [selectedLecture])

  const initSearchedLectures = () => {
    setSearchedList(notices);
  }
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
    setSearchedList(notices.filter(
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
  const deleteSubmit = () => {

  }

  return (
    <PageWrap>
      {pageIndex === 3 ?
        <PostUpdate
          selectedPostID={selectedPostID}
          setPageIndex={setPageIndex}
        />
        :
        (pageIndex === 2 ?
          <PostDetail
            selectedPostID={selectedPostID}
            setPageIndex={setPageIndex}
          />
          :
          (pageIndex === 1 ?
            <Post
              setPageIndex={setPageIndex}
              setSelectedPostID={setSelectedPostID}
            />
            :
            <ListWrap>
              <ListTitleRow>
                <ListTitle>강의 공지사항 관리</ListTitle>
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
                        <PostDate>{toStringFormat(notice.date)}</PostDate>
                        <PostHit>{notice.hit}</PostHit>
                        <PostButtons>
                          <ViewButtonWrap>
                            <ViewButton
                              onClick={() => {
                                setSelectedPostID(notice.key);
                                setPageIndex(2);
                              }}
                            />
                          </ViewButtonWrap>
                          <ModifyButtonWrap>
                            <ModifyButton
                              onClick={() => {
                                setSelectedPostID(notice.key);
                                setPageIndex(3);
                              }}
                            />
                          </ModifyButtonWrap>
                          <DeleteButtonWrap>
                            <DeleteButton
                              onClick={() => {
                                let result = window.confirm(`공지사항을 삭제하시겠습니까?`);
                                if(result){
                                  deleteSubmit(notice.key);
                                  window.alert(`공지사항이 삭제되었습니다.`);
                                }else{
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
          ))
      }

    </PageWrap>
  )
}

export default FacultyNoticeManagePage;