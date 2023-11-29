import BoardPageList from "@components/Lists/BoardPageList";
import PostDetail from "@components/Lists/BoardPageList/PostDetail";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LectureSelectedState, SelectedPostIDState, SetInDetailPostState, userIDState } from "../../../../Atom";
import { NoticePageWrap } from "./style";

const LectureDetailNotice = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [inDetail, setInDetail] = useRecoilState(SetInDetailPostState);
  const [noticeID, setNoticeID] = useRecoilState(SelectedPostIDState);

  const userID = useRecoilValue(userIDState);
  const selectedLecture = useRecoilValue(LectureSelectedState);
  
  useEffect(() => {
    const fetchNotice = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/notice?lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data: [
          {
            key: "0",
            title: "중간고사 시험범위",
            subject: "소프트웨어공학",
            date: "2022.01.01(월)"
          },
          {
            key: "1",
            title: "2차 프로젝트 점수 공지",
            subject: "소프트웨어공학",
            date: "2023.05.28(일)"
          },
          {
            key: "2",
            title: "[자료] uCoS 예제소스 컴파일 시 발생하는 문제 해결방법",
            subject: "임베디드시스템S/W설계",
            date: "2022.01.01(월)"
          },
          {
            key: "3",
            title: "Assignment for INCOMPLETE PREREQUISITE",
            subject: "신호및시스템",
            date: "2022.01.01(월)"
          },
          {
            key: "4",
            title: "금일 수업 휴강 공지",
            subject: "머신러닝",
            date: "2022.01.01(월)"
          }
        ]
      }
      if(res.data.result === "false") {
        console.log("notice load fail");
        return
      }
      setNoticeList(res.data);
    }
    fetchNotice();
  }, [ userID, selectedLecture ])

  return (
    <NoticePageWrap>
      {inDetail ?
        <PostDetail
          setInDetail={setInDetail}
          postID={noticeID}
          boardName={"강의 공지사항"}
        />
        :
        <BoardPageList
          list={noticeList}
          linePerPage={10}
          setInDetail={setInDetail}
          setPostID={setNoticeID}
          boardTitle={"강의 공지사항"}
        />
      }
    </NoticePageWrap>
  )
}

export default LectureDetailNotice;