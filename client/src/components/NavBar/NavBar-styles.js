import styled from 'styled-components';

export const Nav = styled.nav`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        font-size: 42px;
        font-weight: 500;
        font-style: italic;
        margin-left: 180px;
        color: #f8f8f8;
        text-shadow: 0px 0px 12px #FFF9F9;  
    }

    img {
        height: 90%;
        width: auto;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        padding-bottom: 4px;

        span {
            color: #2a91b0;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        &:hover {
            border-bottom: 1px solid #fff;
        }
    }
`;