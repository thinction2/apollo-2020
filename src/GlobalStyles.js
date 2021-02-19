import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyled = createGlobalStyle`
${reset}
a { 
text-decoration: none
}
body{ box-sizing: border-box;
}
`;
