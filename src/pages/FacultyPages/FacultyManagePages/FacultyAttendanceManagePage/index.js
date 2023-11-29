import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FacultyLectureSelectedState } from './../../../../Atom';
import { toStringFormat } from './../../../../utils/date';
import { AttendanceRatio, DeleteButton, DeleteButtonWrap, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostSummary, PostTitle, ViewButton, ViewButtonWrap } from "./style";

const FacultyAttendanceManagePage = ({ lectureName }) => {
  const [attendances, setAttendances] = useState([]);
  const selectedLecture = useRecoilValue(FacultyLectureSelectedState);

  useEffect(() => {
    const fetchAssignment = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/lectureattendance?lectureID=${selectedLecture}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
          {
            classID : "1",
            classDate : "2023-03-23T12:00:00Z",
            classWeek : "1",
            classDay : "1",
            numOfAtt : 22,
            numOfAbs : 5,
            numOflat : 2
          },
          {
            classID : "2",
            classDate : "2023-03-25T12:00:00Z",
            classWeek : "1",
            classDay : "2",
            numOfAtt : 23,
            numOfAbs : 5,
            numOflat : 2
          }
        ]
      }
      if (res.data.result === "false") {
        console.log("attendance load fail");
        return
      }
      console.log(res.data);
      setAttendances(res.data);
    }
    fetchAssignment();
  }, [selectedLecture])

  return (
    <PageWrap>
      <ListWrap>
        <ListTitleRow>
          <ListTitle>강의 출석 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>출석 등록</PostButton>
          </PostButtonWrap>
        </ListTitleRow>
        <ListHeader>
          <PostTitle>주차 및 회차</PostTitle>
          <PostDate>등록일자</PostDate>
          <PostSummary>출석</PostSummary>
          <PostSummary>지각</PostSummary>
          <PostSummary>결석</PostSummary>
          <PostSummary>기타</PostSummary>
          <PostSummary>총원</PostSummary>
          <AttendanceRatio>출석율</AttendanceRatio>
          <PostButtons>
            <ViewButtonWrap>조회</ViewButtonWrap>
            <ModifyButtonWrap>수정</ModifyButtonWrap>
            <DeleteButtonWrap>삭제</DeleteButtonWrap>
          </PostButtons>
        </ListHeader>
        <ListBody>
          {attendances.map((ele, idx) => {
            return (<ListRow>
              <PostTitle>
                {ele.classWeek}주차 {ele.classDay}회차
              </PostTitle>
              <PostDate>
                {toStringFormat(ele.classDate)}
              </PostDate>
              <PostSummary>
                {`${ele.numOfAtt}`} 명
              </PostSummary>
              <PostSummary>
                {`${ele.numOflat}`} 명
              </PostSummary>
              <PostSummary>
                {`${ele.numOfAbs}`} 명
              </PostSummary>
              <PostSummary>
                0 명
              </PostSummary>
              <PostSummary>
                {ele.numOfAtt + ele.numOflat + ele.numOfAbs} 명
              </PostSummary>
              <AttendanceRatio>
                {(ele.numOfAtt / (ele.numOfAtt + ele.numOflat + ele.numOfAbs)).toFixed(4) * 100} %
              </AttendanceRatio>
              <PostButtons>
                <ViewButtonWrap>
                  <ViewButton />
                </ViewButtonWrap>
                <ModifyButtonWrap>
                  <ModifyButton />
                </ModifyButtonWrap>
                <DeleteButtonWrap>
                  <DeleteButton />
                </DeleteButtonWrap>
              </PostButtons>
            </ListRow>
            )
          })}
        </ListBody>
      </ListWrap>
    </PageWrap>
  )
}

export default FacultyAttendanceManagePage;