import styled from "styled-components";

export const TableWrap = styled.div`
  margin: 0.4rem;
  height: 100%;
`

export const TableHeader = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
`

export const HeaderLeft = styled.div`

`

export const HeaderRight = styled.div`

`

export const HeaderText = styled.div`
  font-weight: bold;
  color: black;
  line-height:1.85rem;
`

export const TableBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  padding: 0rem;
  color: var(--color-dg);
  width: 98%;
  height: 90%;
`

export const Table = styled.table`
  border: 0 var(--color-gr) solid;
  border-bottom: 0.125rem var(--color-dk) solid;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
`

export const Thead = styled.thead`
  font-size: var(--font-size-sm);
  color: black;
  height: 1.75rem;
`

export const Tbody = styled.tbody`
`

export const Tr = styled.tr`
`

export const Td = styled.td`
  border: 0.0625rem var(--color-sh) solid;
  border-right: none;
  border-bottom: none;
  text-align: center;
  font-size: var(--font-size-sm);
  &:nth-child(1){
    border-left:none;
    color: black;
    width: 4rem;
  }
`

export const Th = styled.th`
  font-weight: light;
  border: 0.0625rem var(--color-sh) solid;
  border-right: none;
  border-top: none;
  width: 5rem;
  &:nth-child(1){
    border-left:none;
    color: black;
    width: 4rem;
  }
`

export const Cell = styled.div`
  width: 100%;
  height: 100%;
  font-size: var(--font-size-xxs);
  background-color: var(--color-nm);
  color: var(--color-gr);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LectureTitle = styled.div`
  margin-top: 0.5rem;
`

export const LectureTP = styled.div`
  margin-bottom: 0.5rem;
`