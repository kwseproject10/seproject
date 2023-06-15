import { useEffect, useState } from "react";
import { DeleteButton, DeleteButtonWrap, KnobBody, KnobHeader, KnobRow, KnobsWrap, ListBody, ListHeader, ListRow, ListTitle, ListTitleRow, ListWrap, ModifyButton, ModifyButtonWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostHit, PostTitle, ViewButton, ViewButtonWrap } from "./style";

const FacultyGradeManagePage = ({ lectureName }) => {
  const [grades, setGrades] = useState([]);
  const [orderedList, setOrderedList] = useState([]);
  const [studednts, setStudents] = useState([]);
  //students는 듣는 모든 학생 정보
  const loadStudents = () => {
    setStudents([
      { name: "탁예성", ID: "2020558478" },
      { name: "허현경", ID: "2020417251" },
      { name: "성시혁", ID: "2020448739" },
      { name: "고경훈", ID: "2020766098" },
      { name: "성승근", ID: "2020933618" },
      { name: "유경진", ID: "2020925142" },
      { name: "탁윤혁", ID: "2020928534" },
      { name: "성윤호", ID: "2020867433" },
      { name: "심민희", ID: "2020291438" },
      { name: "예인혜", ID: "2020502081" },
      { name: "예원웅", ID: "2020168883" },
      { name: "손병일", ID: "2020758264" },
      { name: "제갈은옥", ID: "2020911728" },
      { name: "허정희", ID: "2020930512" },
      { name: "제갈원숙", ID: "2020562394" },
      { name: "홍정태", ID: "2020522944" },
      { name: "유태영", ID: "2020453773" },
      { name: "백태영", ID: "2020757238" },
      { name: "최인욱", ID: "2020264126" },
      { name: "전선재", ID: "2020769430" },
      { name: "복명원", ID: "2020872755" },
      { name: "박진희", ID: "2020666973" },
      { name: "제갈성숙", ID: "2020728477" },
      { name: "남경호", ID: "2020628161" },
      { name: "하정일", ID: "2020668881" },
      { name: "류석호", ID: "2020532610" },
      { name: "홍희태", ID: "2020601556" },
      { name: "풍병준", ID: "2020493879" },
      { name: "강범호", ID: "2020858655" },
      { name: "설성기", ID: "2020851136" }])
  }
  //API call
  const loadGrades = () => {
    
  }

  const initSearchedLectures = () => {
    setOrderedList(grades);
  }

  useEffect(loadGrades, []);
  useEffect(initSearchedLectures, [grades]);

  return (
    <PageWrap>
      <ListWrap>
        <ListTitleRow>
          <ListTitle>강의 성적 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>저장</PostButton>
          </PostButtonWrap>
        </ListTitleRow>
        <KnobsWrap>
          <KnobHeader></KnobHeader>
          <KnobBody>
            <KnobRow>
              
            </KnobRow>
          </KnobBody>
        </KnobsWrap>
        <br/>
        <ListHeader>
          <PostTitle>제목</PostTitle>
          <PostDate>작성일자</PostDate>
          <PostHit>조회수</PostHit>
          <PostButtons>
            <ViewButtonWrap>조회</ViewButtonWrap>
            <ModifyButtonWrap>수정</ModifyButtonWrap>
            <DeleteButtonWrap>삭제</DeleteButtonWrap>
          </PostButtons>
        </ListHeader>
        <ListBody>
          {
            orderedList.map((grade, gradeIndex) => {
              return (
                <ListRow>
                  <PostTitle>{grade.title}</PostTitle>
                  <PostDate>{grade.date}</PostDate>
                  <PostHit>{grade.hit}</PostHit>
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
            })
          }
        </ListBody>
      </ListWrap>
    </PageWrap>
  )
}

export default FacultyGradeManagePage;