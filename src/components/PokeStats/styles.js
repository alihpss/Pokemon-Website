import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-left: 15px;

    p {
        width: 30%;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: bolder;
        text-shadow: 0px 0px 2px #000;
        color: ${({ theme }) => theme.colors.background};
    }

    div {
        display: flex;
        margin-top: 10px;
        align-items: center;
    }
    .statsBar {
        width: 65%;
        height: 10px;
        position: relative;
        background-color: rgba(0,0,0, 0.4);
        margin-top: 0;

        div {
            margin-top: 0;
            background-color: rgba(70, 255, 63, 0.72);
            height: 10px;
        }

        ul {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            list-style: none;

            li {
                width: 2px;
                height: inherit;
                background-color: #ffffff;
                transform: rotate(195deg);
            }
        }
    }


`;
