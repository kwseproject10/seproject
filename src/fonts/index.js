import { createGlobalStyle } from "styled-components";
import NotoSansKRRegular from "./NotoSansKRRegular.otf";
import NotoSansKRLight from "./NotoSansKRLight.otf";
import NotoSansKRBold from "./NotoSansKRBold.otf";
import PlusJakartaSansRegular from "./PlusJakartaSansRegular.ttf";
import PlusJakartaSansBold from "./PlusJakartaSansSemiBold.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    src: url(${NotoSansKRBold}) format("otf");
    font-style: normal;
    font-wieght: bold;
  }

  @font-face {
    font-family: "Noto Sans KR";
    src: url(${NotoSansKRRegular}) format("otf");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "Noto Sans KR";
    src: url(${NotoSansKRLight}) format("otf");
    font-style: normal;
    font-wieght: light;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansRegular}) format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
    font-style: normal;
    font-weight: light;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansBold}) format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
    font-style: normal;
    font-weight: normal;
  }
`