import styled from 'styled-components';

export const StyledButton = styled.div`
    width: 100%;
    position: relative;
    bottom: 0;
    margin-top: 20px;

    button {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        padding: 12px 0;
        border: none;
        border-radius: 0px 0px 25px 25px;
        transition: all 0.4s;
        background-color: ${({ theme, pokemonType }) => theme.typeColors[pokemonType]};
        color: ${({ theme }) => theme.colors.background};

        img {
            width: 26px;
        }

        p {
            font-size: 17px;
        }

        &:hover {
            filter: brightness(0.9);
        }

        &:active {
            filter: brightness(0.7);
        }
    }
`;
