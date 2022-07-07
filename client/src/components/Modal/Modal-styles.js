import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    /* padding: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerModal = styled.div`
    width: 400px;
    min-height: 200px;
    background: #fff;
    position: relative;
    border-radius: 6px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 8px 30px 0px;
    padding: 20px;
    animation: scale 1s ease;
    
    @keyframes scale {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }   

    .header {
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding-bottom: 10px; 
        border-bottom: 1px solid #E8E8E8;
    
        h4 {
            font-weight: 500;
            font-size: 16px;
            color: #1766dc;
        }
        span {
            font-size: 20px;
            color: #232423;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            text-align: center;
            font-size: 28px;
        }
        span {
            margin-right: 18px;
            font-size: 72px;
        }
    }

    .buttons {
        width: 100%;
        display: flex;
        margin: 40px 0;
        justify-content: center;
        .btn-ok {
            width: 80px;
            padding: 10px;
            border: 0;
            border-radius: 30px;
            background-color: #1a9933;
            font-size: 18px;
            color: #fff;

            &:hover {
                cursor: pointer;
                background-color: #0d661f;  
            }
        }
        .btn-cancel {
            width: 120px;
            padding: 10px;
            margin-left: 30px;
            font-size: 18px;
            border: 0;
            border-radius: 30px;
            background-color: #8f9691;
            color: #fff;

            &:hover {
                cursor: pointer;
                background-color: #7a807c;
            }
        }
    }
`;