import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@./App';
import { GlobalStyle } from '@style/GlobalStyle';
import { GlobalFonts } from './fonts';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RecoilRoot>
            <GlobalStyle/>
            <GlobalFonts/>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </>
);
