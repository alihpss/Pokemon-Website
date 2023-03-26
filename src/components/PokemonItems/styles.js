import styled, { css } from 'styled-components';

import exportTypeBackgroundImages from '../../utils/exportBackgroundTypeImages';

export const Container = styled.div`
    min-width: 330px;
    margin-right: 1rem;
    max-width: 350px;
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 17px -6px rgb(0,0,0,0.75);
    ${({ type, theme }) => type && css`
        background: linear-gradient(0deg, ${theme.secondaryColors[type]} 10%, ${theme.typeColors[type]} 29%);
    `}


    & + & {
        margin-left: 1rem;
    }

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

export const StatsContainer = styled.div`
    width: 100%;
    padding-left: 15px;

    p {
        width: 30%;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: bolder;
        text-shadow: 0px 0px 2px #000;
        color: ${({ theme }) => theme.colors.background};
    }

    div {
        display: flex;
        margin-top: 10px;
        align-items: center;
    }
    .statsBar {
        width: 65%;
        height: 10px;
        position: relative;
        background-color: rgba(0,0,0, 0.4);
        margin-top: 0;

        div {
            margin-top: 0;
            background-color: rgba(70, 255, 63, 0.72);
            height: 10px;
        }

        ul {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            list-style: none;

            li {
                width: 2px;
                height: inherit;
                background-color: #ffffff;
                transform: rotate(195deg);
            }
        }
    }


`;

export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 18px;
`;

export const TypesItem = styled.div`
    display: flex;
    padding: 8px 6px;
    border-radius: 12px;
    align-items: center;
    margin-top: 8px;
    box-shadow: 0px 0px 11px 0px rgb(0,0,0,0.75);
    ${({ firstTypeName, theme }) => firstTypeName && css`
        background: ${theme.typeColors[firstTypeName]};
    `}

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

export const ImageContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
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