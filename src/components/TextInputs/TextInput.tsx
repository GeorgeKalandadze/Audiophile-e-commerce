import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type InputProps = {
    inputType:string
    placeholder:string
    label:string
    name:string
    error:any
    value:string|number|undefined
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void
    
    
}

type InputStylePropType = {
  error:boolean
  
}
const TextInput = ({inputType,placeholder,label,name,error,value,handleChange}:InputProps) => {
  return (
    <InputDiv >
        <Label>{label}</Label>
        <StyledInput
          placeholder={placeholder} 
          type={inputType} 
          name={name}
          error={error}
          value={value}
          onChange={handleChange}
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
border: 1px solid ${(prop) => prop.error ? "#ff0000" : "#CFCFCF"};
border-radius: 8px;
width:100%;
padding:15px 25px;
`

