import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.pokedexBackground} 42%, ${({ theme }) => theme.colors.light} 43%);

    h1 {
        margin: 9rem auto 2rem auto;
        color: ${({ theme }) => theme.colors.dark};
        text-align: center;
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    width: 70%;
    padding: 11px 0;
    max-width: 800px;
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
    margin: 0 auto;

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
