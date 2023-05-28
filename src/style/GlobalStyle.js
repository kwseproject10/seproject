import { createGlobalStyle } from "styled-components";
import Size from "./Size";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        font-family: "Noto Sans KR", "Plus Jakarta Sans";
    }
    body{
        ${Size("small")} {
        }
      
        ${Size("medium")} {
        }
      
        ${Size("large")} {
        }
    }
`;