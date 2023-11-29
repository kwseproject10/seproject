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
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/loadlectureall`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
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
    ]
      }
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