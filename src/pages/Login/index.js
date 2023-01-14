import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Preencha todos os campos');
            return;
        }

        const response = login(email, password);

        if (response) {
            setError(response);
            return;
        }

        navigate('/home');
    };

    return (
        <Styled.Container>
            <Styled.Title>Sistema de login</Styled.Title>
            
            <Styled.Content>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError('')]}
                />

                <Styled.Error>{error}</Styled.Error>

                <Button text="Entrar" onClick={handleLogin} />

                <Styled.Signup>
                    Não tem uma conta?
                    <Styled.Link>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </Styled.Link>
                </Styled.Signup>
            </Styled.Content>
        </Styled.Container>
    )
}

export default Login;