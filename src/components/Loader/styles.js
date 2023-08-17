import styled, { keyframes } from 'styled-components';

const load = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border-radius: 25px;
    background-color: ${({ backgroundColorIsInvisible }) => (backgroundColorIsInvisible ? '#rgba(246, 245, 252, 0.0)' : 'rgba(246, 245, 252, 0.6)')};

    img {
        width: 100%;
        max-width: 80px;
        animation: ${load} 1.3s ease-in-out infinite both;
    }
`;
