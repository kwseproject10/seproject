import styled from "styled-components";
import LoginBG from "@images/LoginBG.jpg"

export const LoginPageViwer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${LoginBG});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const LoginPageBG = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginInnerWrapper = styled.div`
    width: 25rem;
    display: flex;
    justify-content: center;
    align-item: center;
`

export const LoginInnerWrapper2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-item: center;
`

export const LoginPageInner = styled.div`
    background-color: rgba(255,255,255,0.85);
    width: 18.75rem;
    min-height: 18.75rem;
    padding: 2.1875rem;
    padding-top: 3.125rem;
    padding-left: 3.125rem;
    padding-right: 3.125rem;
    box-shadow: -0.3125rem; 1.25rem 0.625rem 0.1875rem rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    color: var(--color-dg);
    overflow: auto;
`;

export const LoginPageFooter = styled.div`
    margin-top: 1.875rem;
    text-align: center;
    width: 25rem;
    color: var(--color-gr);
    font-size: var(--font-size-sm);
    align-items: center;
`