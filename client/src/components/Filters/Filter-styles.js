import styled from "styled-components";

export const ContainerFilters = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
`;

export const OrderBy = styled.div`
    display:flex;
    height: 40px;
    align-items: center;
    margin-top: 40px;
    h4 {
        color: #fff;
        font-size: 18px;
        margin-top: -4px;
        margin-right: 20px;
    }
    select {
        background-color: #575556;
        color: #fff;
        font-size: 16px;
        width: 120px;
        padding: 6px;
        border-radius: 10px;
        margin: 4px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const FilterBy = styled.div`
    display:flex;
    height: 40px;
    align-items: center;
    margin-top: 40px;
    h4 {
        color: #fff;
        font-size: 18px;
        margin-top: -4px;
        margin-right: 20px;
    }
    select {
        background-color: #575556;
        color: #fff;
        font-size: 16px;
        width: 100px;
        padding: 6px;
        border-radius: 10px;
        margin: 4px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const ClearFilters = styled.button`
    position: absolute;
    top: 46px;
    right: 600px;
    border: 1px solid #fff;
    border-radius: 14px;
    padding: 6px 12px;
    font-size: 16px;
    background-color: #575556;
    color: #fff;

    &:hover {
        cursor: pointer;
        background-color: #424241;
    }
`;