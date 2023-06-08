import styled from "styled-components";

export const SyllabusWrap = styled.div`
  
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
`

export const SyllabusTitle = styled.div`
  font-size:var(--font-size-lg);
  font-weight: bold;
`

export const SyllabusHeader = styled.div`
  width: 100%;
`

export const SyllabusBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`

export const BodyRow = styled.div`
  display: flex;
  min-height: 2.5rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gr);
`

export const RowTitle = styled.div`
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-sh);
`

export const RowContent = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`

export const ButtonWrap =styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const CloseButton =styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`