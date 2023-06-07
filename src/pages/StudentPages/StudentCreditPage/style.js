import styled from "styled-components";

export const CreditPageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-Y: auto;
`

export const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  background-color: darkgray;
`

export const ProfileCard = styled.div`
  height: 100%;
  width: 60%;
  background-color: gray;
  margin-right: 1%;
`

export const CreditListWrap = styled.div`
  height: 100%;
  width: 30%;
  margin-left: 1%;
`

export const Middle = styled.div`
  width: 100%;
  min-height: 40%;
  display: flex;
  justify-content: center;
  background-color: gray;
`

export const CreditListPerSemestersVisualized = styled.div`
  height: 100%;
  width: 50%;
  margin-right: 1%;
`

export const CreditListPerSemesters = styled.div`
  height: 100%;
  width: 40%;
  margin-left: 1%;
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LectureCreditListWrap = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
`

export const LectureCreditList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  margin-bottom: 1%;
  border-bottom: 1px solid black;
`

export const LectureCreditListRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid var(--color-gr);
`

export const LectureCreditListRowContent = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
`

export const LectureCreditListLectureID = styled(LectureCreditListRowContent)`
  width: 20%;
`

export const LectureCreditListLectureTitle = styled(LectureCreditListRowContent)`
  width: 30%;
`

export const LectureCreditListLectureMajor = styled(LectureCreditListRowContent)`
  width: 15%;
`

export const LectureCreditListLectureType = styled(LectureCreditListRowContent)`
  width: 10%;
`

export const LectureCreditListLectureCredit = styled(LectureCreditListRowContent)`
  width: 5%;
`

export const LectureCreditListLectureGrade = styled(LectureCreditListRowContent)`
  width: 5%;
`

export const LectureCreditListSemester = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  height: 2rem;  
  font-weight: bold;
`

export const LectureCreditListHeader = styled(LectureCreditListRow)`
  font-weight: bold;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background-color: var(--color-gr);
`

export const LectureCreditListBody = styled.div`
`