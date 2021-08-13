import styled from 'styled-components';

export const CartContainer = styled.div`
    padding: 20px;
    margin: auto;
    background-color: darkorange;
    display: flex;
`;

export const ButtonItems = styled.button`
    padding: 10px;
    font-size: 20px;
    margin: auto;
    background-color: ${props => props.important ? "pink" : "blue"};

    &:hover {
        cursor: pointer;
        background-color: darkgray
    }
`