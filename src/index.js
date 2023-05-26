import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@./App';
import { GlobalStyle } from '@style/GlobalStyle';
import { GlobalFonts } from './fonts';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RecoilRoot>
            <GlobalStyle/>
            <GlobalFonts/>
            <App />
        </RecoilRoot>
    </>
);
