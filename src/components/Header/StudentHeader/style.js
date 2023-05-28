import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: rgba(58,5,31);
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
  margin-left: 200px;
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
  font-size: 14px;
  line-height: 34px;
  margin-left: 60px;
`

export const UserType = styled.div`
  font-size: 11px;
  line-height: 34px;
  margin-left: 10px;
  color: gray;
`

export const RightContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RightContents = styled.div`
  display: flex;
  margin-right: 200px;
`

export const ButtonPartition = styled.div`
  border-right: 1px rgba(150,150,150,1) solid;
  height: 17px;
`