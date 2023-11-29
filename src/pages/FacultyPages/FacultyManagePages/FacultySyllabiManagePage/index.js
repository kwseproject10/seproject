import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { FacultyLectureSelectedState } from "../../../../Atom";
import { BodyRow, ButtonWrap, Buttons, CancelButton, CancelButtonWrap, ChartColumn, ChartHeader, ChartInput, ChartValue, LeftPadding, RatioChart, RowContent, RowInput, RowTextArea, RowTitle, SubmitButton, SubmitButtonWrap, SyllabusBody, SyllabusHeader, SyllabusTitle, SyllabusWrap, UpdateButton, UpdateButtonWrap } from "./style";

const FacultySyllabiManagePage = () => {
  const [lecture, setLecture] = useState({});
  const [modifyMode, setModifyMode] = useState(false);
  const [inputPlace, setInputPlace] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputBookName, setInputBookName] = useState("");
  const [inputBookAuthor, setInputBookAuthor] = useState("");
  const [inputBookPublisher, setInputBookPublisher] = useState("");
  const [inputRatAtt, setInputRatAtt] = useState(0);
  const [inputRatMid, setInputRatMid] = useState(0);
  const [inputRatFin, setInputRatFin] = useState(0);
  const [inputRatAss, setInputRatAss] = useState(0);
  const FacultySelectedLecture = useRecoilValue(FacultyLectureSelectedState);

  const onSubmit = () => {
    const data = {
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

  console.log(FacultySelectedLecture);
  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/syllabus?lectureID=${syllabusID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [{
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
        }]
      }
      console.log(res.data[0]);
      setLecture(res.data[0]);
    }
    fetch();
  }, [ FacultySelectedLecture ])
  
  const handleModifyMode = () => {
    setInputPlace(lecture.place);
    setInputDescription(lecture.description);
    if (lecture.textBook) {
      setInputBookName(lecture.textBook.name);
      setInputBookAuthor(lecture.textBook.author);
      setInputBookPublisher(lecture.textBook.publisher);
    }
    if (lecture.evaluationRatio) {
      setInputRatAtt(lecture.evaluationRatio.attendance);
      setInputRatMid(lecture.evaluationRatio.midTermExam);
      setInputRatFin(lecture.evaluationRatio.finalExam);
      setInputRatAss(lecture.evaluationRatio.assignment);
    }
    setModifyMode(true);
  }

  return (
    <SyllabusWrap>
      <ButtonWrap>
        <SyllabusHeader>
          <SyllabusTitle>강의계획서 관리</SyllabusTitle>
          {modifyMode ?
            <Buttons>
              <SubmitButtonWrap>
                <SubmitButton
                  onClick={() => {
                    setModifyMode(false);
                    onSubmit();
                  }}
                >
                  저장
                </SubmitButton>
              </SubmitButtonWrap>
              <CancelButtonWrap>
                <CancelButton
                  onClick={() => {
                    setModifyMode(false);
                  }}
                >
                  취소
                </CancelButton>
              </CancelButtonWrap>
            </Buttons>
            :
            <UpdateButtonWrap>
              <UpdateButton
                onClick={() => {
                  handleModifyMode();
                }}
              >
                수정
              </UpdateButton>
            </UpdateButtonWrap>
          }
        </SyllabusHeader>
        {lecture === undefined ?
          ""
          :
          <SyllabusBody>
            <BodyRow>
              <LeftPadding />
              <RowTitle>학정번호</RowTitle>
              <RowContent>{lecture.ID}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>강의명</RowTitle>
              <RowContent>{lecture.name}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교수</RowTitle>
              <RowContent>{lecture.professor}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교수연락처</RowTitle>
              <RowContent>{lecture.professorPhone}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교수이메일</RowTitle>
              <RowContent>{lecture.professorEmail}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>개설학부</RowTitle>
              <RowContent>{lecture.major}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>강의구분</RowTitle>
              <RowContent>{lecture.type}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>학점</RowTitle>
              <RowContent>{lecture.credit}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>시수</RowTitle>
              <RowContent>{lecture.numOfTime}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>강의시간</RowTitle>
              <RowContent>{lecture.time}</RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>장소</RowTitle>
              <RowContent>
                {modifyMode ?
                  <RowInput
                    value={inputPlace}
                    onChange={(e) => {
                      setInputPlace(e.target.value);
                    }}
                  />
                  :
                  lecture.place
                }
              </RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교과목 개요</RowTitle>
              <RowContent>
                {modifyMode ?
                  <RowTextArea rows={10}
                    value={inputDescription}
                    onChange={(e) => {
                      setInputDescription(e.target.value);
                    }}
                  />
                  :
                  lecture.description
                }
              </RowContent>
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교과서 제목</RowTitle>
              {lecture.textBook === undefined ?
                ""
                :
                <RowContent>
                  {modifyMode ?
                    <RowInput
                      value={inputBookName}
                      onChange={(e) => {
                        setInputBookName(e.target.value);
                      }}
                    />
                    :
                    lecture.textBook.name
                  }
                </RowContent>
              }
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교과서 저자</RowTitle>
              {lecture.textBook === undefined ?
                ""
                :
                <RowContent>
                  {modifyMode ?
                    <RowInput
                      value={inputBookAuthor}
                      onChange={(e) => {
                        setInputBookAuthor(e.target.value);
                      }}
                    />
                    :
                    lecture.textBook.author
                  }
                </RowContent>
              }
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>교과서 출판사</RowTitle>
              {lecture.textBook === undefined ?
                ""
                :
                <RowContent>
                  {modifyMode ?
                    <RowInput
                      value={inputBookPublisher}
                      onChange={(e) => {
                        setInputBookPublisher(e.target.value);
                      }}
                    />
                    :
                    lecture.textBook.publisher
                  }
                </RowContent>
              }
            </BodyRow>
            <BodyRow>
              <LeftPadding />
              <RowTitle>평가비율</RowTitle>
              {lecture.evaluationRatio === undefined ?
                ""
                :
                <RowContent>
                  <RatioChart>
                    <ChartColumn>
                      <ChartHeader>출석</ChartHeader>
                      <ChartValue>
                        {modifyMode ?
                          <ChartInput
                            value={inputRatAtt}
                            onChange={(e) => {
                              setInputRatAtt(e.target.value);
                            }}
                          />
                          :
                          `${lecture.evaluationRatio.attendance} %`
                        }
                      </ChartValue>
                    </ChartColumn>
                    <ChartColumn>
                      <ChartHeader>중간고사</ChartHeader>
                      <ChartValue>
                        {modifyMode ?
                          <ChartInput
                            value={inputRatMid}
                            onChange={(e) => {
                              setInputRatMid(e.target.value);
                            }}
                          />
                          :
                          `${lecture.evaluationRatio.midTermExam}  %`
                        }
                      </ChartValue>
                    </ChartColumn>
                    <ChartColumn>
                      <ChartHeader>기말고사</ChartHeader>
                      <ChartValue>
                        {modifyMode ?
                          <ChartInput
                            value={inputRatFin}
                            onChange={(e) => {
                              setInputRatFin(e.target.value);
                            }}
                          />
                          :
                          `${lecture.evaluationRatio.finalExam}  %`
                        }
                      </ChartValue>
                    </ChartColumn>
                    <ChartColumn>
                      <ChartHeader>과제</ChartHeader>
                      <ChartValue>
                        {modifyMode ?
                          <ChartInput
                            value={inputRatAss}
                            onChange={(e) => {
                              setInputRatAss(e.target.value);
                            }}
                          />
                          :
                          `${lecture.evaluationRatio.assignment}  %`
                        }
                      </ChartValue>
                    </ChartColumn>
                  </RatioChart>
                </RowContent>
              }
            </BodyRow>
          </SyllabusBody>
        }
        <br /><br /><br /><br /><br /><br />
      </ButtonWrap>
    </SyllabusWrap>
  )
}

export default FacultySyllabiManagePage;