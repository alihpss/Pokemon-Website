import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        font-family: 'Sora', sans-serif;
        font-weight: 300;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
