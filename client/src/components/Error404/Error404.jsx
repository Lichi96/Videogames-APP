import React from 'react';
import styled from 'styled-components';

const ContainerError = styled.div`
    height: 100vh;
    
    h1 {
        margin-top: 300px;
        font-size: 52px;        
    }
    p {
        font-size: 28px;
    }
`

const Error404 = () => {
    return (
        <ContainerError>
            <h1>Page not found!</h1>
            <p>The page you are trying to access does not exist</p>
        </ContainerError>
    )
}

export default Error404;