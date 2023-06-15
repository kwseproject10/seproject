import { Size } from '@style/Size.js';
import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0.4rem;
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
  border-bottom: 0.125rem var(--color-dk) solid;
  list-style: none;
  margin: 0;
  overflow-Y: auto;
`

export const ListRow = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-dg);
  border-bottom: 0.0625rem var(--color-dg) solid;
`

export const DefaultRow = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-sh);
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

export const Item = styled.div`
  font-size: var(--font-size-xs);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const NoticeTitle = styled(Item)`
  font-size: var(--font-size-sm);
  color: black;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const NoticeSubject = styled(Item)`
  font-size: var(--font-size-xs);
  margin-left: 0.5rem;
  ${Size('small')}{
    font-size:var(--font-size-xxs);
   }
`

export const LectureType = styled(Item)`

`

export const LectureProfessor = styled(Item)`

`

export const Right = styled(Item)`

`

export const ButtonRowsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height ease 0.3s;
  ${(props) => props.actived === props.index ?
    `
      height: 17.9375rem;
    `
  :
    `
      height: 0;
    `
  }
`

export const ButtonRow = styled.div`
  background-color: white;
  transition: height ease 0.3s;
`

export const Button = styled.div`
  height: 2.5rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-top: 1px solid var(--color-gr);
  &:hover{
    color: black;
  }
`

/*
export const ButtonRow = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
`

export const Button = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--font-size-sm);
  cursor: pointer;
  border: 1px solid var(--color-gr);
  row-gap: 0.125rem;
  ${(props) => `
  grid-row: ${props.row} / ${props.row + 1};
  grid-column: ${props.column} / ${props.columnend};
  `
  }
`
*/

//display: grid;
//grid-template-rows: repeat(2,1fr);
//grid-template-columns: repeat(12, fr);