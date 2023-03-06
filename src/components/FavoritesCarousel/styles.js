import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: ${({ justifyContent }) => (justifyContent === 'center' ? 'center' : 'flex-start')};

    button {
        background: none;
        border: none;
        position: absolute;
        top: 50%;
        scale: 3.3;

        &:hover {
            scale: 3.5;
        }

    }

    button:first-child {
        left: -10%;
    }

    div + button {
        right: -10%;
        top: 50%;
    }
`;

export const CarouselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;
