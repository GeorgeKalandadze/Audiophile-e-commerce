import React, { RefObject } from 'react'
import styled from 'styled-components'

type InputProps = {
    inputType:string
    placeholder:string
    label:string
    name:string
    register:any
    error:any
    validation:any
    
    
}

type InputStylePropType = {
  error:boolean
  
}
const TextInput = ({inputType,placeholder,label,name,register,validation,error}:InputProps) => {
  return (
    <InputDiv >
        <Label>{label}</Label>
        <StyledInput
          placeholder={placeholder} 
          type={inputType} 
          name={name}
          {...register(name,validation)}
          error={error}
          
        />
    </InputDiv >
  )
}

export default TextInput

const InputDiv = styled.div`
    
`



const Label = styled.label`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.214286px;
color: #000000;
`

const StyledInput = styled.input<InputStylePropType>`
margin-top:15px;
margin-bottom:15px;
border:${(prop) => prop.error ? "1px solid red":"1px solid #CFCFCF"};
border-radius: 8px;
width:100%;
padding:15px 25px;
`

