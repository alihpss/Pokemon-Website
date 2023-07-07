import styled from 'styled-components';

export const Container = styled.footer`
    background: ${({ theme }) => theme.colors.pokedexBackground};
    padding: 2rem 0;
    color: #FFF;
`;

export const ContentContainer = styled.div`
    width: 95%;
    max-width: 1100px;
    margin: auto;
    display: flex;

    .copyrightContainer {
        display: flex;

        img {
            width: 22px;
        }
    }
`;
