import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: ${({ justifyContent }) => (justifyContent === 'center' ? 'center' : 'flex-start')};

    .controller {
        background: none;
        border: none;
        position: absolute;
        top: 50%;
        scale: 3.3;

        &:hover {
            scale: 3.5;
        }

        &:active {
            scale: 2.8;
        }

        &[disabled] img {
            filter: invert(60%)
        }

        &[disabled]:hover, &[disabled]:active {
            scale: 3.3;
        }
    }

    .controller:first-child {
        left: -9%;
    }

    div + .controller {
        right: -10%;
        top: 50%;
    }
`;

export const CarouselContainer = styled.div`
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    padding: 9px 0px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
