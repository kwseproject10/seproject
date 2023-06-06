import { LectureSelectedState } from "@./Atom";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { DetailPageContents, DetailPageHeader, DetailPageLectureName, DetailPageLectureNum, DetailPageLectureWrap, DetailPageNavigation, DetailPageNavigationButton, DetailPageNavigationButtonWrap, DetailPageWrap, Hidden } from "./style";
import LectureDetailMain from "./LectureDetailMain";
import LectureDetailNotice from "./LectureDetailNotice";
import LectureDetailArchive from "./LectureDetailArchive";
import LectureDetailAssignment from "./LectureDetailAssignment";

const StudentLectureDetailPage = () => {
  const [selectedLecture, setSelectedLecture] = useRecoilState(LectureSelectedState);
  const [lectureInform, setLectureInform] = useState({})
  const [navigationIndex, setNavigationindex] = useState(0);

  const loadLectureInform = () => {
    switch(selectedLecture){
      case "H020-4-0846-01":
        setLectureInform({
          lectureName : "소프트웨어공학",
        })
        break;
      case "H020-2-0453-01":
        setLectureInform({
          lectureName : "디지털논리회로1",
        })
        break;
      case "H020-3-2004-01":
        setLectureInform({
          lectureName : "신호및시스템",
        })
        break;
      case "H020-4-5861-01":
        setLectureInform({
          lectureName : "임베디드시스템S/W설계",
        })
        break;
      case "H020-4-8483-01":
        setLectureInform({
          lectureName : "머신러닝",
        })
        break;
      default:
        setLectureInform({
          lectureName : "ERROR",
        })
        break;
    }
  }
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
  useEffect(loadLectureInform,[ selectedLecture ]);
    return(
        <DetailPageWrap>
          <DetailPageHeader>
            <DetailPageLectureWrap>
              <DetailPageLectureName>{lectureInform.lectureName}</DetailPageLectureName>
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