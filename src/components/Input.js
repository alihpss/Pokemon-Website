import styled from 'styled-components';

export default styled.input`
    height: 44px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.pokedexBackground};
    outline: none;
    padding: 0 14px;
    font-size: 14px;
    transition: border-color 0.4s ease-in;
    appearance: none;

    &:focus {
        border-color: #FFA630;
    }
`;
