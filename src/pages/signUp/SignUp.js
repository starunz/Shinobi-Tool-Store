import { Container, Title, Form, Input, Button, Liink, } from '../../components/styleSignIn&SignUp';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as api from '../../services/api'

import { ThreeDots } from 'react-loader-spinner';
import Swal from 'sweetalert2'

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();

    setIsLoading(true);

    if (signUpData.password !== signUpData.confirmPassword) {
      setSignUpData({ ...signUpData, password: '', confirmPassword: '' });

      setIsLoading(false);

      Swal.fire({
        icon: "error",
        title: "OOPS...",
        text: 'As senhas não são correspondentes 🤔 tenta de novo, por favor 😉',
      });

      return;
    } else delete signUpData.confirmPassword;

    try {
      await api.signUp({ ...signUpData });

      setIsLoading(false);
      navigate('/login');
    } catch (error) {
      setIsLoading(false);

      if (error.response.status === 409) {
        setSignUpData({ ...signUpData, email: '' });
        
        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: 'Este email já está cadastrado 🤔',
        });
        
        return;
      }

      if (error.response.status === 422) {
        setSignUpData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        
        Swal.fire({
          icon: "error",
          title: "OOPS...",
          text: 'Insira os dados corretamente, por favor 😉',
        });
        
        return;
      }

      Swal.fire({
        icon: "error",
        title: "OOPS...",
        text: 'Ocorreu um erro 🤔, tenta de novo, por favor 🥺',
      });

      setSignUpData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }

  return(
    <Container>
      
      <Title>Shinobi Tool <br/> Store</Title>

      <Form onSubmit={handleSignUp}>
        <Input
          type='text'
          placeholder='Nome'
          name='name'
          onChange={handleChange}
          value={signUpData.name}
          disabled={isLoading}
          required
        />
        <Input
          type='email'
          placeholder='E-mail'
          name='email'
          onChange={handleChange}
          value={signUpData.email}
          disabled={isLoading}
          required
        />
        <Input
          type='password'
          placeholder='Senha'
          name='password'
          onChange={handleChange}
          value={signUpData.password}
          disabled={isLoading}
          required
        />
        <Input
          type='password'
          placeholder='Confirme a senha'
          name='confirmPassword'
          onChange={handleChange}
          value={signUpData.confirmPassword}
          disabled={isLoading}
          required
        />

        <Button type='submit' disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
            'Cadastrar'
          )}
        </Button>
      </Form>

      <Liink to='/'>Já tem uma conta? Entre agora!</Liink>
    </Container>
  );
}

export default SignUp;