import { useState } from "react";
import { BodyRow, ButtonRow, ButtonWrap, CloseButton, RowContent, RowTitle, SyllabusBody, SyllabusHeader, SyllabusTitle, SyllabusWrap } from "./style";
import { useEffect } from "react";

const Syllabus = ({ lectureID, setModalOpen }) => {
  const [lecture, setLecture] = useState({});

  //API call
  const loadLectureInform = () => {
    setLecture(
      {
        key: "0",
        name: "소프트웨어공학",
        professor: "이기훈",
        professorPhone: "02-940-8674",
        professorEmail: "kihoonlee@kw.ac.kr",
        major: "컴퓨터정보공학부",
        type: "전선",
        credit: "3",
        numOfTime: "3",
        time: ["월5", "수6"],
        place: "새빛205",
        ID: "H020-4-0846-01",
        textBook: {
          name: "Software Engineering 10th Edition",
          author: "Ian Sommerville",
          publisher: "Addison-Wesley"
        },
        description: "본 과정은 소프트웨어 공학에 관한 일반적인 입문 과정으로, 소프트웨어 공학의 기본 개념, methods, 실무활용 예 및 최근 기술동향 등을 소개한다.",
        evaluationRatio: {
          attendance: "10",
          midTermExam: "30",
          finalExam: "30",
          assignment: "30",
          attitude: "0",
          quiz: "0",
          etc: "0"
        }
      })
  }

  useEffect(loadLectureInform, []);

  return (
    <SyllabusWrap>
      <ButtonWrap>
      <SyllabusHeader>
        <SyllabusTitle>강의계획서</SyllabusTitle>
      </SyllabusHeader>
      {lecture === undefined ?
        ""
        :
        <SyllabusBody>
          <BodyRow>
            <RowTitle>학정번호</RowTitle>
            <RowContent>{lecture.ID}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>강의명</RowTitle>
            <RowContent>{lecture.name}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>교수</RowTitle>
            <RowContent>{lecture.professor}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>교수연락처</RowTitle>
            <RowContent>{lecture.professorPhone}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>교수이메일</RowTitle>
            <RowContent>{lecture.professorEmail}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>개설학부</RowTitle>
            <RowContent>{lecture.major}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>강의구분</RowTitle>
            <RowContent>{lecture.type}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>학점/시수</RowTitle>
            <RowContent>{lecture.credit} / {lecture.numOfTime}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>강의시간/장소</RowTitle>
            <RowContent>{lecture.time} / {lecture.place}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>교과목 개요</RowTitle>
            <RowContent>{lecture.description}</RowContent>
          </BodyRow>
          <BodyRow>
            <RowTitle>교과서</RowTitle>
            {lecture.textBook === undefined ?
              ""
              :
              <RowContent>{lecture.textBook.name} / {lecture.textBook.author} / {lecture.textBook.publisher}</RowContent>
            }
          </BodyRow>
          <BodyRow>
            <RowTitle>평가비율</RowTitle>
            {lecture.evaluationRatio === undefined ?
              ""
              :
              <RowContent>
                출석: {lecture.evaluationRatio.attendance}%<br />
                중간고사: {lecture.evaluationRatio.midTermExam}%<br />
                기말고사: {lecture.evaluationRatio.finalExam}%<br />
                과제: {lecture.evaluationRatio.assignment}%<br />
                수강태도: {lecture.evaluationRatio.attitude}%<br />
                퀴즈: {lecture.evaluationRatio.quiz}%<br />
                기타: {lecture.evaluationRatio.etc}%
              </RowContent>
            }
          </BodyRow>
        </SyllabusBody>
      }
      <ButtonRow>
        <CloseButton
          onClick={()=>{
            setModalOpen(false);
          }}
        >
          닫기
        </CloseButton>
      </ButtonRow>
      </ButtonWrap>
    </SyllabusWrap>
  )
}

export default Syllabus;