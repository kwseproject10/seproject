import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0.4rem;
  width: 100%;
  height: 100%;
`

export const ListTitle = styled.div`
  margin: 0.5rem;
  height: 10%;
`

export const TitleText = styled.div`
  font-weight: bold;
  color: black;
`

export const ListBox = styled.div`
  border-top: 0.125rem var(--color-dk) solid;
  list-style: none;
  height: 65%;
  margin: 0;
`

export const AttendanceChart = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 0.125rem;
  grid-template-rows: repeat(${(props)=>`${props.rows + 1}`}, 1fr);
  grid-template-columns: repeat(16, 1fr);
`

export const AttendanceChartChild = styled.div`
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-dg);
  border-bottom: 1px solid var(--color-gr);
  display:flex;
  flex-direction:column;
  justify-content:center;
  width: 100%;
  height: 100%;
  ${(props) => `
    grid-row: ${props.row} / ${props.row + 1};
    grid-column: ${props.column} / ${props.column + 1};
    ${props.value === 1 ?
      `
        color: green;
      `
      :
        (props.value === 0 ?
          `
            color: red;
          `
          :
          (props.value === 0.6 ?
            `
              color: orange;
            `
            :
            `
              color: black;
            `))
      }
  `
  }
`