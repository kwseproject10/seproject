import styled from "styled-components"

export const CalendarWrap = styled.div`
  margin: 0.4rem;
  margin-left: 1rem;
  width: 95%;
  height: 100%;
`

export const CalendarHeader = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`

export const HeaderLeft = styled.div`
  cursor: pointer;
`

export const HeaderCenter = styled.div`
`

export const HeaderRight = styled.div`
  cursor: pointer;
`

export const CalendarDays = styled.div`
  border-top: solid 0.0625rem var(--color-gr);
  border-bottom: solid 0.0625rem var(--color-gr);
  height: 1.5rem;
  line-height:1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`

export const DaysCol = styled.div`
  text-align: center;
  width: 2.5rem;
  height: fit-content;
`

export const CalendarBody = styled.div`
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: var(--font-size-md);
  padding-bottom: 1rem;
  border-bottom: solid 0.0625rem var(--color-gr);
`

export const BodyRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Cell = styled.div`
  text-align: center;
  width: 2.5rem;
  ${(props)=>
    props.state === 'disabled' ?
      `color: var(--color-gr);`
    :
      props.state === 'selected' ?
        `color: var(--color-dk);`
      :
        props.state === 'not-valid' ?
          `color: white;`
        :
          `color: var(--color-dg);`
  }
  cursor: pointer;
`

export const CellText = styled.span`

`