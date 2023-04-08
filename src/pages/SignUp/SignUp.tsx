import React, { FormEvent, RefObject, createRef, useEffect, useRef, useState } from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import FormInputWave from '../../components/FormInputWave/FormInputWave';
import { useGlobalContext } from '../../context';
import axiosClient from '../../axios-client';

interface FormErrors {
  [key: string]: string | string[];
}

const SignUp = () => {
  const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const {setUser, setToken,token} = useGlobalContext();
    const [errors, setErrors] = useState<FormErrors>({})

   
    const onSubmit = (ev:FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const payload = {
          name: nameRef.current?.value || '',
          email: emailRef.current?.value || '',
          password: passwordRef.current?.value || '',
          password_confirmation: passwordConfirmationRef.current?.value || '',
        }

        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token);
                navigate('/home')
            })
            .catch(err => {
                const response = err.response;
              if (response && response.status === 422) {
                  console.log(response.data.errors)
                  setErrors(response.data.errors)
              } else {
                  setErrors({});
              }
            })
    }

  
  return (
    <div className='form-container'>
    <div className='form'>
    <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <FormInputWave  label="Name" type="text" reference={nameRef} errorMessage={errors?.name}/>
        <FormInputWave  label="Gmail" type="email" reference={emailRef} errorMessage={errors?.email}/>
        <FormInputWave  label="Password" type="text" reference={passwordRef} errorMessage={errors?.password}/>
        <FormInputWave  label="Repeat password" type="text" reference={passwordConfirmationRef} errorMessage={errors?.password_confirmation}/>
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px' type='submit'>Create An Account</Button>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#D87D4A"}}>Login</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignUp