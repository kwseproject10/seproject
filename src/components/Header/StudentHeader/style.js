import styled from "styled-components";
import Size from "@style/Size.js";

export const HeaderWrap = styled.div`
  position: fixed;
  height: 3.75rem;
  width: 100%;
  position: fixed;
  background-color: var(--color-dk);
  z-index: 3;
  color:white;
  ${Size('large')}{
    margin-left: 13%;
    width: 87%;
    background-color: white;
    border-bottom: var(--color-dg) 0px solid;
    color: black;
  }
`

export const HeaderBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${Size('small')}{
    justify-content: center;
  }
`;

export const LeftContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftContents = styled.div`
  display: flex;
  margin-left: 2rem;
  ${Size('small')}{
    margin: 0;
  }
  ${Size('large')}{
    margin-left: -12.1875rem;
  }
`

export const LogoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  ${Size('large')}{
    margin-right: 1.25rem;
  }
`

export const UserName = styled.div`
  font-size: var(--font-size-nm);
  line-height: 2.125rem;
  margin-left: 3.75rem;
  display: none;
  ${Size('large')}{
    display: block;
  }
`

export const UserType = styled.div`
  font-size: var(--font-size-xs);
  line-height: 2.125rem;
  margin-left: 0.625rem;
  color: gray;
  display: none;
  ${Size('large')}{
    display: block;
  }
`

export const RightContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Size('small')}{
    display: none;
  }
  ${Size('large')}{
    margin-right: 1.25rem;
  }
`

export const RightContents = styled.div`
  display: flex;
  justify-content: right;
`

export const ButtonPartition = styled.div`
  border-right: 0.0625rem var(--color-dg) solid;
  height: 1.0625rem;
`