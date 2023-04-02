import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import FormInputWave from '../../components/FormInputWave/FormInputWave';



const SignUp = () => {
  const navigate = useNavigate();

 
  


  
  return (
    <div className='form-container'>
    <div className='form'>
    <form >
        <h1>Sign Up</h1>
        <FormInputWave id="name" label="Name" type="text" />
        <FormInputWave id="email" label="Gmail" type="email" />
        <FormInputWave id="email" label="Password" type="text" />
        <FormInputWave id="email" label="Repeat password" type="text" />
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px'>Create An Account</Button>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#D87D4A"}}>Login</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignUp