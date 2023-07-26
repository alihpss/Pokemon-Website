import styled, { css, keyframes } from 'styled-components';

const moveAnimation = keyframes`
     from {
            transform: translateX(-100px);
            opacity: 0;
        }

     to {
            transform: translateX(0);
            opacity: 1;
        }
 `;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80vh;

    &::after {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        transition: 2s;

        ${({ type, theme }) => type && css`
            background: ${theme.typeColors[type]};
        `}
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;

    h2 {
        text-transform: capitalize;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.background};
    }

    .pokemonImage {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 400px;
            min-width: 214px;
            width: 90%;
            opacity: ${({ typeAnimation }) => (typeAnimation ? 1 : 0)};
            ${({ animated, typeAnimation }) => ((animated && typeAnimation === 'move') ? css`animation: ${moveAnimation} 2s ease-in` : null)}
        }
    }


    .types {
        display: flex;
        gap: 0 8px;
        margin-top: 1.5vh;
        width: 100%;
        justify-content: center;

        div {
            height: 50px;
            width: 130px;
            max-width: 50%;
            justify-content: center;
        }
    }
`;

export const InfoContainer = styled.div`
    width: 45%;

    h1 {
        ${({ type, theme }) => type && css`
            color: ${theme.typeColors[type]};
            text-transform: capitalize;
            font-size: max(22px, min(6vw, 55px));
            text-shadow: 0px 0px 1px #010101;
        `}
    }
`;
