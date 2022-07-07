import styled from "styled-components";
import img from "../../assets/bg.jpg";

export const HomeStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 140vh;
    background-image: url(${img});
    background-size: 110%;
    background-position: center center;

`;
  

export const ContainerCards = styled.div`
    height: 82vh;
    overflow-y: scroll;
    width: 74%;
    margin-top: 42px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .error-message {
        color: #fff;
        width: 100%;
        font-size: 32px;
        text-align: center;
        margin-top: 220px;
    }

`;

export const ContainerSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;