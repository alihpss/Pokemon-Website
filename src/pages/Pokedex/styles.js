import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.pokedexBackground} 410px, ${({ theme }) => theme.colors.light} 415px);

    h1 {
        margin: 8rem auto 2.5rem auto;
    }

    h1, h2 {
        color: ${({ theme }) => theme.colors.dark};
        text-align: center;
    }

    h2 {
        font-size: 2rem;
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    width: 800px;
    padding: 11px 0;
    max-width: 95%;
    margin: 4rem auto 2rem auto;
    max-height: 350px;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FFCB05;
    border-radius: 10px;
    box-shadow: 0px 0px 26px -11px rgb(0,0,0,0.95);

    hr {
        height: 200px;
        background-color: ${({ theme }) => theme.colors.background};
        border: none;
        width: 1px;
    }

    img {
        width: 50%;
        max-width: 300px;
    }

    p {
        width: 45%;
        max-width: 300px;
        color: ${({ theme }) => theme.colors.background};
        font-weight: 500;
        font-size: 1.5rem;
        padding: 15px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.pokedexBackground};
        height: 250px;
        z-index: -1;
    }
`;

export const FavoritesContainer = styled.div`
    width: 75vw;
    max-width: 900px;
    background-color: transparent;
    margin: 0 auto 4rem auto;

    .notFoundContainer {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:  auto;

        img {
            width: 100%;
        }

        p {
            font-size: 15px;
            font-weight: bolder;
        }
    }
`;

export const PokedexContainer = styled.div`
    background-color: #949d6a;
    padding-top: 10rem;

    .filters {
        display: flex;
        align-items: center;
        width: 1000px;
        max-width: 95%;
        justify-content: space-between;
        margin: 3.8rem auto 0 auto;

        .typesCarousel {
            width: 40vw;
            max-width: 250px;

            div .controller + div {
                gap: 0.6rem;
                padding: 2px 0;

                & :active {
                    scale: 0.92;
                }
            }

            div .controller + div div {
                margin-top: 0;
                box-shadow: 0px 0px 3px 0px rgb(0,0,0,0.75);

                &, p {
                    transition: all 0.2s ease-in-out;
                }
            }
        }

        div .controller {
            display: flex;
            position: relative;
            scale: 1.4;
            left: 0;
            right: 0;

            &:hover {
                scale: 1.6;
            }

            &:active {
                scale: 1;
            }

            &[disabled] img {
                filter: invert(90%)
            }

            &[disabled]:hover, &[disabled]:active {
                scale: 1.4;
            }
        }
    }
`;
