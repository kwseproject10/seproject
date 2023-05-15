import styled from "styled-components";

export const Header = styled.div`
    height: 60px;
    width: 100%;
    position: fixed;
    background-color: #eeeeee;
    z-index: 2;
`

export const Body = styled.div`
    padding-top: 60px;
    min-height: 600px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
`
export const FooterLine = styled.div`
    width: 500px;
    border-top: 1px #aaaaaa solid;
    margin-top: 15px;
    text-align: center;
    color: #aaaaaa;
`