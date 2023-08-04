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
        height: 40px;
        width: calc(100vw + 1.5px);
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        transform: translateY(-55%) translateX(0) rotate(-2deg);
        // background: black;
    }

    ${({ invert }) => invert && css`
    transform: translateX(-55%) rotate(-4deg);
    `}
`;
