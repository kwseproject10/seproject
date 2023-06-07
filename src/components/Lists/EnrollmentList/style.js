import styled from "styled-components"

export const ListWrap = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  margin-bottom: 1%;
  border-bottom: 1px solid black;
`

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid var(--color-gr);
`

export const ListRowContent = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
`

export const ListLectureID = styled(ListRowContent)`
  width: 20%;
`

export const ListLectureTitle = styled(ListRowContent)`
  width: 30%;
`

export const ListLectureMajor = styled(ListRowContent)`
  width: 15%;
`

export const ListLectureType = styled(ListRowContent)`
  width: 10%;
`

export const ListLectureCredit = styled(ListRowContent)`
  width: 5%;
`

export const ListLectureGrade = styled(ListRowContent)`
  width: 5%;
`

export const ListSemester = styled.div`
  text-align: left;
  display:flex;
  flex-direction:column;
  justify-content:center;
  height: 2rem;  
  font-weight: bold;
`

export const ListHeader = styled(ListRow)`
  font-weight: bold;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background-color: var(--color-gr);
`

export const ListBody = styled.div`
`