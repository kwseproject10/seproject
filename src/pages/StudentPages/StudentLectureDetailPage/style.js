import Size from "@style/Size";
import styled from "styled-components";
import { RenderAnimation } from './../../../style/GlobalStyle';

export const DetailPageWrap = styled.div`
  min-height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${RenderAnimation} 1s;
`

export const DetailPageHeader = styled.div`
  height: 3.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color:var(--color-nm); 
  color:var(--color-gr);
`

export const DetailPageLectureWrap = styled.div`
  height: 100%;
  line-height: 3.75rem;
  display: flex;
  color: white;
  width: 40%;
`

export const DetailPageLectureName = styled.div`
  height: 100%;
  margin-left: 6%;
`
export const DetailPageLectureNum = styled.div`
  height: 100%;
  margin-left: 3%;
  font-size: var(--font-size-sm);
`

export const DetailPageNavigation = styled.div`
  height: 100%;
  ${Size('large')}{
    width: 50%;
    display: flex;
    justify-content: center;
  }
`

export const DetailPageNavigationButtonWrap = styled.div`
  display: flex;
  ${Size('large')}{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

export const DetailPageNavigationButton = styled.div`
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 3.75rem;
  text-align: center;
  cursor: pointer;
  ${(props)=>props.index === props.navigationIndex ?
  `
    background-color: var(--color-sh);
    cursor: default;
    color: var(--color-dk);
  `
  :
  `
    &:hover{
      color:var(--color-dg);
    }
  `
  }

  
  ${Size('large')}{
    width: 20%;
  }
`

export const Hidden = styled.div`
  color:rgba(0,0,0,0);
  width: 20%;
`

export const DetailPageContents = styled.div`
  height: 90%;
`