import styled from "styled-components";

export const ListWrap = styled.div`
  height: 100%;
  width: 40%;
  margin-left: 1%;
`

export const ListRow = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gr);
`

export const ListHeader = styled(ListRow)`
  font-weight: bold;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: var(--color-gr);
`

export const ListBody = styled.div`
  width: 100%;
`

export const ListRowContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
`

export const Semester = styled(ListRowContent)`
  width: 30%;
`

export const MajorCredit = styled(ListRowContent)`
  width: 10%;
`

export const GeneralCredit = styled(ListRowContent)`
  width: 10%;
`

export const ETCCredit = styled(ListRowContent)`
  width: 10%;
`

export const TotalCredit = styled(ListRowContent)`
  width: 10%;
`

export const GPA = styled(ListRowContent)`
  width: 15%;
`

export const TotalRow = styled(ListRow)`
  font-weight: bold;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: var(--color-gr);
`