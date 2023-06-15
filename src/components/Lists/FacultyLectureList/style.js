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
  list-style: none;
  margin: 0;
  overflow-Y: auto;
`

export const ListRow = styled.div`
  display: flex;
  height: 6rem;
  flex-direction: column;
  color: var(--color-dg);
  border-bottom: 0.0625rem var(--color-gr) solid;
  padding-bottom: 0.5rem;
`

export const DefaultRow = styled.div`
  height: 30%;
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