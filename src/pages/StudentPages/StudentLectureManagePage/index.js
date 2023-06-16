import DropDown from "@components/DropDown";
import Modal from "@components/Modal";
import Syllabus from "@components/Modal/ModalContents/Syllabus";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LecturesState, userIDState } from "../../../Atom";
import { AddButton, Body, ButtonWrap, DeleteButton, DropDownWrap, LectureCredit, LectureID, LectureMajor, LectureManagePageWrap, LectureNumOfTime, LectureProfessor, LectureSearchBar, LectureSearchBarWrap, LectureTimePlace, LectureTitle, LectureType, ListBody, ListHeader, ListRow, ListTitle, ListWrap, MyLectureList, MyLectureListWrap, SearchIcon, SearchIconWrap, SearchInput, SyllabusOpen, SyllabusOpenWrap, WholeLectureList, WholeLectureListWrap } from "./style";

const RenderList = React.memo(({ lectures, button, rowPerPage, setSyllabusModalOpen, onButtonClick, setSyllabusID }) => {
  let Rows = [];
  const userID = useRecoilValue(userIDState);
  const setLectures = useSetRecoilState(LecturesState);

  const addLecture = async (lectureID, lectureName) => {
    let result = window.confirm(`${lectureID}: ${lectureName} 강의 수강을 신청하시겠습니까?`);
    if (result) {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/enrolllecture?userID=${userID}&lectureID=${lectureID}`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        console.log("enroll load fail");
        window.alert(`수강 신청 오류가 발생하였습니다.`);
        return
      }
      const reRoute = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/lectures?userID=${userID}`;
      const reRes = await axios.get(
        reRoute
      );
      if (reRes.data.result === "false") {
        console.log("lectures reLoading fail");
        window.alert(`강의 로딩 오류가 발생하였습니다.`);
        return
      }
      setLectures(reRes.data);
      window.alert(`${lectureName} 강의 수강이 신청되었습니다.`);
    } else {
      return;
    }
  }

  //delete notice API
  const deleteLecture = async (lectureID, lectureName) => {
    let result = window.confirm(`${lectureID}: ${lectureName} 강의를 삭제하시겠습니까?
    * 삭제시 출석, 성적 등 수강 관련 정보는 복구할 수 없습니다.`);
    if (result) {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/deletelecture?userID=${userID}&lectureID=${lectureID}`;
      const res = await axios.delete(
        route
      );
      if (res.data.result === "false") {
        console.log("delete fail");
        window.alert(`수강 삭제 오류가 발생하였습니다.`);
        return
      }
      const reRoute = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/lectures?userID=${userID}`;
      const reRes = await axios.get(
        reRoute
      );
      if (reRes.data.result === "false") {
        console.log("lectures reLoading fail");
        window.alert(`강의 로딩 오류가 발생하였습니다.`);
        return
      }
      setLectures(reRes.data);
      window.alert(`${lectureName} 강의가 수강목록에서 삭제되었습니다.`);
    } else {
      return;
    }
  }

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
            onClick={() => { setSyllabusModalOpen(true); setSyllabusID(lecture.ID); }}
          >
            <SyllabusOpen />
          </SyllabusOpenWrap>
          <ButtonWrap
            onClick={() => { onButtonClick(lecture.ID, lecture.name) }}
          >
            {button === "Add" ?
              <AddButton
                onClick={() => {
                  addLecture(lecture.ID, lecture.name);
                }}
              />
              :
              <DeleteButton
                onClick={() => {
                  deleteLecture(lecture.ID, lecture.name);
                }}
              />
            }
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
  const [syllabusID, setSyllabusID] = useState("");
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
  }, [wholeLectures])

  useEffect(() => {
    const fetchLectureAll = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/loadlectureall`;
      const res = await axios.get(
        route
      );
      if (res.data.result === "false") {
        return
      }
      setWholeLectures(res.data);
    }

    fetchLectureAll();
  }, [])

  const onAddButtonClick = useCallback((lectureID, lectureName) => {
  }, []);

  const onDeleteButtonClick = useCallback((lectureID, lectureName) => {
  }, []);

  useEffect(initSearchedLectures, [wholeLectures, initSearchedLectures])

  //searchBar control
  const onClickSearch = useCallback(() => {
    if (searchText === "") {
      initSearchedLectures();
      setSearchType("강의명");
      return;
    }
    setSearchedLectures(wholeLectures.filter(
      (e) => {
        switch (searchType) {
          case ("강의명"):
            return e.name !== null && e.name.indexOf(searchText) !== -1;
          case ("학정번호"):
            return e.ID !== null && e.ID.indexOf(searchText) !== -1;
          case ("개설학과"):
            return e.major !== null && e.major.indexOf(searchText) !== -1;
          case ("학점"):
            return e.credit !== null && e.credit === parseInt(searchText);
          case ("시수"):
            return e.numOfTime !== null && e.numOfTime === parseInt(searchText);
          case ("분류"):
            return e.type !== null && e.type.indexOf(searchText) !== -1;
          case ("교수"):
            return e.professor !== null && e.professor.indexOf(searchText) !== -1;
          case ("강의시간"):
            return e.time !== null && e.time.indexOf(searchText) !== -1;
          default:
            return true;
        }
      }
    ))
    setSearchText("");
  }, [initSearchedLectures, searchText, searchType, wholeLectures])

  const handleSearchText = useCallback(((e) => {
    setSearchText(e);
  }), [])

  return (
    <LectureManagePageWrap>
      <Modal
        modalOpen={syllabusModalOpen}
        setModalOpen={setSyllabusModalOpen}
        innerContents={<Syllabus
          syllabusID={syllabusID}
          setModalOpen={setSyllabusModalOpen}
        />}
        width={"62.5rem"}
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
              setSyllabusID={setSyllabusID}
            />
          </MyLectureList>
        </MyLectureListWrap>
        <WholeLectureListWrap>
          <ListTitle>전체 강의 목록</ListTitle>
          <WholeLectureList>
            {wholeLectures === [] ?
              ""
              :
              <RenderList
                lectures={searchedLectures}
                button={"Add"}
                setSyllabusModalOpen={setSyllabusModalOpen}
                onButtonClick={onAddButtonClick}
                setSyllabusID={setSyllabusID}
              />
            }

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
                onChange={(e) => {
                  handleSearchText(e.target.value);
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
        </WholeLectureListWrap>
      </Body>
    </LectureManagePageWrap>
  )
}

export default StudentLectureManagePage;