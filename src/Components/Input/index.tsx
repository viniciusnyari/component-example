import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import styled from "styled-components";
import {Container} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {  
  icon?: React.ComponentType<IconBaseProps>;
  label: string;
  inputHandler : React.ChangeEventHandler<HTMLInputElement>;
  type : string;
}

const Input: React.FC<InputProps> = ({ icon: Icon ,type, label, inputHandler }) => {
  return (    
    <Container>
      {Icon && <Icon size={23} color="#fff" />}
      <input type={type} name={label} onChange={inputHandler} />         
    </Container>
  );
};

export default Input;