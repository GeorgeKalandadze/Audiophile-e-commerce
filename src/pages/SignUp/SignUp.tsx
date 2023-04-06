import React, { FormEvent, RefObject, createRef, useEffect, useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import FormInputWave from '../../components/FormInputWave/FormInputWave';
import { useGlobalContext } from '../../context';
import axiosClient from '../../axios-client';



const SignUp = () => {
  const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const {setUser, setToken} = useGlobalContext();
    const [errors, setErrors] = useState(null)

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
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors)
                    setErrors(response.data.errors)
                }
            })
    }

 
  console.log(errors)


  
  return (
    <div className='form-container'>
    <div className='form'>
    <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <FormInputWave id="name" label="Name" type="text" reference={nameRef}/>
        <FormInputWave id="email" label="Gmail" type="email" reference={emailRef}/>
        <FormInputWave id="email" label="Password" type="text" reference={passwordRef}/>
        <FormInputWave id="email" label="Repeat password" type="text" reference={passwordConfirmationRef}/>
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px' type='submit'>Create An Account</Button>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#D87D4A"}}>Login</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignUp