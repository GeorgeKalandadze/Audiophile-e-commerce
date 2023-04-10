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
    const avatarImage = useRef<HTMLInputElement>(null);
    const {setUser, setToken,token,user} = useGlobalContext();
    const [errors, setErrors] = useState<FormErrors>({})

    const onSubmit = (ev:FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const formData = new FormData()
        formData.append('name', nameRef.current?.value || '')
        formData.append('email', emailRef.current?.value || '')
        formData.append('password', passwordRef.current?.value || '')
        formData.append('password_confirmation', passwordConfirmationRef.current?.value || '')
        formData.append('avatar_image', avatarImage.current?.files?.[0] || '')

        console.log(formData)
        axiosClient.post('/signup', formData)
          .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
            navigate('/home')
          })
          .catch(err => {
            const response = err.response
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            } else {
              setErrors({})
            }
          })
    }

  
  return (
    <div className='form-container'>
    <div className='form'>
    <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        {Object.keys(errors).length > 0 && 
        (<div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
          </div>)

        }
        <FormInputWave  label="Name" type="text" reference={nameRef} />
        <FormInputWave  label="Gmail" type="email" reference={emailRef} />
        <FormInputWave  label="Password" type="Password" reference={passwordRef} />
        <FormInputWave  label="Repeat password" type="Password" reference={passwordConfirmationRef} />
        <div className='image-upload'>
          
          <div className="styled-input-div">
            <input type='file' ref={avatarImage}/>
            <Button bgColor='#D87D4A' brdRadius='4px'>Upload</Button>
          </div>
          <label>Upload Image</label>
        </div>
        <Button width='100%' brdRadius='4px' bgColor='#D87D4A' pdng='15px 25px' type='submit'>Create An Account</Button>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#D87D4A"}}>Login</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignUp