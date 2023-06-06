import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0.4rem;
`

export const ListTitle = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
`

export const TitleText = styled.div`
  font-weight: bold;
  color: black;
`

export const TitlePlusButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  list-style: none;
  margin: 0;
  width: 100%;
`

export const ListRow = styled.div`
  height: 2.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--color-dg);
  border-bottom: 0.0625rem var(--color-gr) solid;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`

export const Left = styled.div`
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  justify-content: center;
`

export const NoticeTitle = styled.div`
  ${(props)=>props.subjectName ? 
    `
      font-size: var(--font-size-xs);
    `
  :
    `
      font-size: var(--font-size-nm);
    `
  }
`

export const NoticeSubject = styled.div`
  font-size: var(--font-size-xs);
`

export const Right = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 2%;
  height: 100%;
  width: 15%;
  font-size: var(--font-size-xs);
`

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`