import styled, { css } from 'styled-components';

import exportTypeBackgroundImages from '../../utils/exportBackgroundTypeImages';

export const Container = styled.div`
    min-width: 290px;
    min-height: 250px;
    margin-right: 1rem;
    margin-left: 1rem;
    max-width: 350px;
    border-radius: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 12px -4px rgb(0,0,0,0.75);

    .childrenContainer {
        display: none;
    }

    &:hover {
        ${({ children }) => children && css`
            .childrenContainer {
                display: flex;
            }
        `}
    }

    ${({ type, theme }) => type && css`
        background: linear-gradient(0deg, ${theme.secondaryColors[type]} 10%, ${theme.typeColors[type]} 29%);
    `}

`;

export const NameAndIdContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    position: relative;

    p {
        font-size: 24px;
        text-transform: capitalize;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.background};
    }

    span {
        position: absolute;
        right: 0.4rem;
        color: ${({ theme }) => theme.colors.background};
    }
`;

export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 18px;

    div {
        padding: 8px 6px;

        p {
            text-transform: uppercase;
            font-size: 14px;
        }

        img {
            width: 16px;
        }

        &:hover {
            cursor: default;
        }
    }
`;

export const ImageContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 192px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    padding-bottom: 0.8rem;

    img {
        width: 55%;
        position: relative;
    }

    ${({ type }) => css`
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${exportTypeBackgroundImages[type]})};
    `}
`;
