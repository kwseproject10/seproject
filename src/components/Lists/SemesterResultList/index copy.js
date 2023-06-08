import { ETCCredit, GPA, GeneralCredit, ListHeader, ListRow, ListWrap, MajorCredit, Semester, TotalCredit, TotalRow } from "./style";

const SemesterResultList = ({semesters, creditEachSemesters, GPAEachSemesters}) => {
  if(semesters === undefined || creditEachSemesters === undefined || GPAEachSemesters === undefined) return "";
  return (
    <ListWrap>
      <ListHeader>
        <Semester>학기</Semester>
        <MajorCredit>전공학점</MajorCredit>
        <GeneralCredit>교양학점</GeneralCredit>
        <ETCCredit>기타학점</ETCCredit>
        <TotalCredit>총학점</TotalCredit>
        <GPA>평량평균</GPA>
      </ListHeader>
      {semesters.map((element, index) => {
        if (element === undefined) return "";
        if (element[0] === undefined) return "";
        if (element[1] === undefined) return "";
        const year = element[0];
        const semester = element[1];
        let credits, GPA;
        if (creditEachSemesters !== undefined && creditEachSemesters[year] !== undefined && creditEachSemesters[year][semester] !== undefined) {
          credits = creditEachSemesters[year][semester];
        } else {
          credits = {
            major: 0,
            general: 0,
            etc: 0,
            total: 0
          };
        }
        if (GPAEachSemesters !== undefined && GPAEachSemesters[year] !== undefined && GPAEachSemesters[year][semester] !== undefined) {
          GPA = GPAEachSemesters[year][semester];
        } else {
          GPA = 0;
        }
        return (
          <ListRow>
            <Semester>{year}학년도 {semester}학기</Semester>
            <MajorCredit>{credits.major}</MajorCredit>
            <GeneralCredit>{credits.general}</GeneralCredit>
            <ETCCredit>{credits.etc}</ETCCredit>
            <TotalCredit>{credits.total}</TotalCredit>
            <GPA>{GPA}</GPA>
          </ListRow>
        )
      })}
    </ListWrap>
  )
}

export default SemesterResultList;