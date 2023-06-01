import styled from "styled-components";
import Size from "@style/Size";

export const ListWrap = styled.div`
  margin: 0.4rem;
  height: 100%;
`

export const ListTitle = styled.div`
  margin: 1.5%;
  height: 2.5%;
`

export const TitleText = styled.div`
  font-weight: bold;
  color: black;
`

export const ListBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  height: 92.4%;
  list-style: none;
  margin: 0;
  overflow-Y: auto;
`

export const ListRow = styled.div`
  display: flex;
  height: 13.9%;
  flex-direction: column;
  justify-content: center;
  color: var(--color-dg);
  border-bottom: 0.0625rem black solid;
`

export const DefaultRow = styled.div`
  height: 25%;
  display: flex;
  justify-content: space-between;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`

export const Left = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
`

export const NoticeTitle = styled.div`
  font-size: var(--font-size-sm);
  margin-top: 0.5%;
  color: black;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const NoticeSubject = styled.div`
  font-size: var(--font-size-xs);
  margin-left: 1rem;
  margin-top: 0.6%;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const LectureType = styled.div`
  font-size: var(--font-size-xs);
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const LectureProfessor = styled.div`
  font-size: var(--font-size-xs);
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const Right = styled.div`
  font-size: var(--font-size-xs);
  height: 2.3rem;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const AttendanceChartRow = styled.div`
  height: 40%;
  width: 99%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  font-size: var(--font-size-xs);
  border: 1px solid var(--color-gr);
  color: black;
`

export const AttendanceChart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr 1fr;
`

export const AttendanceChartChild = styled.div`
  text-align: center;
  ${(props) => `
    grid-row: ${props.row} / ${props.row + 1};
    grid-column: ${props.column} / ${props.column + 1};
    color: ${props.color};
    ${props.color ? "font-weight: bold;" : ""}
  `
  }
`

export const DetailInformRow = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-xs);
`

export const DetailLeft = styled.div`
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`

export const DetailCenter = styled.div`
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`

export const DetailRight = styled.div`
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`