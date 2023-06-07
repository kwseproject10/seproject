import CreditList from "@components/Lists/CreaditList";
import { useEffect } from "react";
import { useState } from "react";
import { Bottom, CreditListPerSemesters, CreditListPerSemestersVisualized, CreditListWrap, CreditPageWrap, LectureCreditList, LectureCreditListHeader, LectureCreditListLectureCredit, LectureCreditListLectureGrade, LectureCreditListLectureID, LectureCreditListLectureMajor, LectureCreditListLectureTitle, LectureCreditListLectureType, LectureCreditListRow, LectureCreditListSemester, LectureCreditListWrap, Middle, ProfileCard, Top } from "./style";

const StudentCreditPage = () => {
  const [lecturesEachSemester, setLectureEachSemeters] = useState({});
  const [creditEachSemesters, setCreditEachSemesters] = useState({});
  const [GPAEachSemesters, setGPAEachSemesters] = useState({});
  const [semesters, setSemesters] = useState([[2023, 1]]);
  
  const loadLectureEachSemesters = () => {
    setLectureEachSemeters({
      2023: {
        1: [
          {
            ID : "H020-4-8483-01",
            title : "머신러닝",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : ""
          },
          {
            ID : "H020-4-5861-01",
            title : "임베디드시스템S/W설계",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : ""
          },
          {
            ID : "H020-4-0846-01",
            title : "소프트웨어공학",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : ""
          },
          {
            ID : "H020-3-2004-01",
            title : "신호및시스템",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : ""
          },
          {
            ID : "H020-2-0453-01",
            title : "디지털논리회로1",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : ""
          },
        ]
      },
      2022: {
        2: [
          {
            ID : "H020-4-3680-01",
            title : "데이터베이스및데이터시각화",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-3-9615-01",
            title : "GPU컴퓨팅",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-3-8994-01",
            title : "소프트웨어프로젝트2",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-8992-01",
            title : "오픈소스소프트웨어설계및실습",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-4530-01",
            title : "어셈블리프로그램설계및실습",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-3703-01",
            title : "데이터구조설계",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : "A0"
          },
        ],
        1: [
          {
            ID : "H020-3-3704-02",
            title : "시스템프로그래밍실습",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 1,
            grade : "A0"
          },
          {
            ID : "H020-3-1654-01",
            title : "컴퓨터네트워크",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-3-0922-01",
            title : "시스템프로그래밍",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-8482-02",
            title : "객체지향프로그래밍실습",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 1,
            grade : "A0"
          },
          {
            ID : "H020-2-8481-02",
            title : "객체지향프로그래밍설계",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-0453-01",
            title : "디지털논리회로1",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-3-0622-02",
            title : "민사소송법",
            major : "법학부",
            type : "전필",
            credit : 3,
            grade : "A0"
          },
        ]
      },
      2021: {
        2: [
          {
            ID : "H020-2-4530-01",
            title : "어셈블리프로그램설계및실습",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-2-3703-02",
            title : "데이터구조설계",
            major : "컴퓨터정보공학부",
            type : "복필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "H020-1-2339-02",
            title : "고급C프로그래밍",
            major : "컴퓨터정보공학부",
            type : "복선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-3-3867-01",
            title : "헌법소송법",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-1893-01",
            title : "형법각론",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-0316-01",
            title : "국제법2",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
        ],
        1: [
          {
            ID : "F030-2-7697-01",
            title : "기본권론",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-4220-02",
            title : "형법총론2",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-1840-02",
            title : "행정법총론",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-1590-02",
            title : "채권총론",
            major : "법학부",
            type : "전필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-2-0315-01",
            title : "국제법1",
            major : "법학부",
            type : "전필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-3-5658-01",
            title : "뉴미디어와이미지의활용",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-1-8085-01",
            title : "논리적으로사고하기",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
        ],
      },
      2020: {
        2: [
          {
            ID : "F030-1-4219-02",
            title : "형법총론1",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-1-1857-03",
            title : "헌법2",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-1-0620-02",
            title : "민법총칙2",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F000-1-8610-03",
            title : "프로그래밍기초",
            major : "정책법학대학공통",
            type : "교필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F000-1-3095-02",
            title : "융합적사고와글쓰기",
            major : "정책법학대학공통",
            type : "교필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-2-8834-02",
            title : "법과권리",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-2-3029-01",
            title : "인터넷활용",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-1-8583-02",
            title : "글로벌시대의쟁점과현안",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-1-2984-01",
            title : "서비스러닝",
            major : "전체공통",
            type : "교선",
            credit : 1,
            grade : "A0"
          },
        ],
        1: [
          {
            ID : "F030-1-1856-02",
            title : "헌법1",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F030-1-0619-01",
            title : "민법총칙1",
            major : "법학부",
            type : "전선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F000-1-8297-03",
            title : "컴퓨팅사고",
            major : "정책법학대학공통",
            type : "교필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "F000-1-3362-05",
            title : "대학영어",
            major : "정책법학대학공통",
            type : "교필",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-3-6136-01",
            title : "경제신문읽기",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-3-1879-01",
            title : "현대사상의이해",
            major : "전체공통",
            type : "교선",
            credit : 3,
            grade : "A0"
          },
          {
            ID : "0000-1-8128-01",
            title : "광운인되기",
            major : "전체공통",
            type : "교선",
            credit : 1,
            grade : "A0"
          },
        ]
      }
    })
  }

  const loadSemsters = () => {
    setSemesters([
      [2023, 1],
      [2022, 2],
      [2022, 1],
      [2021, 2],
      [2021, 1],
      [2020, 2],
      [2020, 1]
    ]);
  };

  const loadCreaditEachSemesters = () => {
    setCreditEachSemesters({
      2023 : {
        1 : {
          major : 15,
          general : 0,
          etc : 0,
          total : 15
        }
      },
      2022 : {
        2 : {
          major : 18,
          general : 0,
          etc : 0,
          total : 18
        },
        1 : {
          major : 17,
          general : 0,
          etc : 0,
          total : 17
        }
      },
      2021 : {
        2 : {
          major : 18,
          general : 0,
          etc : 0,
          total : 18
        },
        1 : {
          major : 15,
          general : 6,
          etc : 0,
          total : 21
        }
      },
      2020 : {
        2 : {
          major : 9,
          general : 16,
          etc : 0,
          total : 25
        },
        1 : {
          major : 6,
          general : 13,
          etc : 0,
          total : 19
        }
      }
    })
  }

  const loadGPAEachSemesters = () => {
    setGPAEachSemesters({
      2023 : {
        1 : 5.0
      },
      2022 : {
        1 : 4.0,
        2 : 4.0
      },
      2021 : {
        1 : 4.0,
        2 : 4.0
      },
      2020 : {
        1 : 4.0,
        2 : 4.0
      }
    })
  }

  useEffect(loadLectureEachSemesters, []);
  useEffect(loadSemsters, []);
  useEffect(loadCreaditEachSemesters, []);
  useEffect(loadGPAEachSemesters, []);
  return (
    <CreditPageWrap>
      <Top>
        <ProfileCard>
          프로필<br />프로필<br />프로필<br />프로필<br />프로필<br />프로필<br />프로필<br />프로필<br />프로필<br />프로필
        </ProfileCard>
        <CreditListWrap>
          <CreditList />
        </CreditListWrap>
      </Top>

      <Middle>
        <CreditListPerSemestersVisualized>
          그래프
        </CreditListPerSemestersVisualized>
        <CreditListPerSemesters>
          {semesters !== undefined ?
              semesters.map((element, index) => {
                if(element === undefined) return "";
                if(element[0] === undefined) return "";
                if(element[1] === undefined) return "";
                const year = element[0];
                const semester = element[1];
                let credits, GPA;
                if(creditEachSemesters !== undefined){
                  credits = creditEachSemesters[year][semester];
                }else{
                  credits = {
                    major : 0,
                    general : 0,
                    etc : 0,
                    total : 0
                  };
                }
                if(GPAEachSemesters !== undefined){
                  GPA = GPAEachSemesters[year][semester];
                }else{
                  GPA = 0;
                }
                return (
                  <>
                    {year}학년도 {semester}학기<br/>
                    {credits.major} {credits.general} {credits.etc} {credits.total}<br/>
                    {GPA}<br/>
                  </>
                )
              })
            :
              ""
          }
        </CreditListPerSemesters>
      </Middle>

      <Bottom>
        <LectureCreditListWrap>
          {semesters.map((element, index) => {
            if(element === undefined) return "";
            if(element[0] === undefined) return "";
            if(element[1] === undefined) return "";
            const year = element[0];
            const semester = element[1];
            return(
              <LectureCreditList>
                <LectureCreditListSemester>
                  {year}학년도 {semester}학기
                </LectureCreditListSemester>
                <LectureCreditListHeader>
                  <LectureCreditListLectureID>
                    학정번호
                  </LectureCreditListLectureID>
                  <LectureCreditListLectureTitle>
                    강의명
                  </LectureCreditListLectureTitle>
                  <LectureCreditListLectureMajor>
                    개설학과
                  </LectureCreditListLectureMajor>
                  <LectureCreditListLectureType>
                    분류
                  </LectureCreditListLectureType>
                  <LectureCreditListLectureCredit>
                    학점
                  </LectureCreditListLectureCredit>
                  <LectureCreditListLectureGrade>
                    성적
                  </LectureCreditListLectureGrade>
                  <br/>
                </LectureCreditListHeader>
                {lecturesEachSemester !== undefined && lecturesEachSemester[year] !== undefined && lecturesEachSemester[year][semester] !== undefined ?
                lecturesEachSemester[year][semester].map((lecture,lectureIndexl)=>{
                  return(
                    <LectureCreditListRow>
                      <LectureCreditListLectureID>
                        {lecture.ID}
                      </LectureCreditListLectureID>
                      <LectureCreditListLectureTitle>
                        {lecture.title}
                      </LectureCreditListLectureTitle>
                      <LectureCreditListLectureMajor>
                        {lecture.major}
                      </LectureCreditListLectureMajor>
                      <LectureCreditListLectureType>
                        {lecture.type}
                      </LectureCreditListLectureType>
                      <LectureCreditListLectureCredit>
                        {lecture.credit}
                      </LectureCreditListLectureCredit>
                      <LectureCreditListLectureGrade>
                        {lecture.grade}
                      </LectureCreditListLectureGrade>
                      <br/>
                    </LectureCreditListRow>
                  )
                })
                :
                ""
              }
              </LectureCreditList>
            )
          })}
        </LectureCreditListWrap>
      </Bottom>
    </CreditPageWrap>
  )
}

export default StudentCreditPage;