import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    border-radius: 6px;
    padding: 6px;
    align-items: center;
    margin-top: 8px;
    box-shadow: 0px 0px 8px 0px rgb(0,0,0,0.75);
    user-select: none;
    border: none;

    ${({ typeName, theme }) => typeName && css`
        background-color: ${theme.typeColors[typeName]};
    `}

    p {
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.background};
        margin-left: 8px;
        text-transform: capitalize;
        font-size: 13px;
    }

    img {
        width: 13px;
    }
`;

export const ButtonContainer = styled.button`
    display: flex;
    border-radius: 6px;
    padding: 6px;
    align-items: center;
    margin-top: 8px;
    box-shadow: 0px 0px 8px 0px rgb(0,0,0,0.75);
    user-select: none;
    border: none;

    ${({ typeName, theme }) => typeName && css`
        background-color: ${theme.typeColors[typeName]};
    `}

    p {
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.background};
        margin-left: 8px;
        text-transform: capitalize;
        font-size: 13px;
    }

    img {
        width: 13px;
    }

    ${({ typeName }) => typeName === 'all' && css`
        background-color: #FFF;

        p {
            color: #000;
            font-weight: bolder;
        }
    `}
`;
