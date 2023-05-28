import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderButtonStyle = styled.div`
  font-weight: bold;
  font-size: 11px;
  margin-left: 20px;
  margin-right: 20px;
  cursor:pointer;
  color: gray;
  &:hover{
    color: white;
    transform: translateY(0px);
    transition: 0.3s;
  }
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
`