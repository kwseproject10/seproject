import styled from "styled-components"

export const CalendarWrap = styled.div`
  margin: 0.4rem;
  margin-left: 6%;
  width: 87%;
  height: 100%;
  user-select: none;
`

export const CalendarHeader = styled.div`
  margin-top: 0.5rem;
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.25rem;
`

export const HeaderLeft = styled.div`
  margin-left: 1rem;
  cursor: pointer;
`

export const HeaderCenter = styled.div`
  line-height: 1.875rem;
`

export const HeaderRight = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`

export const CalendarContentsWrap = styled.div`
`

export const CalendarDays = styled.div`
  border-top: solid 0rem var(--color-gr);
  border-bottom: solid 0rem var(--color-gr);
  height: 1.5rem;
  line-height:1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
`

export const DaysCol = styled.div`
  text-align: center;
  width: 2rem;
  height: fit-content;
`

export const CalendarBody = styled.div`
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: var(--font-size-md);
  padding-bottom: 1rem;
  border-bottom: solid 0 var(--color-gr);
`

export const BodyRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Cell = styled.div`
  text-align: center;
  width: 2rem;
  height: 2rem;
  line-height: 1.9375rem;
  padding-left: 0.0625rem;
  cursor: pointer;
  ${(props)=>
    props.state === 'disabled' ?
      `color: var(--color-gr);`
    :
      props.state === 'selected' ?
        `color: black;`
      :
        props.state === 'not-valid' ?
          `color: white;`
        :
          `color: var(--color-dg);`
  }
  ${(props)=>
    props.isToday ?
    `
      background-color: var(--color-nm);
      opacity: 0.7;
      border-radius: 50%;
      color: white;
    `
      :
    ``
  }
`

export const CellText = styled.span`
  font-size: var(--font-size-sm);
`