import DropDown from '@components/DropDown/';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { FacultyLectureSelectedState, FacultyLecturesState, FacultyNavigationAccordianActivedState } from "../../../Atom";
import FacultyArchiveManagePage from './FacultyArchiveManagePage';
import FacultyAssignmentManagePage from './FacultyAssignmentManagePage';
import FacultyAttendanceManagePage from "./FacultyAttendanceManagePage";
import FacultyExamManagePage from './FacultyExamManagePage';
import FacultyGradeManagePage from './FacultyGradeManagePage';
import FacultyNoticeManagePage from './FacultyNoticeManagePage';
import FacultySyllabiManagePage from './FacultySyllabiManagePage/index';
import { DropDownRow, DropDownWrap, LectureID, LectureTitle, PageWrap } from "./style";

const FacultyManagePage = () => {
  const FacultyNavigationAccordian = useRecoilValue(FacultyNavigationAccordianActivedState);
  const [selectedLectureID, setSelectedLectureID] = useRecoilState(FacultyLectureSelectedState);
  const [selectedLectureName, setSelectedLectureName] = useState("");
  const [lectureDropDown, setLectureDropDown] = useState(false);
  const [lectureNameList, setLectureNameList] = useState([]);
  const lectures = useRecoilValue(FacultyLecturesState);

  //to add lecture load API

  const loadLectureName = () => {
    let names = [];
    lectures.forEach((lecture, lectureIndex) => {
      names.push(lecture.name)
    })
    if (names.length > 0) {
      setLectureNameList(names);
      setSelectedLectureName(names[0]);
    }
  }

  useEffect(loadLectureName, [lectures]);

  const handleLectureSelect = (value) => {
    let lectureID = "";
    lectures.forEach((e) => {
      if (e.name === value) {
        lectureID = e.ID;
      }
    })
    setSelectedLectureID(lectureID);
    setSelectedLectureName(value);
  }

  const RenderContents = useCallback(() => {
    switch (FacultyNavigationAccordian) {
      case "1":
        return (
          <FacultySyllabiManagePage
          />
        );
      case "2":
        return (
          <FacultyNoticeManagePage
          />
        );
      case "3":
        return (
          <FacultyArchiveManagePage
          />
        );
      case "4":
        return (
          <FacultyAssignmentManagePage
          />
        );
      case "5":
        return (
          <FacultyAttendanceManagePage
          />
        );
      case "6":
        return (
          <FacultyExamManagePage
          />
        );
      case "7":
        return (
          <FacultyGradeManagePage
          />
        );
      default:
        return "error";
    }
  }, [FacultyNavigationAccordian])

  return (
    <PageWrap>
      <DropDownRow>
        <DropDownWrap>
          {
            lectures ?
              <DropDown
                state={selectedLectureName}
                setState={handleLectureSelect}
                isOpen={lectureDropDown}
                setIsOpen={setLectureDropDown}
                list={lectureNameList}
                fontSize={"var(--font-size-xs)"}
                width={"10rem"}
                listWidth={"7.5rem"}
                height={"1.875rem"}
              />
              :
              ""
          }
        </DropDownWrap>
        <LectureTitle>{selectedLectureName}</LectureTitle>
        <LectureID>{selectedLectureID}</LectureID>
      </DropDownRow>
      <RenderContents />
    </PageWrap>
  )
}

export default FacultyManagePage;