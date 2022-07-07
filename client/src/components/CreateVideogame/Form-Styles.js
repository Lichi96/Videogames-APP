import styled from "styled-components";
import img from "../../assets/bg.jpg";

export const Container = styled.div`
    min-height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    position: relative;

    .btn {
        position: absolute;
        top: 40px;
        left: 60px;
        width: 120px;
        padding: 10px 40px;
        font-size: 16px;
        border: 0;
        border-radius: 6px;
        background-color: #37a8c4;
        color: #fff;
        &:hover {
            cursor: pointer;
            background-color: #5c5c5c;
            color: #fff;
        }
    }
`;

export const ContainerForm = styled.div`
    height: 100%;
    width: 800px;
    margin-top: -20px;
`;

export const FormStyles = styled.form`
    padding: 60px;
    margin-top: 40px;
    fieldset {
        padding: 40px;
        legend {
            font-size: 32px;
            padding: 0 30px;
            text-align: center;
            color: #fff;
        }
    }

`;  

export const FormGroup = styled.div`
    width: 100%;
    margin-bottom: 32px;
    div {
        display: flex;
        justify-content: space-around;
        gap: 40px;
        label {
            width: 250px;
            text-align: left;
            color: white;
            font-size: 18px;
        }
        input[type="text"], textarea, input[type="number"], input[type="date"], select {
            width: 260px;
            height: 28px;
            font-size: 16px;
            background-color: #FDF3ED; 
            padding: 0 12px;
            background-color: #288CB0;
            color: #fff;
            ::placeholder {
                color: rgba(255, 255, 255, 0.6);
            }
        }
        select {
            width: 284px;
        }

        textarea {
            padding: 8px 12px;
            height: 80px;
            resize: none;
            font-size: 18px;
        }
    }
`;

export const Error = styled.span`
    width: 100%;
    text-align: center;
    margin-top: 8px;
    font-size: 18px;
    margin-bottom: -24px;
    color: red;
`;

export const SelectedPlatforms = styled.div`
    position: absolute;
    top: 360px;
    right: 280px; 
    width: 14%;
    border: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin-bottom: 20px;
    div {
        background-color: #fff;
        padding: 2px;
        border-radius: 14px;
        margin: 2px;
        span {
            padding: 8px;
            color: #000;
        }
        .btn-del {
            border: none;
            background-color: #fff;
            outline: none;
            border-end-end-radius: 8px;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const SelectedGenres = styled.div`
    position: absolute;
    top: 540px;
    right: 280px; 
    width: 14%;
    border: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin-bottom: 20px;
    div {
        background-color: #fff;
        padding: 2px;
        border-radius: 14px;
        margin: 2px;
        span {
            padding: 8px;
            color: #000;
        }
        .btn-del {
            border: none;
            background-color: #fff;
            outline: none;
            border-end-end-radius: 8px;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;

export const Submit = styled.button`
    width: 100%;    
    height: 40px;
    background-color: #288CB0;
    color: #fff;
    font-size: 20px;

    &:hover {
        cursor: pointer;
        background-color: #28768C;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #585b5c;
    }
`;

export const Required = styled.span`
    display: inline-block;  
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
`;
