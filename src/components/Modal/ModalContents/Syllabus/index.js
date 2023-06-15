import axios from "axios";
import { useEffect, useState } from "react";
import { BodyRow, ButtonRow, ButtonWrap, ChartColumn, ChartHeader, ChartValue, CloseButton, RatioChart, RowContent, RowTitle, SyllabusBody, SyllabusHeader, SyllabusTitle, SyllabusWrap } from "./style";

const Syllabus = ({ setModalOpen, syllabusID }) => {
  const [lecture, setLecture] = useState({});
  console.log(syllabusID);
  useEffect(() => {
    const fetch = async () => {
      const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/syllabus?lectureID=${syllabusID}`;
      const res = await axios.get(
        route
      );
      setLecture(res.data[0]);
    }
    fetch();
  }, [ syllabusID ])
  
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
              <RatioChart>
                <ChartColumn>
                  <ChartHeader>출석</ChartHeader>
                  <ChartValue>{lecture.evaluationRatio.attendance} %</ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>중간고사</ChartHeader>
                  <ChartValue>{lecture.evaluationRatio.midTermExam} %</ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>기말고사</ChartHeader>
                  <ChartValue>{lecture.evaluationRatio.finalExam} %</ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>과제</ChartHeader>
                  <ChartValue>{lecture.evaluationRatio.assignment} %</ChartValue>
                </ChartColumn>
              </RatioChart>
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