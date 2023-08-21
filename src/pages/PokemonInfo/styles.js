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

const modalErrorAnimation = keyframes`
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
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        transition: 2s;

        ${({ type, theme }) => type && css`
            background: ${theme.typeColors[type]};
        `}
    }

    @media (max-width: 768px){
        flex-direction: column;
        height: 100%;

        &::after {
            width: 100%;
            height: 45%;
        }
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

    @media (max-width: 768px){
        width: 100%;
        height: 45%;

        .types {
            position: absolute;
            flex-direction: column;
            justify-content: flex-end;
            align-items: end;
            margin-top: 1rem;

            div {
                width: 80px;
                margin-right: 15px;
            }
        }

        .pokemonImage img {
            width: 50%;
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

        .favoriteLogo {
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
                transition: all 0.2s ease;

                &:hover {
                    transform: scale(1.1);
                }

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
                font-size: max(22px, 6vw);
                text-shadow: 0px 0px 1px #010101;
            `}
        }
    }

    @media (max-width: 768px){
        width: 100%;
        margin-top: 4.1rem;
        position: relative;

        .nameAndFavoriteLogo {
            flex-direction: column;
            gap: 24px 0;

            .favoriteLogo button {
                width: 200px;
            }

            .favoriteLogo p {
                font-size: 14px;
            }

            h1 {
            ${({ type }) => type && css`
                font-size: 36px;
            `}
        }
        }
    }

`;

export const ControllerContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 0;
    bottom: 0;
    left: 0;
    height: 0px;
    margin: auto;

    button {
        background: none;
        border: none;
        transition: all ease-in-out 0.1s;
        margin-right: 5px;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.9);
        }

        img {
            width: 40px;
        }
    }

    @media (max-width: 768px){
        margin: 1vh 0 0 0;
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

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        background-color: ${({ theme }) => theme.colors.pokedexBackground}
    }
`;

export const ModalErrorMessage = styled.div`
    width: 95%;
    max-width: 900px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 7px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 5px 0px #000;
    animation: ${modalErrorAnimation} 1s ease-in-out;

    img {
        max-width: 70%;
        animation: ${modalErrorAnimation} 1.4s ease-in;
    }

    .actions {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 12px;
        margin-top: 8px;

        a, button {
            background-color: #000;
            font-size: 16px;
            color: #FFF;
            font-weight: bolder;
            border: ${({ theme }) => `1px solid ${theme.colors.pokedexBackground}`};
            padding: 8px 12px;
            border-radius: 8px;
            font-family: 'Sora', serif;
            transition: all 0.4s ease-in-out;

            &:hover {
                color: ${({ theme }) => theme.colors.pokedexBackground};
                background-color: #FFF;
                box-shadow: 0px 0px 2px 0px #000;
            }

            &:active {
                transform: scale(0.98);
            }
        }

        a {
            background-color: ${({ theme }) => theme.colors.pokedexBackground};
        }
    }
`;
