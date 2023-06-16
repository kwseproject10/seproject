import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { FacultyLectureSelectedState, FacultyLecturesState, FacultySelectedLectureNameState, userIDState } from "../../../Atom";
import FacultyLectureList from "../../../components/Lists/FacultyLectureList";
import FacultyTimeTable from './../../../components/TimeTable/FacultyTimeTable/index';
import { LectureListWrap, PageRow, TimeTablePageWrap } from "./style";

const FacultyMainPage = () => {
  const [lectures, setLectures] = useRecoilState(FacultyLecturesState);
  const setSelectedLectureID = useSetRecoilState(FacultyLectureSelectedState);
  const userID = useRecoilValue(userIDState);
  const setSelectedLectureName = useSetRecoilState(FacultySelectedLectureNameState);
  
  useEffect(() => {
    const fetchAssignment = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/professorlectures?userID=${userID}`;
      const res = await axios.get(
        route
      );
      if(res.data.result === "false") {
        console.log("assignment load fail");
        return
      }
      console.log(res.data);
      setLectures(res.data);
      if(res.data !== undefined){
        setSelectedLectureID(res.data[0].ID)
        setSelectedLectureName(res.data[0].name);
      }
    }
    fetchAssignment();
  }, [ userID, setLectures, setSelectedLectureID, setSelectedLectureName ])
  return(
      <TimeTablePageWrap>
        <PageRow>
          <FacultyTimeTable
            lectures={lectures}
            isDetail={true}
          />
          <LectureListWrap>
            <FacultyLectureList
              lectures={lectures}
            />
          </LectureListWrap>
        </PageRow>
      </TimeTablePageWrap>
  )
}

export default FacultyMainPage;