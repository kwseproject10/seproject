import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0.4rem;
`

export const ListTitle = styled.div`
  margin: 0.5rem;
`

export const TitleText = styled.div`
  font-weight: bold;
  color: black;
`

export const ListBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  list-style: none;
  margin: 0;
`

export const ListRow = styled.div`
  margin: 0.5rem;
  height: 2.3rem;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
`

export const NoticeTitle = styled.div`
  font-size: var(--font-size-sm);
`

export const NoticeSubject = styled.div`
  font-size: var(--font-size-xs);
`

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  font-size: var(--font-size-xs);
  line-height: 1.5rem;
`

export const Right = styled.div`
  font-size: var(--font-size-xs);
  height: 2.3rem;
  line-height: 1.8rem;
  width: 30%;
`