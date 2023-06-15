import { useEffect, useState } from "react";
import { BodyRow, ButtonWrap, Buttons, CancelButton, CancelButtonWrap, ChartColumn, ChartHeader, ChartInput, ChartValue, LeftPadding, RatioChart, RowContent, RowInput, RowTextArea, RowTitle, SubmitButton, SubmitButtonWrap, SyllabusBody, SyllabusHeader, SyllabusTitle, SyllabusWrap } from "./style";

const FacultyLectureCreatePage = () => {
  const [professor, setProfessor] = useState({});

  const [inputName, setInputName] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputCredit, setInputCredit] = useState("");
  const [inputNumOfTime, setInputNumOfTime] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputBookName, setInputBookName] = useState("");
  const [inputBookAuthor, setInputBookAuthor] = useState("");
  const [inputBookPublisher, setInputBookPublisher] = useState("");
  const [inputRatAtt, setInputRatAtt] = useState(0);
  const [inputRatMid, setInputRatMid] = useState(0);
  const [inputRatFin, setInputRatFin] = useState(0);
  const [inputRatAss, setInputRatAss] = useState(0);

  const onSubmit = () => {
    const data = {
      name: inputName,
      type: inputType,
      professor: professor.professor,
      professorPhone: professor.professorPhone,
      professorEmail: professor.professorEmail,
      major: professor.major,
      credit: inputCredit,
      numOfTime: inputNumOfTime,
      time: inputTime,
      place: inputPlace,
      description: inputDescription,
      textBook: {
        name: inputBookName,
        author: inputBookAuthor,
        publisher: inputBookPublisher
      },
      evaluationRatio: {
        attendance: inputRatAtt,
        midTermExam: inputRatMid,
        finalExam: inputRatFin,
        assignment: inputRatAss
      }
    }
    console.log(data);
  }

  //API call
  const loadProfessorInform = () => {
    setProfessor(
      {
        professor: "이기훈",
        professorPhone: "02-940-8674",
        professorEmail: "kihoonlee@kw.ac.kr",
        major: "컴퓨터정보공학부",
      })
  }

  useEffect(loadProfessorInform, []);

  return (
    <SyllabusWrap>
      <ButtonWrap>
        <SyllabusHeader>
          <SyllabusTitle>강의계획서 관리</SyllabusTitle>
          <Buttons>
            <SubmitButtonWrap>
              <SubmitButton
                onClick={() => {
                  let result = window.confirm(`작성한 내용으로 강의를 생성하시겠습니까?`);
                  if (result) {
                    onSubmit();
                  } else {
                    return;
                  }
                }}
              >
                생성
              </SubmitButton>
            </SubmitButtonWrap>
            <CancelButtonWrap>
              <CancelButton
                onClick={() => {
                  let result = window.confirm(`입력한 내용을 초기화하시겠습니까?`);
                  if (result) {
                    setInputName("");
                    setInputType("");
                    setInputCredit("");
                    setInputNumOfTime("");
                    setInputTime("");
                    setInputPlace("");
                    setInputDescription("");
                    setInputBookName("");
                    setInputBookAuthor("");
                    setInputBookPublisher("");
                    setInputRatAtt("");
                    setInputRatMid("");
                    setInputRatFin("");
                    setInputRatAss("");
                  } else {
                    return;
                  }
                }}
              >
                초기화
              </CancelButton>
            </CancelButtonWrap>
          </Buttons>
        </SyllabusHeader>
        <SyllabusBody>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교수</RowTitle>
            <RowContent>{professor.professor}</RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교수연락처</RowTitle>
            <RowContent>{professor.professorPhone}</RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교수이메일</RowTitle>
            <RowContent>{professor.professorEmail}</RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>개설학부</RowTitle>
            <RowContent>{professor.major}</RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>강의명</RowTitle>
            <RowContent>
              <RowInput
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>강의구분</RowTitle>
            <RowContent>
              <RowInput
                value={inputType}
                onChange={(e) => {
                  setInputType(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>학점</RowTitle>
            <RowContent>
              <RowInput
                value={inputCredit}
                type="number"
                onChange={(e) => {
                  setInputCredit(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>시수</RowTitle>
            <RowContent>
              <RowInput
                value={inputNumOfTime}
                type="number"
                onChange={(e) => {
                  setInputNumOfTime(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>강의시간</RowTitle>
            <RowContent>
              <RowInput
                value={inputTime}
                onChange={(e) => {
                  setInputTime(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>장소</RowTitle>
            <RowContent>
              <RowInput
                value={inputPlace}
                onChange={(e) => {
                  setInputPlace(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교과목 개요</RowTitle>
            <RowContent>
              <RowTextArea rows={10}
                value={inputDescription}
                onChange={(e) => {
                  setInputDescription(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교과서 제목</RowTitle>
            <RowContent>
              <RowInput
                value={inputBookName}
                onChange={(e) => {
                  setInputBookName(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교과서 저자</RowTitle>
            <RowContent>
              <RowInput
                value={inputBookAuthor}
                onChange={(e) => {
                  setInputBookAuthor(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>교과서 출판사</RowTitle>
            <RowContent>
              <RowInput
                value={inputBookPublisher}
                onChange={(e) => {
                  setInputBookPublisher(e.target.value);
                }}
              />
            </RowContent>
          </BodyRow>
          <BodyRow>
            <LeftPadding />
            <RowTitle>평가비율</RowTitle>
            <RowContent>
              <RatioChart>
                <ChartColumn>
                  <ChartHeader>출석</ChartHeader>
                  <ChartValue>
                    <ChartInput
                      value={inputRatAtt}
                      type="number"
                      onChange={(e) => {
                        setInputRatAtt(e.target.value);
                      }}
                    />
                  </ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>중간고사</ChartHeader>
                  <ChartValue>
                    <ChartInput
                      value={inputRatMid}
                      type="number"
                      onChange={(e) => {
                        setInputRatMid(e.target.value);
                      }}
                    />
                  </ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>기말고사</ChartHeader>
                  <ChartValue>
                    <ChartInput
                      value={inputRatFin}
                      type="number"
                      onChange={(e) => {
                        setInputRatFin(e.target.value);
                      }}
                    />
                  </ChartValue>
                </ChartColumn>
                <ChartColumn>
                  <ChartHeader>과제</ChartHeader>
                  <ChartValue>
                    <ChartInput
                      value={inputRatAss}
                      type="number"
                      onChange={(e) => {
                        setInputRatAss(e.target.value);
                      }}
                    />
                  </ChartValue>
                </ChartColumn>
              </RatioChart>
            </RowContent>
          </BodyRow>
        </SyllabusBody>
        <br /><br /><br /><br /><br /><br />
      </ButtonWrap>
    </SyllabusWrap>
  )
}

export default FacultyLectureCreatePage;