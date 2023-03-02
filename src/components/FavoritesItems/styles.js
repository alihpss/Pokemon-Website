import styled, { css } from 'styled-components';

import grass from '../../assets/images/background-types/grass.svg';

export const Container = styled.div`
    min-width: 280px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ type, theme }) => type && css`
        background: linear-gradient(0deg, ${theme.typeColors[type]} 10%, ${theme.secondaryColors[type]} 29%);
    `}


    & + & {
        margin-left: 2rem;
    }

    #imageContainer {
        background-image: url(${grass});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 0 0;
        padding-bottom: 0.8rem;

        img {
            width: 65%;
            position: relative;
            bottom: 1rem;
        }
    }

    #nameAndIdContainer {
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
    }

    #typesContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 18px;
    }


`;

export const TypesItem = styled.div`
    display: flex;
    padding: 8px 6px;
    border-radius: 12px;
    background-color: green;
    align-items: center;
    margin-top: 8px;

    p {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.background};
        margin-left: 4px;
    }

    img {
        width: 16px;
    }
`;
