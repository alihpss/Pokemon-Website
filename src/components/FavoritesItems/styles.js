import styled from 'styled-components';

export const Container = styled.div`
    width: 40%;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;


    & + & {
        margin-left: 1rem;
    }

    img {
        object-fit: cover;
    }

`;
