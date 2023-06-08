import { useState } from "react";
import { ETCCredit, GPA, GeneralCredit, ListBody, ListHeader, ListRow, ListWrap, MajorCredit, Semester, TotalCredit, TotalRow } from "./style";
import { useEffect } from "react";

const RenderRow = ({ semesters, creditEachSemesters }) => {
  let Rows = [];
  for (let i = 0; i < semesters.length; i++) {
    if (semesters[i] === undefined || semesters[i][0] === undefined || semesters[i][1] === undefined) {
      Rows.push(<ListRow></ListRow>);
    } else {
      const year = semesters[i][0];
      const semester = semesters[i][1];
      if (creditEachSemesters[year] === undefined || creditEachSemesters[year][semester] === undefined) {
        Rows.push(<ListRow></ListRow>);
      } else {
        const credits = creditEachSemesters[year][semester];
        Rows.push(
          <ListRow>
            <Semester>{year}학년도 {semester}학기</Semester>
            <MajorCredit>{credits.major}</MajorCredit>
            <GeneralCredit>{credits.general}</GeneralCredit>
            <ETCCredit>{credits.etc}</ETCCredit>
            <TotalCredit>{credits.total}</TotalCredit>
            <GPA>{credits.GPA !== -1 ? credits.GPA.toFixed(2) : ""}</GPA>
          </ListRow>
        );
      }
    }
  }
  return (
    <ListBody>
      {Rows.map((e) => { return e })}
    </ListBody>
  )
}

const SemesterResultList = ({ semesters, creditEachSemesters }) => {
  const [totalCredit, setTotalCredit] = useState({
    major: 0,
    general: 0,
    etc: 0,
    total: 0,
    GPA: 0
  })
  const calculTotals = () => {
    let major = 0;
    let general = 0;
    let etc = 0;
    let total = 0;
    let GPA = 0;
    let semesterCNTforAVG = 0;
    if(semesters === undefined || creditEachSemesters === undefined){
      return;
    }
    for (let i = 0; i < semesters.length; i++) {
      const year = semesters[i][0];
      const semester = semesters[i][1];
      if (creditEachSemesters[year] === undefined || creditEachSemesters[year][semester] === undefined) {

      } else {
        const credits = creditEachSemesters[year][semester];
        major += credits.major;
        general += credits.general;
        etc += credits.etc;
        total += credits.total;
        if (credits.GPA !== -1) {
          GPA += credits.GPA;
          semesterCNTforAVG += 1;
        }
      }
    }
    if (semesterCNTforAVG !== 0) {
      GPA /= semesterCNTforAVG;
    }
    setTotalCredit({
      major: major,
      general: general,
      etc: etc,
      total: total,
      GPA: GPA
    })
  }
  useEffect(calculTotals, [creditEachSemesters, semesters]);
  return (
    semesters === undefined || creditEachSemesters === undefined ?
      ``
      :

      <ListWrap>
        <ListHeader>
          <Semester>학기</Semester>
          <MajorCredit>전공학점</MajorCredit>
          <GeneralCredit>교양학점</GeneralCredit>
          <ETCCredit>기타학점</ETCCredit>
          <TotalCredit>총학점</TotalCredit>
          <GPA>평점</GPA>
        </ListHeader>
        <RenderRow
          semesters={semesters}
          creditEachSemesters={creditEachSemesters}
        />
        <TotalRow>
          <Semester>총</Semester>
          <MajorCredit>{totalCredit.major}</MajorCredit>
          <GeneralCredit>{totalCredit.general}</GeneralCredit>
          <ETCCredit>{totalCredit.etc}</ETCCredit>
          <TotalCredit>{totalCredit.total}</TotalCredit>
          <GPA>{totalCredit.GPA.toFixed(2)}</GPA>
        </TotalRow>
      </ListWrap>
  )
}

export default SemesterResultList;