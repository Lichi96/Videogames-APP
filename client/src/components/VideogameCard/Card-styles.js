import styled from "styled-components";

export const CardStyles = styled.div`
    width: 240px;
    height: 320px;
    cursor: pointer;
    border-radius: 12px;
    /* background-color: #2587AA; */
    /* box-shadow: 6px 6px 10px rgba(255, 255, 255, 0.4); */
    filter: drop-shadow(10px 6px 11px #A99393);
    color: white;
    overflow: hidden;
    &:hover {
        .data {
            height: 100%;
            margin-top: -296px;
            overflow: visible;
            transition: 2s;
        }

        .image {
            filter: brightness(25%);   
        }
    }

    .image {
        height: 100%;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }

    .data {
        overflow: hidden;
        height: 0%;
        width: 80%;
        position: absolute;
        padding: 14px;
        h2 {
            font-style: italic;
            font-size: 22px;
        }
        p {
            text-align: center;
        }
        .platforms {
            i {
                color: #36bcf5;
                margin: 2px 12px;
                font-size: 18px;
            }
        }
        .rating {
            font-size: 18px;
            i {
                margin-right: 4px;  
                color: yellow;
                filter: drop-shadow(0px 0px 10px #B59F1A);
            }
        }

        .date {
            font-size: 18px;
        }

        .genres {
            font-size: 16px;
        }
    }
`;