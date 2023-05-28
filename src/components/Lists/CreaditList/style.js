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
  border-top: 2px black solid;
  padding: 0.5rem;
  color: rgb(120,120,120);
  width: 95%;
  height: 75%;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
`

export const Thead = styled.thead`
  color: black;
`

export const Tbody = styled.tbody`
`

export const Tr = styled.tr`
`

export const Td = styled.td`
  border: 1px rgba(200,200,200) solid;
  border-right: none;
  text-align: center;
  &:nth-child(1){
    border-left:none;
    color: black;
  }
`

export const Th = styled.th`
  font-weight: normal;
  border: 1px rgba(200,200,200) solid;
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
  color: rgb(120,120,120);
  border-bottom: 1px rgba(200,200,200) solid;
  &:hover{
    color: rgba(200,200,200);
    transform: translateY(0px);
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
  font-size: 14px;
`

export const NoticeSubject = styled.div`
  font-size: 11px;
`

export const Right = styled.div`
  font-size: 14px;
  height: 2.3rem;
  line-height: 1.8rem;
`