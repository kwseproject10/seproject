import { TbEdit, TbSearch, TbTrash } from "react-icons/tb";
import styled from "styled-components";
export const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ListWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

export const ListTitleRow = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const KnobsWrap = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-nm);
  color:var(--color-nm);
  background-color:var(--color-gr);
  font-weight: bold;
`

export const KnobHeader = styled.div`

`

export const KnobBody = styled.div`

`

export const KnobRow = styled.div`

`

export const ListHeader = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-nm);
  color:var(--color-nm);
  background-color:var(--color-gr);
  font-weight: bold;
`

export const ListTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size:var(--font-size-lg);
`

export const ListBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid var(--color-nm);
  border-top: none;
  background-color:white;
`

export const ListRow = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gr);
`

export const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const PostTitle = styled(RowItem)`
  width: 40%;
  margin-left: 2rem;
`

export const PostDate = styled(RowItem)`
  width: 20%;
`

export const PostHit = styled(RowItem)`
  width: 7%;
`

export const PostButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin-left: 5%;
  margin-right: 7%;
`

export const ViewButtonWrap = styled(RowItem)`
`

export const ViewButton = styled(TbSearch)`
  cursor: pointer;
  color: var(--color-nm);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: var(--color-dk);
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const ModifyButtonWrap = styled(RowItem)`
`

export const ModifyButton = styled(TbEdit)`
  cursor: pointer;
  color: var(--color-nm);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: var(--color-dk);
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const DeleteButtonWrap = styled(RowItem)`
`

export const DeleteButton = styled(TbTrash)`
  cursor: pointer;
  color: var(--color-nm);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: var(--color-dk);
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const PostButtonWrap = styled.div`
`

export const PostButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  width: 8rem;
  height: 2.5rem;
  background-color: var(--color-nm);
  font-weight: bold;
  border: 1px solid var(--color-dg);
  color: white;
`