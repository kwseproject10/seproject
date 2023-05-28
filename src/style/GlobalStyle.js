import { createGlobalStyle } from "styled-components";
import Size from "./Size";

export const fontSize = (fontSize) => {
  if(fontSize === 'small'){
    return `
    ${Size("small")} {
      font-size:
    }
    ${Size("medium")} {
    }
  
    ${Size("large")} {
    }
    `
  }else if(fontSize === 'large'){

  }else if(fontSize === 'title'){

  }else{

  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: "Noto Sans KR", "Plus Jakarta Sans";
  }
  html{
    ${Size("small")} {
      font-size: 10px;
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
    --color-dk: rgb(58, 5, 31);
    --color-nm: rgb(139,11,2);
    --color-sh: rgb(230, 145, 187);
    --color-gr: rgb(200, 200, 200);
    --color-dg: rgb(120, 120, 120);
  }
`;

/*

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