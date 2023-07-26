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

    ${({ invert }) => invert && css`
    transform: translateX(-55%) rotate(-4deg);
    `}
`;
