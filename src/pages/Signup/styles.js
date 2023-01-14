import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003; 
    background-color: white;
    max-width: 350px;
    gap: 15px;
    padding: 20px;
    border-radius: 5px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #676767;
    text-transform: uppercase;
`;

const Signup = styled.label`
    font-size: 16px;
    color: #676767;
`;

const Error = styled.label`
    font-size: 14px;
    color: red;
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
    Content,
    Title,
    Signup,
    Error,
    Link,
};