import { LectureSelectedState } from "@./Atom";
import { useRecoilState } from "recoil";

const StudentLectureDetailPage = () => {
  const [selectedLecture, setSelectedLecture] = useRecoilState(LectureSelectedState);

    return(
        <div>
          {selectedLecture} 강의상세 페이지
        </div>
    )
}

export default StudentLectureDetailPage;