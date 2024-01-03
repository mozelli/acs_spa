'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import InputFeedback from '../../form/inputFeedback';

// import { Container } from './styles';

interface ILoginData {
  email: string;
  password: string;
}

const FormLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>();
  const router = useRouter();

  const dataHandle = (data: any) => {
    const body = {
      email: data.email,
      password: data.password
    }

    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      response.json()
      .then((r) => {
        let user = r.user;
        const refresh_token = JSON.stringify(r.refresh_token);
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', r.token);
        // router.push('/dathboard');
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className="col-span-2 md:col-span-1">
        <h1 className='text-6xl font-bold mt-16 text-lime-800 drop-shadow-md'>Alimentar com Saúde</h1>
        <h2 className='mt-8 text-2xl text-lime-700 drop-shadow-md'>Login</h2>
        <form onSubmit={handleSubmit(dataHandle)}>
          <div className="my-4">
            <input 
              type="email" 
              className='rounded p-2 border w-3/4 focus:outline focus:outline-2 outline-lime-600 drop-shadow-md' 
              placeholder='E-mail'
              { ...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }) }   
            />
            { 
              errors?.email?.type === 'required' 
              &&  
              <InputFeedback>
                Informe um e-mail.
              </InputFeedback>
            }
            { 
              errors?.email?.type === 'pattern' 
              &&  
              <InputFeedback>
                Informe um e-mail válido!
              </InputFeedback>
            }
          </div>
          <div className="my-4 ">
            <input 
              type="password" 
              className='rounded p-2 border w-3/4 focus:outline focus:outline-2 outline-lime-600 drop-shadow-md' 
              placeholder='Senha'
              { ...register('password', { required: true, minLength: 6 }) }   
            />
            {       
              errors?.password?.type === 'minLength' 
              &&  
              <InputFeedback>
                A senha deve ter no mínimo 6 caracteres.
              </InputFeedback>
            }
            {       
              errors?.password?.type === 'required' 
              &&  
              <InputFeedback>
                Informe sua senha.
              </InputFeedback>
            }
          </div>
          <div className="flex mt-8">
            <div className="mr-4">
              <button type='submit' className='bg-lime-600 hover:bg-lime-700 py-1 px-3 rounded-sm text-white font-medium transition ease-in-out drop-shadow-md'>Entrar</button>
            </div>
            <div className="bg-red-300 hover:bg-red-400 flex items-center rounded-sm transition ease-in-out drop-shadow-md">
              <Link href={''} className='py-1 px-3 text-white font-medium'>Cadastre-se!</Link>
            </div>
          </div>
        </form>
    </div>
  );
}

export default FormLogin;