import Size from "@style/Size";
import { TbArrowLeft, TbArrowRight, TbCirclePlus, TbReportSearch, TbSearch, TbTrash } from "react-icons/tb";
import styled from "styled-components";

export const LectureManagePageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2%;
  flex-direction: column;
  ${Size('large')}{
    flex-direction: row;
  }
`

export const ListTitle = styled.div`
  width: 100%;
  height: 2.5rem;
  font-weight: bold;
  text-align: center;
`

export const MyLectureListWrap = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction:column;
  ${Size('large')}{
    width: 45%;
    margin-left: 2%;
    margin-right: 1%;
  }
`

export const MyLectureList = styled.div`
  width: 100%;
  border: 1px solid var(--color-gr);
  border-bottom: none;
  background-color: white;
`

export const WholeLectureListWrap = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction:column;
  ${Size('large')}{
    width: 45%;
    margin-right: 2%;
    margin-left: 1%;
  }
`

export const WholeLectureList = styled.div`
  width: 100%;
  border: 1px solid var(--color-gr);
  border-bottom: none;
  background-color: white;
`

export const ListWrap = styled.div`
  width: 100%;
  height: 100%;
`

export const ListRow = styled.div`
  height: 3.5rem;
  width: 100%;
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gr);
  font-size:var(--font-size-xs);
`

export const ListHeader = styled(ListRow)`
  font-weight: bold;
  height: 2.5rem;
  border-bottom: 1px solid var(--color-sh);
  background-color: var(--color-gr);
`

export const ListBody = styled.div`

`

export const ListRowContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LectureID = styled(ListRowContent)`
  width: 13%;
`

export const LectureTitle = styled(ListRowContent)`
  width: 22%;
`

export const LectureMajor = styled(ListRowContent)`
  width: 13%;
`

export const LectureType = styled(ListRowContent)`
  width: 4%;
`

export const LectureCredit = styled(ListRowContent)`
  width: 4%;
`

export const LectureNumOfTime = styled(ListRowContent)`
  width: 4%;
`

export const LectureProfessor = styled(ListRowContent)`
  width: 6%;
`

export const LectureTimePlace = styled(ListRowContent)`
  width: 10%;
`

export const ButtonWrap = styled(ListRowContent)`
  width: 7%;
  align-items: center;
`

export const SyllabusOpenWrap = styled(ListRowContent)`
  width: 8%;
  align-items: center;
`

export const SyllabusOpen = styled(TbReportSearch)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const DeleteButton = styled(TbTrash)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const AddButton = styled(TbCirclePlus)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const PageSelectorWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const PageSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 2.5rem;
`

export const PageButtonWrap = styled.div`
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-dg);
`

export const PageButton = styled.div`
  width: 6%;
  font-size:var(--font-size-nm);
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  ${(props)=>props.index === props.selectedPage ?
      `
        color: black;
        cursor: default;
      `
    :
      ``
  }
`

export const LeftButton = styled(TbArrowLeft)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const RightButton = styled(TbArrowRight)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const LectureSearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LectureSearchBar = styled.div`
  height: 2.5rem;
  width: 50%;
  margin-right: 7%;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-gr);
  border-radius: 0.25rem;
  background-color: white;
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  margin-left: 3px;
`

export const SearchIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 3%;
`
export const SearchIcon = styled(TbSearch)`
  cursor: pointer;
  color: var(--color-dg);
  width: 1.5rem;
  height: 1.5rem;
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const DropDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
`