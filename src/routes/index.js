import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
    const { isAuthenticated } = useAuth();

    return !!isAuthenticated ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path='/home' element={<Private Item={Home} />} />
                <Route path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route path='*' element={<Login />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;