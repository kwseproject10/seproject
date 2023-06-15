import { LectureSelectedState } from "@./Atom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { LecturesState } from "../../../Atom";
import LectureDetailArchive from "./LectureDetailArchive";
import LectureDetailAssignment from "./LectureDetailAssignment";
import LectureDetailMain from "./LectureDetailMain";
import LectureDetailNotice from "./LectureDetailNotice";
import { DetailPageContents, DetailPageHeader, DetailPageLectureName, DetailPageLectureNum, DetailPageLectureWrap, DetailPageNavigation, DetailPageNavigationButton, DetailPageNavigationButtonWrap, DetailPageWrap, Hidden } from "./style";

const StudentLectureDetailPage = () => {
  const selectedLecture = useRecoilValue(LectureSelectedState);
  const lectures = useRecoilValue(LecturesState);
  const [lectureName, setLectureName] = useState("")
  const [navigationIndex, setNavigationindex] = useState(0);

  useEffect(() => {
    lectures.forEach((lecture) => {
      if(lecture.ID === selectedLecture){
        setLectureName(lecture.name);
        return;
      }
    })
  }, [ lectures, selectedLecture ])

  const RenderContents = () => {
    switch (navigationIndex){
      case 0:
        return (
          <LectureDetailMain
            selectedLecture={selectedLecture}
            setNavigationindex={setNavigationindex}
          />
        );
      case 1:
        return (
          <LectureDetailNotice
            selectedLecture={selectedLecture}
          />
        );
      case 2:
        return (
          <LectureDetailArchive
            selectedLecture={selectedLecture}
          />
        );
      case 3:
        return (
          <LectureDetailAssignment
            selectedLecture={selectedLecture}
          />
        );
      default:
        return "error";
    }
  }

    return(
        <DetailPageWrap>
          <DetailPageHeader>
            <DetailPageLectureWrap>
              <DetailPageLectureName>{lectureName}</DetailPageLectureName>
              <DetailPageLectureNum>{selectedLecture}</DetailPageLectureNum>
            </DetailPageLectureWrap>
            <DetailPageNavigation>
              <DetailPageNavigationButtonWrap>
                <DetailPageNavigationButton
                  index={0}
                  navigationIndex={navigationIndex}
                  onClick={()=>{setNavigationindex(0)}}
                >
                  강의 종합
                </DetailPageNavigationButton>
                <DetailPageNavigationButton
                  index={1}
                  navigationIndex={navigationIndex}
                  onClick={()=>{setNavigationindex(1)}}
                >
                  공지사항
                </DetailPageNavigationButton>
                <DetailPageNavigationButton
                  index={2}
                  navigationIndex={navigationIndex}
                  onClick={()=>{setNavigationindex(2)}}
                >
                  자료실
                </DetailPageNavigationButton>
                <DetailPageNavigationButton
                  index={3}
                  navigationIndex={navigationIndex}
                  onClick={()=>{setNavigationindex(3)}}
                >
                  과제
                </DetailPageNavigationButton>
              </DetailPageNavigationButtonWrap>
            </DetailPageNavigation>
            <Hidden>.</Hidden>
          </DetailPageHeader>
          <DetailPageContents>
            <RenderContents/>
          </DetailPageContents>
        </DetailPageWrap>
    )
}

export default StudentLectureDetailPage;