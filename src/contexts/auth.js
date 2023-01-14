import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
      const userToken = localStorage.getItem('user_token');
      const users = localStorage.getItem('users');

      if (userToken && users) {
        const foundUser = JSON.parse(users)?.filter(
            user => user.email === JSON.parse(userToken).email,
        );

        if (foundUser) {
            setUser(foundUser[0]);
        }
      }
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users'));
        console.log('🚀 ~ file: auth.js:25 ~ login ~ users', users);
        const foundUser = users?.filter(user => user.email === email);

        if (foundUser?.length) {
            const isValidEmail = (foundUser[0].email === email);
            const isValidPassword = (foundUser[0].password === password);
            if (isValidEmail && isValidPassword) {
                const SALT_FACTOR = 36;
                const token = Math.random().toString(SALT_FACTOR).substring(2);

                localStorage.setItem('user_token', JSON.stringify({ email, token }));
                setUser({ email, password });
                
                return;
            }

            return 'E-mail ou senha incorreto.';
        }

        return 'Usuário não encontrado.';
    };

    const signup = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users'));
        const foundUser = users?.filter(user => user.email === email);

        if (foundUser?.length) {
            return 'Já existe uma conta com este e-mail';
        }

        let newUser;

        if (users) {
            newUser = [...users, { email, password }];
        } else {
            // eslint-disable-next-line
            newUser = [{ email, password }];
        }

        localStorage.setItem('users', JSON.stringify(newUser));
        
        console.log('🚀 ~ file: auth.js:62 ~ signup ~ newUser', newUser);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    };
    
    return (
        <AuthContext.Provider
            value={ { user, isAuthenticated: !!user, login, signup, logout }}
        >
            { children }
        </AuthContext.Provider>
    );
        
};