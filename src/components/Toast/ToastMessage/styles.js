import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.pokedexBackground};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
  `,
};

export const Container = styled.div`
    padding: 14px 100px;
    color: #FFF;
    border-radius: 4px;
    box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ type }) => containerVariants[type] || containerVariants.default}

    & + & {
        margin-top: 12px;
    }

    img {
        margin-right: 12px;
    }

    @media (max-width: 768px){
        padding: 24px 10px;
        width: 320px;
        text-align: center;
        border-radius: 11px;
    }
`;
