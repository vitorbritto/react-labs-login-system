import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import * as Styled from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailMatch, setEmailMatch] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (!email || !emailMatch || !password) {
            setError('Preencha todos os campos');
            return;
        }

        if (email !== emailMatch) {
            setError('Os e-mails não são iguais');
            return;
        }

        const response = signup(email, password);

        if (response) {
            setError(response);
            return;
        }

        alert('Usuário cadastrado com sucesso');
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
                    type="email"
                    placeholder="Digite novamente o seu e-mail"
                    value={emailMatch}
                    onChange={(e) => [setEmailMatch(e.target.value), setError('')]}
                />

                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError('')]}
                />

                <Styled.Error>{error}</Styled.Error>

                <Button text="Cadastrar-se" onClick={handleSignup} />

                <Styled.Signup>
                    Já tem uma conta?
                    <Styled.Link>
                        <Link to="/login">&nbsp;Entre</Link>
                    </Styled.Link>
                </Styled.Signup>
            </Styled.Content>
        </Styled.Container>
    )
}

export default Signup;