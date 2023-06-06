import styled from "styled-components";

export const DetailPageWrap = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  width: 20%;
  height: 100%;
  line-height: 3.75rem;
  display: flex;
  color: white;
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
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const DetailPageNavigationButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const DetailPageNavigationButton = styled.div`
  height: 100%;
  width: 15%;
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
`

export const Hidden = styled.div`
  color:rgba(0,0,0,0);
  width: 20%;
`

export const DetailPageContents = styled.div`
  height: 90%;
`