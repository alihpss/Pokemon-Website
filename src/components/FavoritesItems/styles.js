import styled from 'styled-components';

export const Container = styled.div`
    min-width: 280px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;


    & + & {
        margin-left: 1.5rem;
    }

    #imageContainer {
        background-color: #09efef;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 0 0;
        padding-bottom: 0.8rem;

        img {
            width: 65%;
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
        }

        span {
            position: absolute;
            right: 0.4rem;
        }
    }


`;
