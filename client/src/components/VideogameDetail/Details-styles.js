import styled from "styled-components";
import img from "../../assets/bg.jpg";

export const ContainerDetail = styled.div`
    min-height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    .btn-return {
        position: absolute;
        top: 40px;
        left: 60px;
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

    .btn-delete {
        position: absolute;
        top: 50px;
        right: 300px;
        padding: 10px 40px;
        font-size: 16px;
        border: 0;
        border-radius: 6px;
        background-color: #bf1730;
        color: #fff;
        &:hover {
            cursor: pointer;
            background-color: #5c5c5c;
            color: #fff;
        }
    }

    h2 {
        margin-top: -60px;
        font-size: 32px;
        color: #fff;
    }   

`;

export const Details = styled.div`
    height: 100%;
    width: 1300px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 40px;

    .image {
        img {
            width: 600px;
            height: 360px;
            border: 2px solid gray;
            border-radius: 12px;
            margin-top: -40px;
            box-shadow: 0px 0px 12px #FFF9F9; 
        }
    }
    .content {
        margin-top: 10px;
        h2 {
            color: #37a8c4;
            font-size: 52px;
            text-align: center;
            font-style: italic;
            font-weight: 300;
        }
        .date {
            font-size: 18px;
            color: #fff;
        }
        .rating {
            color: #fff;
            font-size: 18px;
            i {
                color: yellow;
                margin: 0 10px;
            }
        }

        .platforms {
            height: 60px;
            width: 500px;
            color: #fff;
            text-align: center;
            /* border: 1px solid white; */
            span {
                color: #37a8c4;
                font-size: 22px;
                margin-right: 12px;
                flex-wrap: wrap;
            }
        }

        .genres {
            span {
                color: #37a8c4;
                font-size: 24px;
                margin-right: 12px;
            }
            .name {
                color: #fff;
                font-size: 16px;    
            }
        }
    }

    .description {
        margin-top: 20px;
        p {
            font-size: 18px;
            color: #fff;
            line-height: 24px;
            letter-spacing: 2px;
        }
    }

`;