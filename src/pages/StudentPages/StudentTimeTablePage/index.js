import TimeTablePageLectureList from "@components/Lists/TimeTablePageLectureList";
import TimeTable from "@components/TimeTable";
import { useRecoilValue } from "recoil";
import { LecturesState } from "../../../Atom";
import { LectureListWrap, PageRow, TimeTablePageWrap } from "./style";

const StudentTimeTablePage = () => {
  const lectures = useRecoilValue(LecturesState);

  return(
      <TimeTablePageWrap>
        <PageRow>
          <TimeTable
            lectures={lectures}
            isDetail={true}
          />
          <LectureListWrap>
            <TimeTablePageLectureList
              lectures={lectures}
            />
          </LectureListWrap>
        </PageRow>
      </TimeTablePageWrap>
  )
}

export default StudentTimeTablePage;