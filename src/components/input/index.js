import React from 'react'
import * as Styled from './styles';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Styled.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  );
};

export default Input;