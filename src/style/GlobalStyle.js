import { createGlobalStyle } from "styled-components";
import Size from "./Size";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: "Noto Sans KR";
    user-select: none;
  }
  html{
    ${Size("small")} {
      font-size: 12px;
    }
    ${Size("medium")} {
      font-size: 14px;
    }  
    ${Size("large")} {
      font-size: 16px;
    }
  }
  body{
    ${Size("small")} {
    }
    ${Size("medium")} {
    }  
    ${Size("large")} {
    }
    --font-size-xl: 1.5rem;
    --font-size-lg: 1.25rem;
    --font-size-md: 1rem;
    --font-size-sm: 0.875rem;
    --font-size-xs: 0.75rem;
    --font-size-xxs: 0.5rem;
    --color-dk: rgb(24,34,49);
    --color-nm: rgb(3,91,108);
    --color-sh: rgb(231,238,240);
    --color-gr: rgb(181,190,194);
    --color-dg: rgb(120, 120, 120);
  }
`;

/**
  --color-dk: rgb(58, 5, 31);
  --color-nm: rgb(139,11,2);
  --color-sh: rgb(230, 145, 187);
  --color-gr: rgb(200, 200, 200);
  --color-dg: rgb(120, 120, 120);

  ${Size("small")} {
    --font-size-lg: 2rem;
    --font-size-md: 1.5rem;
    --font-size-sm: 1rem;
  }
  ${Size("medium")} {
    --font-size-lg: 2.75rem;
    --font-size-md: 2rem;
    --font-size-sm: 1.25rem;
  }  
  ${Size("large")} {
    --font-size-lg: 1.25rem;
    --font-size-md: 1rem;
    --font-size-sm: 0.75rem;
  }
*/