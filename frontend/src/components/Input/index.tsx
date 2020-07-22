import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({Icon, ...props}) => (
  <Container>
    {Icon && (<Icon size={20} />)}
    <input { ...props }/>
  </Container>
)

export default Input;
