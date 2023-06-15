import DropDown from '@components/DropDown/';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FacultyLectureSelectedState, FacultyLecturesState, FacultyNavigationAccordianActivedState } from "../../../Atom";
import FacultyArchiveManagePage from './FacultyArchiveManagePage';
import FacultyAssignmentManagePage from './FacultyAssignmentManagePage';
import FacultyAttendanceManagePage from "./FacultyAttendanceManagePage";
import FacultyExamManagePage from './FacultyExamManagePage';
import FacultyGradeManagePage from './FacultyGradeManagePage';
import FacultyNoticeManagePage from './FacultyNoticeManagePage';
import FacultySyllabiManagePage from './FacultySyllabiManagePage/index';
import { DropDownRow, DropDownWrap, PageWrap } from "./style";

const FacultyManagePage = () => {
  const FacultyNavigationAccordian = useRecoilValue(FacultyNavigationAccordianActivedState);
  const setSelectedLectureID = useSetRecoilState(FacultyLectureSelectedState);
  const [selectedLecture, setSelectedLecture] = useState("");
  const [lectureDropDown, setLectureDropDown] = useState(false);
  const [lectureNameList, setLectureNameList] = useState([]);
  const lectures = useRecoilValue(FacultyLecturesState);

  //to add lecture load API

  const loadLectureName = () => {
    if (lectures) {
      setLectureNameList([]);
      lectures.forEach((e) => {
        setLectureNameList((prev) => [...prev, e.name]);
      })
      setSelectedLecture();
    }
  }

  useEffect(loadLectureName, [lectures, setSelectedLecture]);

  const handleLectureSelect = (value) => {
    let lectureID = "";
    lectures.forEach((e) => {
      if (e.name === value) {
        lectureID = e.ID;
      }
    })
    setSelectedLectureID(lectureID);
    setSelectedLecture(value);
  }

  const RenderContents = () => {
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
  }

  return (
    <PageWrap>
      <DropDownRow>
        <DropDownWrap>
          {
            lectures ?
              <DropDown
                state={selectedLecture}
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
      </DropDownRow>
      <RenderContents />
    </PageWrap>
  )
}

export default FacultyManagePage;