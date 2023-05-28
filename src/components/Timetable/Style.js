import styled from "styled-components";

export const TableWrap = styled.div`
  margin: 0.4rem;
  height: 100%;
`

export const TableHeader = styled.div`
  margin: 0.5rem;
`

export const HeaderText = styled.div`
  font-weight: bold;
  color: black;
`

export const TableBox = styled.div`
  border-top: 0.125rem black solid;
  padding: 0.5rem;
  color: var(--color-dg);
  width: 98%;
  height: 87%;
`

export const Table = styled.table`
  border: 0.0625rem var(--color-gr) solid;
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
  text-align: center;
  font-size: var(--font-size-sm);
  &:nth-child(1){
    border-left:none;
    color: black;
    width: 4rem;
  }
`

export const Th = styled.th`
  font-weight: normal;
  border: 0.0625rem var(--color-gr) solid;
  &:nth-child(1){
  }
`