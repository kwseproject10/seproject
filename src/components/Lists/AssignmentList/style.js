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
  border-top: 2px black solid;
  list-style: none;
  margin: 0;
`

export const ListRow = styled.div`
  margin: 0.5rem;
  height: 2.3rem;
  display: flex;
  justify-content: space-between;
  color: rgb(120,120,120);
  border-bottom: 1px rgba(200,200,200) solid;
  &:hover{
    color: black;
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

export const DueDate = styled.div`
  margin-right: 10px;
  margin-top: 8px;
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  font-size: 13px;
  margin-top: -4px;
`

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
`

export const StartDate = styled.div`

`

export const EndDate = styled.div`

`