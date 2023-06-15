import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import styled from "styled-components";


export const ListWrap = styled.div`
  width: 100%;
  height: 90%;
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 1%;
`
export const ListWrapAlign = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.div`
  font-size:var(--font-size-xl);
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 2.2rem;
`


export const ListRow = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
  height: ${(props) => (100 / props.linePerPage)}%;
  border-bottom: 1px solid var(--color-gr);
  color:var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
  ${(props) => props.hidden ?
    `
      cursor : default;
    `
    :
    `
      cursor: pointer;
    `
  }
  ${(props) => props.isLast ?
    `
      border-bottom: none;
    `
    :
    ``
  }
`

export const ListHeader = styled(ListRow)`
  height: 9%;
  font-weight: bold;
  color:var(--color-nm);
  background-color: var(--color-gr);
  border: 1px solid var(--color-nm);
  border-bottom: none;
  cursor: default;
  &:hover{
    color:var(--color-nm);
  }
`

export const ListBody = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-nm);
  background-color: white;
`

export const RowTitle = styled.div`

`

export const PostInform = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
`

export const PostName = styled(PostInform)`
  width: 45%;
  margin-left: 3%;
  text-align: left;
`

export const Poster = styled(PostInform)`
  width: 15%;
`

export const PostDate = styled(PostInform)`
  width: 20%;
`

export const PostHit = styled(PostInform)`
  width: 15%;
`

export const HeaderPostName = styled(PostInform)`
  width: 45%;
  margin-left: 3%;
`

export const HeaderPoster = styled(Poster)`
`

export const HeaderPostDate = styled(PostDate)`
`

export const HeaderPostHit = styled(PostHit)`
`

export const PageSelectorWrap = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PageSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const PageButtonWrap = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-dg);
`

export const PageButton = styled.div`
  font-size:var(--font-size-lg);
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
  ${(props) => props.index === props.selectedPage ?
    `
        color: black;
        cursor: default;
      `
    :
    ``
  }
`

export const LeftButton = styled(MdArrowBackIos)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`


export const RightButton = styled(MdArrowForwardIos)`
  margin-top: 0.25rem;
  cursor: pointer;
  color: var(--color-dg);
  &:hover{
    color: black;
    transform: translateY(0);
    transition: 0.3s;
  }
`

export const SearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SearchBar = styled.div`
  height: 2.5rem;
  width: 35%;
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