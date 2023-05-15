import { createGlobalStyle} from "styled-components";
import Size from "./Size";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
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