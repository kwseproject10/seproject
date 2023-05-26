import { createGlobalStyle } from "styled-components";
import NotoSansKRRegular from "../fonts/NotoSansKRRegular.ttf";
import PlusJakartaSansRegular from "../fonts/PlusJakartaSansRegular.ttf";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        src: url(${NotoSansKRRegular}) format("truetype");
        unicode-range: U+AC00-D7A3;
        font-style: normal;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansRegular}) format("truetype");
        unicode-range: U+0041-005A, U+0061-007A;
        font-style: normal;
    }
`