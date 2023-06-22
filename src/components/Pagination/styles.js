import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    width: 1200px;
    max-width: 95%;
    margin: 7rem auto 0 auto;
    justify-content: center;
    gap: 7px;
    align-items: flex-end;

    p {
        user-select: none;
    }

    .controller {
        background: none;
        border: none;

        img {
            height: 28px;
        }

        .secondImage {
            transform: rotate(180deg);
        }

        &:active {
            scale: 0.90;
        }
    }
`;

export const ButtonPagination = styled.button`
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #000;
    max-width: 40px;
    background-color: #2B4162;
    color: #FFF;

    &:hover {
        box-shadow: 0px 0px 7px #000;
    }

    &:active {
        scale: 0.95;
    }

    &:disabled {
        opacity: 0.8;

        &:active {
            scale: 1;
        }

        &:hover {
        box-shadow: 0px 0px 3px #000;
    }

    }
`;
