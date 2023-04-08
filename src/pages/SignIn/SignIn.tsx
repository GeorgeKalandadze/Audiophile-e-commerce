import {Navigate, useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import FormInputWave from "../../components/FormInputWave/FormInputWave";
import axiosClient from "../../axios-client";
import { FormEvent, useRef, useState } from "react";
import { useGlobalContext } from "../../context";

interface FormErrors {
  [key: string]: string | string[];
}

const SignIn = () => {
  const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const {setUser, setToken,token} = useGlobalContext();
    const [errors, setErrors] = useState<FormErrors>({})

    
    
  
  const onSubmit = (ev:FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const payload = {
        email: emailRef.current?.value || '',
        password: passwordRef.current?.value || '',
    }
    axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token);
            navigate('/home')
        })
        .catch((err) => {
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
        <h1>Login</h1>
        <FormInputWave  label="Email" type="email" reference={emailRef} errorMessage={errors.email}/>
        <FormInputWave  label="Password" type="password" reference={passwordRef} errorMessage={errors.password}/>
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px'>Log In</Button>
        <p onClick={() => navigate('/signup')}  className='form-type-text'>Don’t have an account? <span style={{color:"#D87D4A"}}>Sign Up</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignIn