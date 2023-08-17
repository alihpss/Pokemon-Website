import styled, { css } from 'styled-components';

export default styled.div`
    background: ${({ theme }) => theme.colors.background};
    position: absolute;
    width: 4.5rem;
    height: calc(100vh + 1.5px);
    top: -3px;
    left: 50%;
    transform: translateX(-55%) rotate(4deg);
    z-index: -1;


    @media (max-width: 768px){
        display: none;
        height: 80px;
        width: calc(100vw + 1.5px);
        top: min(45vh, 400px);
        left: 0;
        bottom: 0;
        transform: translateY(-8%) translateX(0) rotate(-2deg);
        padding-bottom: 130px;
    }

    ${({ invert }) => invert && css`
    transform: translateX(-55%) rotate(-4deg);
    `}
`;
