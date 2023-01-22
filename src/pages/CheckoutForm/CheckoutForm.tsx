import React from 'react'
import styled from 'styled-components'
import RadioInput from '../../components/RadioInput.tsx/RadioInput'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import TextInput from '../../components/TextInputs/TextInput'

const CheckoutForm = () => {
  return (
    <MainDiv>
      <InputForm>
        <FormHeader>CHECKOUT</FormHeader>
        <FormSectionHeader>Billing details</FormSectionHeader>
        <TextInput placeholder='Alexei Ward' inputType='text' label='name'/>
        <TextInput placeholder='alexei@mail.com' inputType='email' label='Email Address'/>
        <TextInput placeholder='+1 202-555-0136' inputType='number' label='Phone Number'/>
        <TextInput placeholder='Alexei Ward' inputType='text' label='name'/>

        <FormSectionHeader>shipping info</FormSectionHeader>

        <TextInput placeholder='1137 Williams Avenue' inputType='text' label='Your Address'/>
        <TextInput placeholder='10001' inputType='number' label='ZIP Code'/>
        <TextInput placeholder='New York' inputType='text' label='City'/>
        <TextInput placeholder='United States' inputType='text' label='Country'/>

        <FormSectionHeader>payment details</FormSectionHeader>
        <RadioInput/>
        <TextInput placeholder='238521993' inputType='number' label='e-Money Number'/>
        <TextInput placeholder='6891' inputType='number' label='e-Money PIN'/>
      </InputForm>
      <SummaryCard/>
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

