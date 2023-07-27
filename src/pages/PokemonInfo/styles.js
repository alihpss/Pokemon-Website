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
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .nameAndFavoriteLogo {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 1vh;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            button {
                background: none;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4vw;
                max-width: 40px;

                &:active {
                    transform: scale(0.9);
                }

                img {
                    margin-top: 2px;
                    width: 100%;

                }
            }

            p {
                font-size: max(8px,min(2vw,12px));
                color: ${({ theme }) => theme.colors.danger};
                font-weight: bolder;
                text-align: center;
            }
        }



        h1 {
            ${({ type, theme }) => type && css`
                color: ${theme.typeColors[type]};
                text-transform: capitalize;
                font-size: max(22px, min(6vw, 55px));
                text-shadow: 0px 0px 1px #010101;
            `}
        }
    }

`;

export const ControllerContainer = styled.div`
    position: absolute;
    background-color: aqua;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 0px;

    button {
        background: none;
        border: none;
        &:active {
            transform: scale(0.9);
        }

        img {
            width: 44px;
        }
    }
`;

export const WeaknessesContainer = styled.div`
    margin: 4vh auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    p + div {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
        margin-left: 18px;
    }

    div div {
        height: 35px;
        margin-top: 0;
    }

    & > p {
        font-weight: 500;
    }
`;
