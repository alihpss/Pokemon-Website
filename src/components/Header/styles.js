import styled, { css } from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-top: 18px;
    background-color: transparent;
    position: relative;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    margin-left: 1.4rem;
    width: 17%;
    min-width: 130px;
    max-width: 200px;

    img {
        width: 100%;
    }
`;

export const NavigationContainer = styled.nav`
    display: flex;
    margin-right: 1.4rem;
    align-items: center;
`;

export const NavigationItem = styled.div`
    width: auto;
    padding: 8px;

    a {
        font-size: 18px;
        color: ${({ theme }) => (theme.colors.background)};
    }

    button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
    }

    &:nth-child(3) button img {
        background-color: transparent;
    }

    &:last-child {
        padding: 0;
        margin-left: 0.8rem;
    }

    ${({ headerColor }) => headerColor && css`
    transition: 2s;

    &:nth-child(3) button img {
        background-color: ${headerColor};
    }

    a {
        color: ${headerColor};
        font-weight: bolder;
    }
    `};
`;
