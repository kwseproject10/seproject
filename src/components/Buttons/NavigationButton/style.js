import { Link } from "react-router-dom";
import styled from "styled-components";

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
  ${(props) => props.actived === props.index ?
    `
      background-color: var(--color-dk);
      color: white;
      cursor: default;
      height: 3.75rem;
    `
    :
    `
    &:hover{
      color: black;
      border-bottom: 0.125rem black solid;
    }
    `
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 3.75rem;
`