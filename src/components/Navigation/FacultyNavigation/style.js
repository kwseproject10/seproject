import Size from "@style/Size.js";
import styled from "styled-components";

export const NavigationWrap = styled.div`
  position: fixed;
  top: 3.75rem;
  height: 3.75rem;
  width: 100%;
  background-color: white;
  z-index: 2;
  border-top: 0.0625rem gray solid;
  border-bottom: 0.125rem var(--color-dk) solid;
  ${Size('large')}{
    left: 0rem;
    top: 0rem;
    height: 100%;
    width: 13%;
    display: flex;
    flex-direction: column;
    border: none;
  }
`

export const NavigationBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${Size('large')}{
    flex-direction: column;
    background-color:var(--color-dk);
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  ${Size('large')}{
    margin-top: 3.75rem;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`