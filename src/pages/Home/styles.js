/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from 'styled-components';

import pokeball from '../../assets/images/pokeball.png';
import ashAndPikachu from '../../assets/images/ash-pikachu.jpg';

const moveDown = keyframes`
     from {
            transform: translateY(-100px);
            opacity: 0;
        }

     to {
            transform: translateY(0);
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
        background-color: ${({ backgroundColor }) => backgroundColor};
        position: absolute;
        top: 0;
        right: 0;
        z-index: -2;
        transition: 2s;
    }

`;

export const LeftContent = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const TextContainer = styled.div`
    margin-top: 4rem;

    h1 {
        font-size: 2.3rem;
    }

    p {
        font-size: 1rem;
        max-width: 600px;
        margin-top: 20px;
    }

    button {
        padding: 8px 16px;
        margin-top: 20px;
        border-radius: 14px;
        border: none;
        box-shadow: 1px 0px 8px -1px rgba(0,0,0,0.4);
        font-weight: 600;
        transition: all 0.4s ease-in-out;

        &:hover {
            box-shadow: 1px 0px 8px -1px rgba(0,0,0,0.8);
        }

        &:active {
            opacity: 0.8;
        }

        a {
            color: #FFF;
        }
    }
`;

export const ImagesLeftContentContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    margin-top: 4rem;

    div {
        position: relative;
        width: 45%;
        height: 9rem;
        background-color: black;
        background-image: url(${pokeball});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
    }

    div + div {
        background-image: url(${ashAndPikachu});
    }
`;

export const ColumnSkew = styled.div`
    background: ${({ theme }) => theme.colors.background};
    position: absolute;
    width: 4.5rem;
    height: calc(100vh + 2px);
    top: -3px;
    left: 50%;
    transform: translateX(-55%) rotate(4deg);
    z-index: -1;
`;

export const ImageContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 50%;
        max-height: 70%;
        position: absolute;
        opacity: ${({ typeAnimation }) => (typeAnimation ? 1 : 0)};
        ${({ animated, typeAnimation }) => ((animated && typeAnimation === 'moveDown') ? css`animation: ${moveDown} 1.6s ease-in-out` : null)}
    }
`;

export const CarrouselSelectImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    right: 1.4rem;

    & + & {
        margin-top: 1.1rem;
    }

    & + & + & {
        margin-top: 2.2rem;
    }


    button {
        display: flex;
        justify-content: center;
        background: none;
        border: none;
        opacity: ${({ indexOfItem, counter }) => (indexOfItem === counter ? 1 : 0.2)};

        img {
            width: 50%;
        }
    }

`;
