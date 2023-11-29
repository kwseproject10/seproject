import CreditChart from "@components/Chart/CreditBarChart";
import EnrollmentList from "@components/Lists/EnrollmentList";
import SemesterResultList from "@components/Lists/SemesterResultList";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userIDState } from "../../../Atom";
import { Bottom, CreditListPerSemestersVisualized, CreditPageWrap, Middle, Title, TitleRow } from "./style";

const StudentCreditPage = () => {
  const [lecturesEachSemester, setLectureEachSemeters] = useState({});
  const [creditEachSemesters, setCreditEachSemesters] = useState({});
  const [semesters, setSemesters] = useState([]);
  const userID = useRecoilValue(userIDState);

  //load lectures
  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/wholelecture?userID=${userID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : {
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
        }
      }
      if (res.data.result === "false") {
        return
      } else {
        setLectureEachSemeters(res.data);
      }
    }

    fetch()
  }, [userID])

  //load semesters
  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/semesters?userID=${userID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : [
          [
              2023,
              1
          ],
          [
              2022,
              2
          ],
          [
              2022,
              1
          ],
          [
              2021,
              2
          ],
          [
              2021,
              1
          ],
          [
              2020,
              2
          ],
          [
              2020,
              1
          ]
      ]
      }
      if (res.data.result === "false") {
        return
      } else {
        setSemesters(res.data);
      }
    }

    fetch()
  }, [userID])

  //load credits
  useEffect(() => {
    const fetch = async () => {
      // const route = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_HOST_PORT}/credit?userID=${userID}`;
      // const res = await axios.get(
      //   route
      // );
      const res = {
        data : {
          "userCredit" : {
            "2023": {
              "1": {
                "major": 15,
                "general": 0,
                "etc": 0,
                "total": 15,
                "GPA": -1
              }
            },
            "2022": {
              "2": {
                "major": 18,
                "general": 0,
                "etc": 0,
                "total": 18,
                "GPA": 4.1
              },
              "1": {
                "major": 17,
                "general": 0,
                "etc": 0,
                "total": 17,
                "GPA": 4.0
              }
            },
            "2021": {
              "2": {
                "major": 18,
                "general": 0,
                "etc": 0,
                "total": 18,
                "GPA": 4.0
              },
              "1": {
                "major": 15,
                "general": 6,
                "etc": 0,
                "total": 21,
                "GPA": 4.0
              }
            },
            "2020": {
              "2": {
                "major": 9,
                "general": 16,
                "etc": 0,
                "total": 25,
                "GPA": 4.0
              },
              "1": {
                "major": 6,
                "general": 13,
                "etc": 0,
                "total": 19,
                "GPA": 4.0
              }
            }
          },
          "creditForGrad" : {
              "major" : 39,
              "general" : 40,
              "etc" : 0,
              "total" : 130
          }
        }
      }
      if (res.data.result === "false") {
        return
      } else {
        setCreditEachSemesters(res.data.userCredit);
      }
    }

    fetch()
  }, [userID])

  return (
    <CreditPageWrap>
      <TitleRow>
        <Title>학기별 성적 현황</Title>
      </TitleRow>
      <Middle>
        <SemesterResultList
          semesters={semesters}
          creditEachSemesters={creditEachSemesters}
        />
        <CreditListPerSemestersVisualized>
          <CreditChart
            semesters={semesters}
            creditEachSemesters={creditEachSemesters}
          />
        </CreditListPerSemestersVisualized>
      </Middle>

      <TitleRow>
        <Title>수강 강의 목록</Title>
      </TitleRow>
      <Bottom>
        <EnrollmentList
          semesters={semesters}
          lecturesEachSemester={lecturesEachSemester}
        />
      </Bottom>
    </CreditPageWrap>
  )
}

export default StudentCreditPage;