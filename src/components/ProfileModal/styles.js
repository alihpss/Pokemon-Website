import styled from 'styled-components';

export const Container = styled.div`
    width: 40%;
    height: 600px;
    position: absolute;
    top: 0;
    right:0;
    z-index: 3;
    background: black;

    button {
        background: none;
        border: none;

        img {
            width: 55px;
        }
    }
`;
