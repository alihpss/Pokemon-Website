import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.pokedexBackground} 35%, ${({ theme }) => theme.colors.light} 36%);

    h1 {
        margin: 9rem auto 2rem auto;
        color: ${({ theme }) => theme.colors.dark};
        text-align: center;
    }
`;

export const ContainerHeader = styled.header`
    display: flex;
    width: 70%;
    max-width: 700px;
    margin: 4rem auto 2rem auto;
    max-height: 350px;
    align-items: center;
    justify-content: space-around;
    background-color: #FFCB05;
    border-radius: 10px;
    box-shadow:  0px 0px 26px -11px rgb(0,0,0,0.75);

    hr {
        height: 150px;
        background-color: ${({ theme }) => theme.colors.background};
        border: none;
        width: 1px;
    }

    img {
        width: 45%;
        max-width: 250px;
    }

    p {
        width: 45%;
        max-width: 300px;
        color: ${({ theme }) => theme.colors.background};
        font-weight: 500;
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
    margin: 0 auto
`;
