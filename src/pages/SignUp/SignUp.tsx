import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';



const SignUp = () => {
  const navigate = useNavigate();

 
  


  
  return (
    <div className='form-container'>
    <div className='form'>
    <form >
        <h1>Sign Up</h1>
        <input className='signinup-input'   name="name" placeholder={"Name"} />
        <input className='signinup-input'  name="email"  placeholder={"Gmail"} />
        <input className='signinup-input' name="password" placeholder={"Password"} />
        <input className='signinup-input'  name="passwordConfirmation" placeholder={"Repeat password"} />
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px'>Create An Account</Button>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#D87D4A"}}>Login</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignUp