// CSS in JS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: black;
    };

    body, input, button {
        font-family: 'Poppins';
    };

    button {
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(1.2);
            transition: filter 0.3s;
        }
    };



`