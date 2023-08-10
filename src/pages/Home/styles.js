/* eslint-disable no-nested-ternary */
import styled, { css, keyframes } from 'styled-components';

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

const moveRight = keyframes`
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
        background-color: ${({ backgroundColor }) => backgroundColor};
        position: absolute;
        top: 0;
        right: 0;
        z-index: -2;
        transition: 2s;
    }

    @media (max-width: 768px){
        flex-direction: column;
        height: 90vh;

        &::after {
            width: 100%;
            height: 45%;
        }
    }

`;

export const LeftContent = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 768px){
        width: 100%;
        order: 2;
    }
`;

export const TextContainer = styled.div`
    margin-top: 1rem;

    h1 {
        font-size: max(4vw, 22px);
    }

    p {
        font-size: max(1.1vw, 14px);
        max-width: 600px;
        margin-top: 20px;
    }

    .buttonLink {
        display: flex;
        justify-content: center;
        margin-top: 2rem;

        button {
            padding: 18px 62px;
            border-radius: 8px;
            border: none;
            box-shadow: 1px 0px 8px -1px rgba(0,0,0,0.4);
            font-weight: 700;
            transition: all 0.4s ease-in-out;
            color: #FFF;
            font-size: 15px;

            &:hover {
                box-shadow: 1px 0px 8px -1px rgba(0,0,0,0.8);
                transform: scale(1.1);
            }

            &:active {
                opacity: 0.8;
                transform: scale(1);
            }
        }
    }

    @media (max-width: 768px){
        text-align: center;

        .buttonLink {
            margin: 1rem 0;
        }
    }

`;

export const ImagesLeftContentContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.8rem;

    .imagesContainer {
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 16px 0;

        img {
            width: 100%;
            height: 100%;
            max-height: 28vh;
            border-radius: 10px;
            box-shadow: 0px 0px 8px 0px #000;
        }

        p {
            font-size: max(1vw, 11px);
            text-align: center;
        }
    }

`;

export const ImageContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 90%;
        max-height: 100%;
        opacity: ${({ typeAnimation }) => (typeAnimation ? 1 : 0)};
        ${({ animated, typeAnimation }) => ((animated && typeAnimation === 'move') ? css`animation: ${moveDown} 1.6s ease-in-out` : null)}
    }

    @media (max-width: 768px){
        width: 100%;

        img {
            max-width: 70%;
            max-height: 200px;
            ${({ animated, typeAnimation }) => ((animated && typeAnimation === 'move') ? css`animation: ${moveRight} 1.6s ease-in-out` : null)}
        }
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

    @media (max-width: 768px){
        top: 15%;
        right: 1rem;
        left: auto;
        flex-direction: row;

        & + & {
            margin: 0 1.1rem 0 0;
        }

        & + & + & {
            margin:0 2.2rem 0 0;
        }
    }

`;
