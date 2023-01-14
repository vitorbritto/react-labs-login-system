import React from 'react'
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';

import Button from '../../components/button';

import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => [logout(), navigate('/')];

    return (
        <Styled.Container>
            <Styled.Title>Dashboard</Styled.Title>
            <Button text="Sair" onClick={handleLogout} />
        </Styled.Container>
    )
}

export default Home;