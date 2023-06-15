import { useRecoilValue } from "recoil";
import { FacultyLecturesState } from "../../../Atom";
import FacultyLectureList from "../../../components/Lists/FacultyLectureList";
import FacultyTimeTable from './../../../components/TimeTable/FacultyTimeTable/index';
import { LectureListWrap, PageRow, TimeTablePageWrap } from "./style";

const FacultyMainPage = () => {
  const lectures = useRecoilValue(FacultyLecturesState);

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