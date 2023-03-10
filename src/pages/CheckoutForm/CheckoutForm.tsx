import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../components/Button/Button'
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal'
import RadioInput from '../../components/RadioInput.tsx/RadioInput'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import TextInput from '../../components/TextInputs/TextInput'

type FormData = {
  name:string
  email:string
  phoneNumber:number
  addres:string
  zipCode:number
  city:string
  country:string
  moneyNumber:number
  pin:number
}

const CheckoutForm = () => {

  const {register, handleSubmit, formState:{errors}} =useForm<FormData>()
  
  
  return (
    <MainDiv >
      
      <InputForm >
        <FormHeader>CHECKOUT</FormHeader>
        <FormSectionHeader>Billing details</FormSectionHeader>
        <TextInput 
          placeholder='Alexei Ward' 
          inputType='text' 
          label='name'
          name="name"
          register={register}
          error={errors.name}
          validation={{required:true}}
          
        />
        <TextInput 
          placeholder='alexei@mail.com' 
          inputType='email' 
          label='Email Address'
          name='email'
          register={register}
          error={errors.email}
          validation={{required:true}}

          
        />
        <TextInput 
          placeholder='+1 202-555-0136' 
          inputType='number' 
          label='Phone Number'
          name='phoneNumber'
          register={register}
          error={errors.phoneNumber}
          validation={{required:true}}

          
        />
       

        <FormSectionHeader>shipping info</FormSectionHeader>

        <TextInput 
          placeholder='1137 Williams Avenue' 
          inputType='text' 
          label='Your Address'
          name='addres'
          register={register}
          error={errors.addres}
          validation={{required:true}}

          
        />
        <TextInput 
          placeholder='10001' 
          inputType='number' 
          label='ZIP Code'
          name='zipCode'
          register={register}
          error={errors.zipCode}
          validation={{required:true}}

          
          
        />
        <TextInput 
          placeholder='New York' 
          inputType='text' 
          label='City'
          name='city'
          register={register}
          error={errors.city}
          validation={{required:true}}


          
        />
        <TextInput 
          placeholder='United States' 
          inputType='text' 
          label='Country'
          name='country'
          register={register}
          error={errors.country}
          validation={{required:true}}

          
        />

        <FormSectionHeader>payment details</FormSectionHeader>
        <RadioInput/>
        <TextInput 
          placeholder='238521993' 
          inputType='number' 
          label='e-Money Number'
          name='moneyNumber'
          register={register}
          error={errors.moneyNumber}
          validation={{required:true}}

         
        />
        <TextInput 
          placeholder='6891' 
          inputType='number' 
          label='e-Money PIN'
          name='pin'
          register={register}
          error={errors.pin}
          validation={{required:true}}

          
        />
        
      </InputForm>
      <SummaryCard handleSubmit={handleSubmit} errors={errors}/>
    </MainDiv>
  )
}

export default CheckoutForm

const MainDiv = styled.div`
padding:20px 10px;
background-color:#F1F1F1;
`

const InputForm = styled.form`
width:100%;
padding:20px;
height:auto;
background: #FFFFFF;
border-radius: 8px;
`

const FormHeader = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
margin-bottom:30px;

`

const FormSectionHeader = styled.p`
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 25px;
letter-spacing: 0.928571px;
text-transform: uppercase;
color: #D87D4A;
margin-bottom:10px;
`

