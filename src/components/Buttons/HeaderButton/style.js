import { Link } from "react-router-dom";
import styled from "styled-components";
import Size from "@style/Size.js";

export const HeaderButtonStyle = styled.div`
  font-weight: bold;
  font-size: var(--font-size-xs);
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  cursor:pointer;
  color: gray;
  &:hover{
    color: white;
    transform: translateY(0);
    transition: 0.3s;
    ${Size('large')}{
      color:black;
    }
  }
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
`

export const AStyle = styled.a`
  text-decoration: none;
`