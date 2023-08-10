import styled from 'styled-components';

export const Container = styled.footer`
    background: ${({ theme }) => theme.colors.pokedexBackground};
    padding: 3rem 0;
    color: #FFF;
`;

export const ContentContainer = styled.div`
    width: 95%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    `;

export const CopyrightContainer = styled.div`
    display: flex;

    img {
        width: 22px;
        margin-right: 14px;
    }

    .textCopy p + p {
        margin-top: 4px;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 14px;

    a {
        transition: 0.1s ease-in-out all;
    }

    a:hover {
        transform: scale(1.1);
    }

    a:active {
        transform: scale(1);
    }

    img {
        width: 30px;
    }
`;
