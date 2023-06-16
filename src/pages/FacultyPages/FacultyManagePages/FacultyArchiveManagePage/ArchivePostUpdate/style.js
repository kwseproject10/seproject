import Size from "@style/Size";
import { TbFile } from "react-icons/tb";
import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 1%;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--color-nm);
`

export const PageHeader = styled.div`
  display: flex;
  margin-left: 2.5rem;
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

export const PostTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PostInput = styled.input`
  width: 90%;
  border: none;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-conten: center;
`

export const PostTextInput = styled.textarea`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 22rem;
	resize: none;
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
  margin-top: 1rem;
`


export const PostButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  color: white;
  font-weight: bold;
  border: none;
`

export const BackButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-gr);
  font-weight: bold;
  border: 1px solid var(--color-dg);
`