import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 600px;
    position: absolute;
    top: 0;
    right:0;
    z-index: 3;
    background: ${({ theme }) => theme.colors.background};
    color: #000;
    box-shadow: 0px 0px 12px 0px #000;

    button {
        background: none;
        border: none;
        position: absolute;
        transition: 0.1s ease-in-out all;

        img {
            width: 55px;
        }

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(1);
        }
    }

    @media (max-width: 768px){
        max-width: 360px;

    }
`;

export const ApresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    p + p {
        max-width: 400px;
        text-align: center;
        margin-top: 2.5rem;
    }

    img {
        border-radius: 100px;
        margin-bottom: 1.5rem;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 0 24px;
    justify-content: center;
    margin-top: 3rem;

    a {
        transition: 0.1s ease-in-out all;
    }

    a:hover {
        transform: scale(1.1);
    }

    a:active {
        transform: scale(1);
    }

    a img {
        width: 40px;
        filter: brightness(0);
    }
`;
