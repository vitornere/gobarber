import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import {
  Container,
  Content,
  Background
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber"/>
      <form>
        <h1>Faça seu logon</h1>

        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          Icon={FiMail}
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          Icon={FiLock}
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
