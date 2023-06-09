import Size from "@style/Size";
import { TbFile } from "react-icons/tb";
import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${Size('large')}{
    width: 80%;
  }
`

export const PostWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--color-nm);
`

export const PageHeader = styled.div`
  display: flex;
  margin-left: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  justify-content:space-between;
  width: 100%;
  height: 2.5rem;
  font-weight: bold;
  font-size:var(--font-size-lg);
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

export const LeftPadding = styled.div`
  width: 2.5rem;
  height: 100%;
  color: rgba(0,0,0,0);
`

export const HeaderRow = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-gr);
`

export const NonSubmit = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const PostTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-nm);
  font-weight: bold;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-nm);
`

export const PostInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PostBody = styled.div`
`

export const SubmitBody = styled.div`

`

export const SubmitInform = styled.div`

`

export const PostFileWrap = styled.div`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-gr);
`

export const PostFileRow = styled.div`
  width: 100%;
  color: var(--color-dg);
  cursor: pointer;
  display: flex;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const PostFileDownload = styled.div`
  display: flex;
`

export const PostFileIconWrap = styled.div`
  margin-top: 0.3%;
  width: 1.2rem;
  height: 1.2rem;
`

export const PostFileIcon = styled(TbFile)`
`

export const PostBodyText = styled.pre`
  padding: 2.5rem;
  white-space: pre-wrap;
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`

export const SubmitButton = styled.input`
  cursor: pointer;
  width: 8rem;
  margin-left: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  font-weight: bold;
  color: white;
  border: 1px solid var(--color-dg);
`

export const UpdateButton = styled.button`
  cursor: pointer;
  width: 8rem;
  margin-left: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  font-weight: bold;
  color: white;
  border: 1px solid var(--color-dg);
`

export const DeleteButton = styled.button`
  cursor: pointer;
  width: 8rem;
  margin-left: 2.5rem;
  height: 2.5rem;
  background-color: rgb(139,11,2);
  font-weight: bold;
  color: white;
  border: 1px solid var(--color-dg);
`

export const BackButton = styled.button`
  cursor: pointer;
  width: 8rem;
  margin-left: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-gr);
  font-weight: bold;
  border: 1px solid var(--color-dg);
`

export const PostInput = styled.input`
  width: 90%;
  border: none;
  height: 2rem;
`

export const PostTextInput = styled.textarea`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 22rem;
	resize: none;
`