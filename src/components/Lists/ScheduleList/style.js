import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 2%;
  margin-right: 3%;
  width: 95%;
  height: 96%;
`

export const ListTitle = styled.div`
  margin: 3%;
  width: 96%;
  height: 5%;
`

export const TitleText = styled.div`
  font-weight: bold;
  color: black;
`

export const ListBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  list-style: none;
  width: 100%;
  height: 89%;
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
`

export const NoticeTitle = styled.div`
  font-size: var(--font-size-sm);
`

export const NoticeSubject = styled.div`
  font-size: var(--font-size-xs);
`

export const Right = styled.div`
  font-size: var(--font-size-xs);
  height: 2.3rem;
  line-height: 1.8rem;
`