import { createGlobalStyle } from "styled-components";
import NotoSansKRRegular from "./NotoSansKRRegular.ttf";
import NotoSansKRBold from "./NotoSansKRBold.ttf";
import PlusJakartaSansRegular from "./PlusJakartaSansRegular.ttf";
import PlusJakartaSansBold from "./PlusJakartaSansSemiBold.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    src: url(${NotoSansKRRegular}) format("truetype");
    unicode-range: U+AC00-D7A3;
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "Noto Sans KR";
    src: url(${NotoSansKRBold}) format("truetype");
    unicode-range: U+AC00-D7A3;
    font-style: normal;
    font-wieght: bold;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansRegular}) format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansBold}) format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
    font-style: normal;
    font-weight: bold;
  }
`