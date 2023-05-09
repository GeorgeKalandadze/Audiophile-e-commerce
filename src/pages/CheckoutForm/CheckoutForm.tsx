import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal'
import RadioInput from '../../components/RadioInput.tsx/RadioInput'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import TextInput from '../../components/TextInputs/TextInput'
import { useGlobalContext } from '../../context'


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
  const {customerErrors = {},customer,handleCustomersData,isOpenPurchase} = useGlobalContext()

  
  return (
    <MainDiv >
      {isOpenPurchase && <PurchaseModal isShow={isOpenPurchase}/>}
      <InputForm >
        <FormHeader>CHECKOUT</FormHeader>
        <FormSectionHeader>Billing details</FormSectionHeader>
        <InputContainers>
        <TextInput 
          placeholder='Alexei Ward' 
          inputType='text' 
          label='name'
          name="name"
          error={customerErrors.name && customerErrors.name[0]}
          value={customer.name}
          handleChange={handleCustomersData}
          
        />
        <TextInput 
          placeholder='alexei@mail.com' 
          inputType='email' 
          label='Email Address'
          name='email'
          error={customerErrors.email && customerErrors.email[0]}
          value={customer.email}
          handleChange={handleCustomersData}
          
          
        />
        </InputContainers>
        <TextInput 
          placeholder='+1 202-555-0136' 
          inputType='number' 
          label='Phone Number'
          name='phone'
          error={customerErrors.phone && customerErrors.phone[0]}
          value={customer.phone}
          handleChange={handleCustomersData}
          
        />
       

        <FormSectionHeader>shipping info</FormSectionHeader>

        <TextInput 
          placeholder='1137 Williams Avenue' 
          inputType='text' 
          label='Your Address'
          name='address'
          error={customerErrors.address && customerErrors.address[0]}
          value={customer.address}
          handleChange={handleCustomersData}
          
        />
        <InputContainers>
        <TextInput 
          placeholder='10001' 
          inputType='number' 
          label='ZIP Code'
          name='zip_code'
          error={customerErrors.zip_code && customerErrors.zip_code[0]}
          value={customer.zip_code}
          handleChange={handleCustomersData}
          
        />
        <TextInput 
          placeholder='New York' 
          inputType='text' 
          label='City'
          name='city'
          error={customerErrors.city && customerErrors.city[0]}
          value={customer.city}
          handleChange={handleCustomersData}
          
        />
        </InputContainers>
        <TextInput 
          placeholder='United States' 
          inputType='text' 
          label='Country'
          name='country'
          error={customerErrors.country && customerErrors.country[0]}
          value={customer.country}
          handleChange={handleCustomersData}
        />

        <FormSectionHeader>payment details</FormSectionHeader>
        <RadioInput/>

        <InputContainers>
        <TextInput 
          placeholder='238521993' 
          inputType='number' 
          label='e-Money Number'
          name='e_money_number'
          error={customerErrors.e_money_number && customerErrors.e_money_number[0]}
          value={customer.e_money_number}
          handleChange={handleCustomersData}
          
        />
        <TextInput 
          placeholder='6891' 
          inputType='number' 
          label='e-Money PIN'
          name='e_money_pin'
          error={customerErrors.e_money_pin && customerErrors.e_money_pin[0]}
          value={customer.e_money_pin}
          handleChange={handleCustomersData}
        />
        </InputContainers>
        
      </InputForm>
      <SummaryCard />
    </MainDiv>
  )
}

export default CheckoutForm

const MainDiv = styled.div`

padding:20px 10px;
background-color:#f2f2f2;
@media only screen and (min-width: 1200px){
   display:flex;
   gap:20px;
   padding:70px 180px;
   
  }
`

const InputForm = styled.form`
margin-top: 30px;
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

const InputContainers = styled.div`
  display:block;
  @media only screen and (min-width: 768px){
    display:flex;
    justify-content:space-between
}
`

