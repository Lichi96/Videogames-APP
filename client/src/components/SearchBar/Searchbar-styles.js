import styled from "styled-components";

export const SearchbarStyles = styled.div`
    margin-top: 46px;
    height: 30px;
    width: 300px;
    position: relative;

    input { 
        position: absolute;
        top: 0;
        left: 0;
        width: 72%;
        height: 100%;
        color: #fff;
        border-radius: 10px 0 0 10px;
        border: 0;
        outline: none;
        padding: 0 20px;
        background-color: #575556;
        font-size: 18px;
        &::placeholder {
            color: #ccd2db;
        }
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: #575556;
    text-align: center;
    border-radius: 0 10px 10px 0;
    font-size: 20px;
    border: 0;
    padding: 4px 12px;
    width: 20%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
    &:hover {
        color: #fff;
    }

    span {
        color: #fff;
        &:hover {
            color: #ccd2db;
        }
    }
`;