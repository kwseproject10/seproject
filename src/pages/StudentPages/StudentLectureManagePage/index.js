import { useState } from "react";
import { AddButton, Body, ButtonWrap, DeleteButton, DropDownWrap, LectureCredit, LectureID, LectureMajor, LectureManagePageWrap, LectureNumOfTime, LectureProfessor, LectureSearchBar, LectureSearchBarWrap, LectureTimePlace, LectureTitle, LectureType, LeftButton, ListBody, ListHeader, ListRow, ListTitle, ListWrap, MyLectureList, MyLectureListWrap, PageButton, PageButtonWrap, PageSelector, PageSelectorWrap, RightButton, SearchIcon, SearchIconWrap, SearchInput, SyllabusOpen, SyllabusOpenWrap, WholeLectureList, WholeLectureListWrap } from "./style";
import { useEffect } from "react";
import DropDown from "@components/DropDown";
import Modal from "@components/Modal";
import Syllabus from "@components/Modal/ModalContents/Syllabus";
import { useCallback } from "react";

const RenderList = ({ lectures, button, rowPerPage, setSyllabusModalOpen, onButtonClick }) => {
  let Rows = [];
  for (let i = 0; i < rowPerPage; i++) {
    const lecture = lectures[i]
    if (lecture === undefined) {
      Rows.push(<ListRow key={i}></ListRow>)
    } else {
      Rows.push(
        <ListRow key={i}>
          <LectureID>{lecture.ID}</LectureID>
          <LectureTitle>{lecture.name}</LectureTitle>
          <LectureMajor>{lecture.major}</LectureMajor>
          <LectureType>{lecture.type}</LectureType>
          <LectureCredit>{lecture.credit}</LectureCredit>
          <LectureNumOfTime>{lecture.numOfTime}</LectureNumOfTime>
          <LectureProfessor>{lecture.professor}</LectureProfessor>
          <LectureTimePlace>{lecture.time}</LectureTimePlace>
          <SyllabusOpenWrap
            onClick={()=>{setSyllabusModalOpen(true)}}
          >
            <SyllabusOpen/>
          </SyllabusOpenWrap>
          <ButtonWrap
            onClick={()=>{onButtonClick(lecture.ID, lecture.name)}}
          >
            {button === "Add" ? <AddButton/> : <DeleteButton/>}
          </ButtonWrap>
        </ListRow>
      )
    }
  }
  return (
    <ListWrap>
      <ListHeader>
        <LectureID>학정번호</LectureID>
        <LectureTitle>강의명</LectureTitle>
        <LectureMajor>개설학과</LectureMajor>
        <LectureType>분류</LectureType>
        <LectureCredit>학점</LectureCredit>
        <LectureNumOfTime>시수</LectureNumOfTime>
        <LectureProfessor>교수</LectureProfessor>
        <LectureTimePlace>강의시간</LectureTimePlace>
        <SyllabusOpenWrap>강의계획서 조회</SyllabusOpenWrap>
        <ButtonWrap>
          {button === "Add" ? "수강신청" : "수강삭제"}
        </ButtonWrap>
      </ListHeader>
      <ListBody>
        {Rows.map((e) => { return e; })}
      </ListBody>
    </ListWrap>
  )
}

const StudentLectureManagePage = () => {
  const [myLectures, setMyLectures] = useState([]);
  const [wholeLectures, setWholeLectures] = useState([]);
  const [searchedLectures, setSearchedLectures] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedLectures, setSelectedLectures] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("강의명");
  const [searchDropIsOpen, setSearchDropIsOpen] = useState(false);
  const searchTypeList = [
    "학정번호",
    "강의명",
    "개설학과",
    "분류",
    "학점",
    "시수",
    "교수",
    "강의시간"
  ]
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);

  //API call
  const loadWholeLectures = () => {
    setWholeLectures([
      {
        key: "0",
        ID: "H020-3-3831-01",
        name: "컴퓨터구조실험",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "1",
        numOfTime: "2",
        professor: "이성원",
        time: "수7,8",
        place: ""
      },
      {
        key: "1",
        ID: "H020-3-3831-02",
        name: "컴퓨터구조실험",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "1",
        numOfTime: "2",
        professor: "이혁준",
        time: "금3,4",
        place: ""
      },
      {
        key: "2",
        ID: "H020-3-8993-01",
        name: "소프트웨어프로젝트1",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "4",
        professor: "이우신",
        time: "월1,7,8,수2",
        place: ""
      },
      {
        key: "3",
        ID: "H020-4-0846-01",
        name: "소프트웨어공학",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "이기훈",
        time: "월5,수6",
        place: ""
      },
      {
        key: "4",
        ID: "H020-4-3112-01",
        name: "무선이동네트워크및5G",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "이형근",
        time: "화5,목6",
        place: ""
      },
      {
        key: "5",
        ID: "H020-4-4136-01",
        name: "컴퓨터비젼",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "심동규",
        time: "월4,수3",
        place: ""
      },
      {
        key: "6",
        ID: "H020-4-5861-01",
        name: "임베디드시스템S/W설계",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "김태석",
        time: "월6,수5",
        place: ""
      },
      {
        key: "7",
        ID: "H020-4-8483-01",
        name: "머신러닝",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "박철수",
        time: "월3,수4",
        place: ""
      },
      {
        key: "8",
        ID: "H020-4-8995-01",
        name: "산학협력캡스톤설계1",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "이형근",
        time: "화6,목5",
        place: ""
      },
      {
        key: "9",
        ID: "F030-3-3873-01",
        name: "상표법",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "권지현",
        time: "금5,6",
        place: ""
      },
      {
        key: "10",
        ID: "F030-3-4221-01",
        name: "민사집행법",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "",
        time: "화2,목1",
        place: ""
      },
      {
        key: "0",
        ID: "F030-3-5564-01",
        name: "정보통신법개론",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "",
        time: "화4,목3",
        place: ""
      },
      {
        key: "0",
        ID: "F030-3-5694-01",
        name: "경력개발과취업전략",
        major: "법학부",
        type: "전선",
        credit: "2",
        numOfTime: "2",
        professor: "권지현",
        time: "목6,7",
        place: ""
      },
      {
        key: "0",
        ID: "F030-3-8544-01",
        name: "부동산공법",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "정영철",
        time: "월6,수5",
        place: ""
      },
      {
        key: "0",
        ID: "F030-3-8908-01",
        name: "사회보장법",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "이준희",
        time: "월5,수6",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-0121-01",
        name: "경제법",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "조현진",
        time: "수5",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-1898-01",
        name: "형사소송실무",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "이두희",
        time: "금1,2",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-3759-01",
        name: "디지털법률행위론",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "",
        time: "목8,9,10",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-5541-01",
        name: "형사법판례세미나",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "한재경",
        time: "월2,수1",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-5570-01",
        name: "특허심판과소송실무",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "오승준",
        time: "월1",
        place: ""
      },
      {
        key: "0",
        ID: "F030-4-9226-01",
        name: "행정법판례세미나",
        major: "법학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        professor: "정영철",
        time: "월5,수6",
        place: ""
      }
    ]);
  }

  const loadMyLectures = () => {
    setMyLectures([
      {
        key: "0",
        name: "소프트웨어공학",
        professor: "이기훈",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        time: ["월5", "수6"],
        place: ["새빛205", "새빛205"],
        ID: "H020-4-0846-01",
      },
      {
        key: "0",
        name: "디지털논리회로1",
        professor: "유지현",
        major: "컴퓨터정보공학부",
        type: "전필",
        credit: "3",
        numOfTime: "3",
        time: ["금5", "금6"],
        place: ["새빛203", "새빛203"],
        ID: "H020-2-0453-01",
      },
      {
        key: "0",
        name: "신호및시스템",
        professor: "이성원",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        time: ["월4", "수3"],
        place: ["새빛102", "새빛102"],
        ID: "H020-3-2004-01",
      },
      {
        key: "0",
        name: "임베디드시스템S/W설계",
        professor: "김태석",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        time: ["월6", "수5"],
        place: ["새빛205", "새빛205"],
        ID: "H020-4-5861-01",
      },
      {
        key: "0",
        name: "머신러닝",
        professor: "박철수",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        time: ["월3", "수4"],
        place: ["새빛203", "새빛203"],
        ID: "H020-4-8483-01",
      }
    ]);
  }

  const initSearchedLectures = () => {
    setSearchedLectures(wholeLectures);
  }

  useEffect(() => {
    loadWholeLectures();
    loadMyLectures();
  }, []);

  const onAddButtonClick = useCallback((lectureID, lectureName) => {
    let result = window.confirm(`${lectureID}: ${lectureName} 강의 수강을 신청하시겠습니까?`);
    if(result){
      window.alert(`${lectureName} 강의 수강이 신청되었습니다.`);
    }else{
      return;
    }
  }, []);

  const onDeleteButtonClick = useCallback((lectureID, lectureName) => {
    let result = window.confirm(`${lectureID}: ${lectureName} 강의를 삭제하시겠습니까?
    * 삭제시 출석, 성적 등 수강 관련 정보는 복구할 수 없습니다.`);
    if(result){
      window.alert(`${lectureName} 강의가 수강목록에서 삭제되었습니다.`);
    }else{
      return;
    }
  }, []);

  useEffect(initSearchedLectures, [ wholeLectures ])

  //page control
  let pages = 1;
  if (searchedLectures !== undefined) pages = parseInt(searchedLectures.length / 10) + 1;
  let pageButtons = [];
  for (let i = 0; i < pages; i++) {
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
    )
  }

  const sliceList = () => {
    setSelectedLectures([]);
    setSelectedLectures(searchedLectures.slice((selectedPage - 1) * 10, (selectedPage - 1) * 10 + 10));
  };

  useEffect(sliceList, [selectedPage, setSelectedLectures, searchedLectures]);

  //searchBar control
  const onClickSearch = () => {
    setSelectedPage(1);
    if(searchText === ""){
      initSearchedLectures();
      setSearchType("강의명");
      return;
    }
    setSearchedLectures(wholeLectures.filter(
      (e) => (
        searchType === "강의명" ?
            e.name.indexOf(searchText) !== -1
          :
            (
              searchType === "학정번호" ?
                e.ID.indexOf(searchText) !== -1
              :
                (
                  searchType === "개설학과" ?
                      e.major.indexOf(searchText) !== -1
                    :
                      (
                        searchType === "학점" ?
                            e.credit === parseInt(searchText)
                          :
                            (
                              searchType === "시수" ?
                                  e.numOfTime === parseInt(searchText)
                                :
                                  (
                                    searchType === "분류" ?
                                        e.type.indexOf(searchText) !== -1
                                      :
                                        (
                                          searchType === "교수" ?
                                              e.professor.indexOf(searchText) !== -1
                                            :
                                              (
                                                searchType === "강의시간" ?
                                                    e.time.indexOf(searchText) !== -1
                                                  :
                                                    true
                                                )
                                        )
                                  )
                            )
                      )
                )
            )
      )
    ))
    setSearchText("");
  }

  return (
    <LectureManagePageWrap>
      <Modal
        modalOpen={syllabusModalOpen}
        setModalOpen={setSyllabusModalOpen}
        innerContents={<Syllabus setModalOpen={setSyllabusModalOpen}/>}
      />
      <Body>
        <MyLectureListWrap>
          <ListTitle>수강 중인 강의</ListTitle>
          <MyLectureList>
            <RenderList
              lectures={myLectures}
              button={"Delete"}
              rowPerPage={10}
              setSyllabusModalOpen={setSyllabusModalOpen}
              onButtonClick={onDeleteButtonClick}
            />
          </MyLectureList>
        </MyLectureListWrap>
        <WholeLectureListWrap>
          <ListTitle>전체 강의 목록</ListTitle>
          <WholeLectureList>
            <RenderList
              lectures={selectedLectures}
              button={"Add"}
              rowPerPage={10}
              setSyllabusModalOpen={setSyllabusModalOpen}
              onButtonClick={onAddButtonClick}
            />
          </WholeLectureList>
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
                onChange={(e)=>{
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
        </WholeLectureListWrap>
      </Body>
    </LectureManagePageWrap>
  )
}

export default StudentLectureManagePage;