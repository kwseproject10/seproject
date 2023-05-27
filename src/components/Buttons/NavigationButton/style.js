import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationButtonStyle = styled.div`
    height: 30px;
    text-align: center;
    background-color:#aaaaaa;
    cursor: pointer;
    use-select: none;
    text-decoration: none;
    line-height:30px;
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
    height: 30px;
    margin-top: 15px;
`