import React, { ButtonHTMLAttributes, Children } from 'react';

// import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({onClick, children, ...rest }) => {
  return (
    <button type="button" {...rest} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;