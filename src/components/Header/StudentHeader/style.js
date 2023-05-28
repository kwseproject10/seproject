import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  height: 3.75rem;
  width: 100%;
  position: fixed;
  background-color: var(--color-dk);
  z-index: 2;
  color:white;
`

export const HeaderBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftContents = styled.div`
  display: flex;
  margin-left: 12.5rem;
`

export const LogoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`

export const UserName = styled.div`
  font-weight: bold;
  font-size: var(--font-size-sm);
  line-height: 2.125rem;
  margin-left: 3.75rem;
`

export const UserType = styled.div`
  font-size: var(--font-size-xs);
  line-height: 2.125rem;
  margin-left: 0.625rem;
  color: gray;
`

export const RightContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RightContents = styled.div`
  display: flex;
  margin-right: 12.5rem;
`

export const ButtonPartition = styled.div`
  border-right: 0.0625rem var(--color-dg) solid;
  height: 1.0625rem;
`