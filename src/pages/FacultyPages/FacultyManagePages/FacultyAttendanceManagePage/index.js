import { useEffect, useState } from "react";
import { AttendanceRatio, DeleteButton, DeleteButtonWrap, ListBody, ListHeader, ListRow, ListTitle, ListWrap, ModifyButton, ModifyButtonWrap, PageWrap, PostButton, PostButtonWrap, PostButtons, PostDate, PostSummary, PostTitle, ViewButton, ViewButtonWrap } from "./style";

const FacultyAttendanceManagePage = ({ lectureName }) => {
  const [attendances, setAttendances] = useState([]);
  const [students, setStudents] = useState([]);
  //API call
  //attendances는 주차,회차별로 모든 학생 출석 정보 [[{출석},...회차],...주차]
  const loadAttendances = () => {
    setAttendances([
      [//1주차
        {//1주차 1회차
          "date": "2023.03.21(월)",
          "2020558478": "출석",
          "2020417251": "출석",
          "2020448739": "출석",
          "2020766098": "출석",
          "2020933618": "출석",
          "2020925142": "출석",
          "2020928534": "출석",
          "2020867433": "출석",
          "2020291438": "출석",
          "2020502081": "출석",
          "2020168883": "출석",
          "2020758264": "출석",
          "2020911728": "출석",
          "2020930512": "출석",
          "2020562394": "출석",
          "2020522944": "출석",
          "2020453773": "출석",
          "2020757238": "출석",
          "2020264126": "출석",
          "2020769430": "출석",
          "2020872755": "출석",
          "2020666973": "출석",
          "2020728477": "출석",
          "2020628161": "출석",
          "2020668881": "출석",
          "2020532610": "출석",
          "2020601556": "출석",
          "2020493879": "출석",
          "2020858655": "출석",
          "2020851136": "출석"
        },
        {//1주차 2회차
          "date": "2023.03.23(수)",
          "2020558478": "출석",
          "2020417251": "출석",
          "2020448739": "출석",
          "2020766098": "출석",
          "2020933618": "출석",
          "2020925142": "출석",
          "2020928534": "출석",
          "2020867433": "출석",
          "2020291438": "결석",
          "2020502081": "출석",
          "2020168883": "지각",
          "2020758264": "출석",
          "2020911728": "결석",
          "2020930512": "출석",
          "2020562394": "출석",
          "2020522944": "출석",
          "2020453773": "결석",
          "2020757238": "지각",
          "2020264126": "출석",
          "2020769430": "출석",
          "2020872755": "결석",
          "2020666973": "출석",
          "2020728477": "출석",
          "2020628161": "출석",
          "2020668881": "결석",
          "2020532610": "출석",
          "2020601556": "출석",
          "2020493879": "출석",
          "2020858655": "출석",
          "2020851136": "출석"
        }
      ],
      [//2주차
        {//2주차 1회차
          "date": "2023.03.28(월)",
          "2020558478": "출석",
          "2020417251": "출석",
          "2020448739": "출석",
          "2020766098": "결석",
          "2020933618": "출석",
          "2020925142": "출석",
          "2020928534": "지각",
          "2020867433": "출석",
          "2020291438": "출석",
          "2020502081": "출석",
          "2020168883": "출석",
          "2020758264": "출석",
          "2020911728": "결석",
          "2020930512": "출석",
          "2020562394": "출석",
          "2020522944": "출석",
          "2020453773": "결석",
          "2020757238": "출석",
          "2020264126": "출석",
          "2020769430": "출석",
          "2020872755": "결석",
          "2020666973": "출석",
          "2020728477": "출석",
          "2020628161": "지각",
          "2020668881": "결석",
          "2020532610": "출석",
          "2020601556": "출석",
          "2020493879": "출석",
          "2020858655": "출석",
          "2020851136": "출석"
        },
        {//2주차 2회차
          "date": "2023.03.30(수)",
          "2020558478": "출석",
          "2020417251": "출석",
          "2020448739": "지각",
          "2020766098": "출석",
          "2020933618": "출석",
          "2020925142": "출석",
          "2020928534": "출석",
          "2020867433": "출석",
          "2020291438": "결석",
          "2020502081": "출석",
          "2020168883": "출석",
          "2020758264": "출석",
          "2020911728": "결석",
          "2020930512": "지각",
          "2020562394": "출석",
          "2020522944": "출석",
          "2020453773": "결석",
          "2020757238": "출석",
          "2020264126": "공결",
          "2020769430": "출석",
          "2020872755": "결석",
          "2020666973": "출석",
          "2020728477": "출석",
          "2020628161": "출석",
          "2020668881": "결석",
          "2020532610": "출석",
          "2020601556": "출석",
          "2020493879": "출석",
          "2020858655": "출석",
          "2020851136": "출석"
        }
      ]
    ])
  }
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

  useEffect(loadAttendances, []);
  useEffect(loadStudents, []);
  return (
    <PageWrap>
      <ListWrap>
        <ListHeader>
          <ListTitle>강의 출석 관리</ListTitle>
          <PostButtonWrap>
            <PostButton>출석 등록</PostButton>
          </PostButtonWrap>
        </ListHeader>
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
          {
            attendances.map((week, weekIndex) => {
              return (
                week.map((day, dayIndex) => {
                  return (
                    <ListRow>
                      <PostTitle>
                        {weekIndex + 1}주차 {dayIndex + 1}회차
                      </PostTitle>
                      <PostDate>
                        {day["date"]}
                      </PostDate>
                      <PostSummary>
                        {Object.values(day).filter(e=>e==="출석").length} 명
                      </PostSummary>
                      <PostSummary>
                        {Object.values(day).filter(e=>e==="지각").length} 명
                      </PostSummary>
                      <PostSummary>
                        {Object.values(day).filter(e=>e==="결석").length} 명
                      </PostSummary>
                      <PostSummary>
                        {Object.values(day).length - Object.values(day).filter(e=>e==="출석").length - Object.values(day).filter(e=>e==="지각").length - Object.values(day).filter(e=>e==="결석").length} 명
                      </PostSummary>
                      <PostSummary>
                        {Object.values(day).length} 명
                      </PostSummary>
                      <AttendanceRatio>
                        {(Object.values(day).filter(e=>e==="출석").length / Object.values(day).length).toFixed(4) * 100} %
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
                })
              )
            })
          }
        </ListBody>
      </ListWrap>
    </PageWrap>
  )
}

export default FacultyAttendanceManagePage;