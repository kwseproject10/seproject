import { Link } from "react-router-dom";
import styled from "styled-components";
import Size from "@style/Size.js";

export const NavigationButtonStyle = styled.div`
  text-align: center;
  cursor: pointer;
  use-select: none;
  text-decoration: none;
  line-height: 3.75rem;
  height: 3.7rem;
  color: var(--color-dk);
  font-weight: bold;
  font-size: var(--font-size-sm);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  ${Size('large')}{
    color:var(--color-gr);
    font-size: var(--font-size-md);
  }
  ${(props) => props.actived === props.index ?
    `
      background-color: var(--color-dk);
      color: white;
      cursor: default;
      height: 3.75rem;
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
        border-bottom: none;
        border-right: 0.125rem var(--color-dk) solid;
        color:var(--color-dg);
      }
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