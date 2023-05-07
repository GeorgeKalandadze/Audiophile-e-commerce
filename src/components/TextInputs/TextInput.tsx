import React, { ChangeEvent } from 'react'
import styled,{keyframes,css} from 'styled-components'
import { useGlobalContext } from '../../context'

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
  const {customerErrors} = useGlobalContext()
  console.log(customerErrors)
  const errorFiled =  Object.keys(customerErrors).length > 0 && error
  return (
    <InputDiv >
        <Label>{label}</Label>
        <StyledInput
          placeholder={placeholder} 
          type={inputType} 
          name={name}
          error={errorFiled}
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
${(prop) =>
    prop.error &&
    css`
      animation: ${shakeAnimation} 0.4s linear ;
      animation-fill-mode: forwards; /* Retain styles after animation finishes */
    `};
`
const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  60% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;
