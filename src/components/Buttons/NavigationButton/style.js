import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationButtonStyle = styled.div`
  text-align: center;
  cursor: pointer;
  use-select: none;
  text-decoration: none;
  line-height: 60px;
  height: 58px;
  color: rgba(58,5,31);
  font-weight: bold;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  ${(props) => props.actived === props.index ?
    `
      background-color: rgba(58,5,31);
      color: white;
      cursor: default;
      height: 60px;
    `
    :
    `
    &:hover{
      color: rgba(0,0,0);
      border-bottom: 2px rgba(0,0,0) solid;
    }
    `
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  height: 60px;
`