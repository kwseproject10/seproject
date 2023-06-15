import styled from "styled-components";
import { RenderAnimation } from "../../../../style/GlobalStyle";

export const SyllabusWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${RenderAnimation} 1s;
  margin-top: 1.5rem;
`

export const SyllabusTitle = styled.div`
  font-size:var(--font-size-lg);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SyllabusHeader = styled.div`
  width: 100%;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`

export const SyllabusBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid var(--color-nm);
  background-color: white;
`

export const LeftPadding = styled.div`
  width: 2.5rem;
  height: 100%;
  color: rgba(0,0,0,0);
  background-color: var(--color-sh);
`

export const BodyRow = styled.div`
  min-width: 80rem;
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--color-gr);
`

export const RowTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-nm);
  width: 15%;
  background-color: var(--color-sh);
`

export const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-right: 3%;
  margin-left: 2rem;
  min-height: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const RowInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2rem;
`

export const RowTextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2.5rem;
	resize: none;
`

export const ButtonWrap =styled.div`
  display: flex;
  flex-direction: column;
`

export const Buttons = styled.div`
  display: flex;
`

export const UpdateButtonWrap = styled.div`
  margin-right: 2rem;
`

export const UpdateButton =styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`

export const SubmitButtonWrap = styled.div`
  margin-right: 2rem;
`

export const SubmitButton =styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`

export const CancelButtonWrap = styled.div`
  margin-right: 2rem;
`

export const CancelButton = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-gr);
  font-weight: bold;
  border: 1px solid var(--color-dg);
`

export const RatioChart = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-nm);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ChartColumn = styled.div`
  display: flex;
  width: 25%;
  text-align: center;
  flex-direction: column;
`

export const ChartHeader = styled.div`
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid var(--color-gr);
  background-color:var(--color-sh);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ChartValue = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ChartInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 1.5rem;
  width: 5rem;
  text-align: center;
`