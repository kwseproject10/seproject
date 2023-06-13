import Size from "@style/Size.js";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationButtonStyle = styled.div`
  text-align: center;
  cursor: pointer;
  use-select: none;
  text-decoration: none;
  height: 100%;
  color: var(--color-dk);
  font-weight: bold;
  font-size: var(--font-size-sm);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Size('large')}{
    color:var(--color-gr);
    font-size: var(--font-size-md);
    height: 100%;
  }
  ${(props) => props.actived === props.index ?
    `
      background-color: var(--color-dk);
      color: white;
      cursor: default;
      height: 100%;
      ${Size('large')}{
        background-color: var(--color-nm);
      }
    `
    :
    `
    &:hover{
      color: black;
      border-bottom: 0.125rem var(--color-dk) solid;
      ${Size('large')}{
        color: var(--color-dg);
        border-bottom: none;
      }
      transform: translateY(0);
      transition: 0.3s;
    }
    `
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 3.75rem;
`

export const Line = styled.div`
  ${Size('large')}{
    border-bottom:1px solid var(--color-dg);
  }  
`