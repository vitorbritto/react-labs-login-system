import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #676767;
    text-transform: uppercase;
`;

const Link = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
        font-weight: 700;
    }
`


export {
    Container,
    Title,
    Link,
};