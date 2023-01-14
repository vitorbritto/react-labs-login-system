import React from 'react'
import * as Styled from './styles';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <Styled.Button type={type} onClick={onClick}>
        {text}
    </Styled.Button>
  );
}

export default Button;