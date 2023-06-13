import { Link } from "react-router-dom";
import styled from "styled-components";
import Size from "@style/Size.js";

export const AccordianWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-weight: bold;
  height: 7%;
  font-size: var(--font-size-sm);
  ${(props)=>props.actived? `height: 25%;` : `height: 7%;`}}
`

export const AccordianOpenButton = styled.div`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-dk);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover{
    color: black;
    border-bottom: 0.125rem var(--color-dk) solid;
    ${Size('large')}{
      border-bottom: none;
      border-right: 0.125rem var(--color-dk) solid;
      color:var(--color-dg);
    }
  }
  ${Size('large')}{
    color:var(--color-gr);
    font-size: var(--font-size-md);
  }
`;

export const AccordianContents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: height 0.35s ease;
  height: 100%;
  ${Size('large')}{
    background-color: rgba(0,0,0,0);
  }  
`

export const AccordianContent = styled.div`
  text-align: center;
  ${Size('large')}{
    margin-top: 3%;
    margin-bottom: 3%;
  }  
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color:var(--color-dg);
  height: 100%;
`

export const Line = styled.div`
  ${Size('large')}{
    border-bottom:1px solid var(--color-dg);
  }  
`