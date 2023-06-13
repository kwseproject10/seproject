import DropDown from "@components/DropDown";
import Modal from "@components/Modal";
import Syllabus from "@components/Modal/ModalContents/Syllabus";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { LecturesState } from "../../../Atom";
import { AddButton, Body, ButtonWrap, DeleteButton, DropDownWrap, LectureCredit, LectureID, LectureMajor, LectureManagePageWrap, LectureNumOfTime, LectureProfessor, LectureSearchBar, LectureSearchBarWrap, LectureTimePlace, LectureTitle, LectureType, ListBody, ListHeader, ListRow, ListTitle, ListWrap, MyLectureList, MyLectureListWrap, SearchIcon, SearchIconWrap, SearchInput, SyllabusOpen, SyllabusOpenWrap, WholeLectureList, WholeLectureListWrap } from "./style";

const RenderList = React.memo(({ lectures, button, rowPerPage, setSyllabusModalOpen, onButtonClick }) => {
  console.log("ReRender")
  let Rows = [];
  for (let i = 0; i < lectures.length; i++) {
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
})

const StudentLectureManagePage = () => {
  const myLectures = useRecoilValue(LecturesState);
  const [wholeLectures, setWholeLectures] = useState([]);
  const [searchedLectures, setSearchedLectures] = useState([]);
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

  const initSearchedLectures = useCallback(() => {
    setSearchedLectures(wholeLectures);
  },[wholeLectures])

  useEffect(() => {
    const fetchLectureAll = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/loadlectureall`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("profile load error");
        return
      }
      setWholeLectures(res.data);
    }

    fetchLectureAll();
  }, [])

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

  useEffect(initSearchedLectures, [ wholeLectures, initSearchedLectures ])

  //searchBar control
  const onClickSearch = useCallback(() => {
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
  }, [initSearchedLectures, searchText, searchType, wholeLectures])

  const handleSearchText = useCallback(((e) => {
    setSearchText(e);
  }),[])
  
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
              lectures={searchedLectures}
              button={"Add"}
              setSyllabusModalOpen={setSyllabusModalOpen}
              onButtonClick={onAddButtonClick}
            />
          </WholeLectureList>
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
                  handleSearchText(e.target.value);
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
        </WholeLectureListWrap>
      </Body>
    </LectureManagePageWrap>
  )
}

export default StudentLectureManagePage;