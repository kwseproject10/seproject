import styled from "styled-components";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

export const NoticePageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListWrap = styled.div`
  width: 100%;
  height: 90%;
  background-color: gray;
  color: black;
`

export const ListHeader = styled.div`

`

export const HeaderLeft = styled.div`

`

export const HeaderCenter = styled.div`

`

export const HeaderRight = styled.div`

`

export const ListBody = styled.div`

`

export const ListRow = styled.div`

`

export const RowTitle = styled.div`

`

export const Left = styled.div`

`

export const Center = styled.div`

`

export const Right = styled.div`

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
  justify-content: space-between;
  color: var(--color-dg);
`

export const PageButton = styled.div`
  font-size:var(--font-size-lg);
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

export const RightButton = styled(TbArrowRight)`
  margin-top: 0.25rem;
`