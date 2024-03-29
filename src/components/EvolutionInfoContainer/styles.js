import styled from 'styled-components';

export const ButtonLink = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-start;

    p {
        margin-right: 0.5rem;
    }

    @media (max-width: 768px){
        padding: 0px 20px 20px 20px;
    }
`;

export const PokemonContainer = styled.div`
    border-radius: 10px;
    min-width: 100px;
    padding: 2px 0 6px 0;
    background-color: ${({ colorOfType }) => colorOfType};
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    img {
        max-width: 65px;
    }

    p {
        color: #FFF;
        text-transform: capitalize;
        text-align: center;
        margin: 4px 0 0 0;
    }
`;
