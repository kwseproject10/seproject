import { List, ListHeader, ListLectureCredit, ListLectureGrade, ListLectureID, ListLectureMajor, ListLectureTitle, ListLectureType, ListRow, ListSemester, ListWrap } from "./style";

const EnrollmentList = ({semesters, lecturesEachSemester}) => {
  if(semesters === undefined || lecturesEachSemester === undefined) return "";
  return(
    <ListWrap>
    {semesters.map((element, index) => {
      if(element === undefined) return "";
      if(element[0] === undefined) return "";
      if(element[1] === undefined) return "";
      const year = element[0];
      const semester = element[1];
      return(
        <List>
          <ListSemester>
            {year}학년도 {semester}학기
          </ListSemester>
          <ListHeader>
            <ListLectureID>
              학정번호
            </ListLectureID>
            <ListLectureTitle>
              강의명
            </ListLectureTitle>
            <ListLectureMajor>
              개설학과
            </ListLectureMajor>
            <ListLectureType>
              분류
            </ListLectureType>
            <ListLectureCredit>
              학점
            </ListLectureCredit>
            <ListLectureGrade>
              성적
            </ListLectureGrade>
            <br/>
          </ListHeader>
          {lecturesEachSemester !== undefined && lecturesEachSemester[year] !== undefined && lecturesEachSemester[year][semester] !== undefined ?
          lecturesEachSemester[year][semester].map((lecture,lectureIndexl)=>{
            return(
              <ListRow>
                <ListLectureID>
                  {lecture.ID}
                </ListLectureID>
                <ListLectureTitle>
                  {lecture.title}
                </ListLectureTitle>
                <ListLectureMajor>
                  {lecture.major}
                </ListLectureMajor>
                <ListLectureType>
                  {lecture.type}
                </ListLectureType>
                <ListLectureCredit>
                  {lecture.credit}
                </ListLectureCredit>
                <ListLectureGrade>
                  {lecture.grade}
                </ListLectureGrade>
                <br/>
              </ListRow>
            )
          })
          :
          ""
        }
        </List>
      )
    })}
  </ListWrap>
  )
}

export default EnrollmentList;