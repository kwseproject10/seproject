import Size from "@style/Size";
import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
`

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${Size('large')}{
    width: 60%;
  }
`

export const PageHeader = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
  height: 2.5rem;
  font-weight: bold;
  font-size:var(--font-size-lg);
  border-bottom: 2px solid black;
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  background-color: white;
`

export const PostTitle = styled.div`
  font-size:var(--font-size-lg);
  font-weight: bold;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 0.5rem;
`

export const InformWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
`

export const PostInform = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`
export const InformChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Poster = styled(InformChild)`
`

export const PostDate = styled(InformChild)`
`

export const PostHit = styled(InformChild)`
`

export const PostBody = styled.div`
  background-color: white;
  border-bottom: 2px solid black;
  padding: 1.5rem;
`

export const PostFileRow = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-gr);
`

export const PostFileDownload = styled.div`
  margin-bottom: 0.5rem;
`

export const PostBodyText = styled.pre`
  margin-top: 0.5rem;
  white-space: pre-wrap;
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 1rem;
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