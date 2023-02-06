import styled from 'styled-components';

export const Container = styled.div`
    background: #ababab;

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
    box-shadow:  0px 0px 59px -14px rgba(0,0,0,0.75);

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
        background-color: #ababab;
        height: 200px;
        z-index: -1;
    }
`;

export const FavoritesContainer = styled.div`
    width: 75vw;
    max-width: 900px;
    background-color: aquamarine;
    margin: 0 auto
`;
