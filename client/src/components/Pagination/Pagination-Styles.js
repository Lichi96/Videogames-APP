import styled from "styled-components";

export const PaginationStyles = styled.div `
    display: flex;
    justify-content: center;
    list-style: none;

    li {
        margin: 8px;
    }

    .selected {
        background-color: rgba(41, 186, 241, 0.8);
        color: white;
    }
`;

export const Button = styled.button `
    font-size: 12px;
    padding: 8px;
    border: none;
    border-radius: 6px;
    margin: 10px;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
        color: white;
    }
`;