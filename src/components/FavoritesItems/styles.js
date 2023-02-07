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

    img {
        width: 70%;
    }

`;
