import Size from "@style/Size.js";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AccordianWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height ease 0.3s;
  ${(props) => props.actived ?
    `
      height: ${props.numRows * 2 + 3.91}rem;
    `
  :
    `
      height: 3.75rem;
    `
  }
`

export const OpenButtonWrap = styled.div`
  min-height: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  color: var(--color-dk);
  ${(props) => props.actived >= props.index ?
    `
      background-color: var(--color-dk);
      color: white;
      ${Size('large')}{
        background-color: var(--color-nm);
      }
    `
    :
    `
    &:hover{
      color: black;
      transform: translateY(0);
      transition: 0.3s;
      ${Size('large')}{
        border-right: 0.125rem var(--color-dk) solid;
        color:var(--color-dg);
      }
    }
    `
  }
`

export const AccordianOpenButton = styled.div`
  text-align: center;
  font-weight: bold;
  ${Size('large')}{
    color: var(--color-gr);
  }
`

export const AccordianContents = styled.div`
  ${(props) => `height: ${props.numRows * 2}rem;`}
  background-color: white;
  ${(props) => props.actived ? `border: 1px solid black;` : ``}
  border-top: none;
  ${Size('large')}{
    background-color: rgba(0,0,0,0);
    border: none;
  }
`

export const LinkStyle = styled(Link)`
  height: 2rem;
  text-decoration: none;
`

export const AccordianContent = styled.div`
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color:var(--color-dg);
  font-weight: bold;
  font-size: var(--font-size-sm);
  ${(props) => props.actived === props.index ?
    `
      background-color: var(--color-dk);
      color: white;
      cursor: default;
      ${Size('large')}{
        background-color: var(--color-gr);
        color: black;
      }
    `
    :
    `
    &:hover{
      color: black;
      ${Size('large')}{
        border-right: 0.125rem var(--color-dk) solid;
        color:var(--color-dg);
      }
    }
    `
  }
`