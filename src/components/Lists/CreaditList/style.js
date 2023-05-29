import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0.4rem;
  width: 98%;
  height: 100%;
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
  padding: 0.5rem;
  color: var(--color-dg);
  width: 95%;
  height: 75%;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
`

export const Thead = styled.thead`
  font-size: var(--font-size-sm);
  color: black;
`

export const Tbody = styled.tbody`
`

export const Tr = styled.tr`
`

export const Td = styled.td`
  border: 0.0625rem var(--color-gr) solid;
  border-right: none;
  text-align: center;
  font-size: var(--font-size-sm);
  &:nth-child(1){
    border-left:none;
    color: black;
  }
`

export const Th = styled.th`
  font-weight: bold;
  border: 0.0625rem var(--color-gr) solid;
  border-right: none;
  &:nth-child(1){
    border-left:none;
  }
`



export const ListRow = styled.div`
  margin: 0.5rem;
  height: 2.3rem;
  display: flex;
  justify-content: space-between;
  color: var(--color-dg);
  border-bottom: 0.0625rem var(--color-gr) solid;
  &:hover{
    color: var(--color-gr);
    transform: translateY(0);
    transition: 0.3s;
  }
  cursor: pointer;
`