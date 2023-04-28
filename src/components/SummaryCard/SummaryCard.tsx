import React, { useState } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import productsData from '../../data.json'
import { Button } from '../Button/Button'
import PurchaseModal from '../PurchaseModal/PurchaseModal'
import axiosClient from '../../axios-client'

type HandleSubmitType = {
  handleSubmit:any
  errors:any
}
const SummaryCard = ({handleSubmit,errors}:HandleSubmitType) => {

  const {cartItems, makeOrder} = useGlobalContext()
  const [purchaseModal, setPurchaseModal] = useState(false)

  const onFormSubmit = () => {
    if(errors = {}){
      setPurchaseModal(true)
    }
  }

  
  
  return (
    <MainDiv>
      {purchaseModal && <PurchaseModal isShow={purchaseModal}/>}
      <Header>summary</Header>
      {
        cartItems.map((items) => {
          const item = productsData.find((item) => item.id === items.id)
          return(
            <SummaryDiv key={item?.id}>
            <ProductDiv>
              <ProductImage src={item?.image.desktop}/>
              <div>
                <ProductName>{item?.name}</ProductName>
                <Price>$ {item?.price}</Price>
              </div>
            </ProductDiv>
            <Quantity>{items.quantity} x</Quantity>
          </SummaryDiv>
          )
       
        })
      }
      <SummaryDiv>
        <GrayText>TOTAL</GrayText>
        <BoldText>$ {}</BoldText>
      </SummaryDiv>
      <SummaryDiv>
        <GrayText>SHIPPING</GrayText>
        <BoldText>$ 50</BoldText>
      </SummaryDiv>
      <SummaryDiv>
        <GrayText>VAT (INCLUDED)</GrayText>
        <BoldText>$ 1,060</BoldText>
      </SummaryDiv>
      <SummaryDiv>
        <GrayText>GRAND TOTAL</GrayText>
        <BoldText>$ { + 50}</BoldText>
      </SummaryDiv>
      <Button type='submit' bgColor='#D87D4A;' pdng='20px ' width='100%' onClick={makeOrder}>CONTINUE & PAY</Button>
     
    </MainDiv>
  )
}

export default SummaryCard

const Header = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
letter-spacing: 1.28571px;
text-transform: uppercase;
color: #000000;
margin-bottom:25px;
 
`

const MainDiv = styled.div`
margin-top:30px;
padding:15px;
background: #FFFFFF;
border-radius: 8px;
@media only screen and (min-width: 1200px){
   padding:70px;
  height:612px;
  }

`

const SummaryDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:20px;
@media only screen and (min-width: 1200px){
   padding:5px;
  }
`

const ProductDiv = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`

const ProductImage = styled.img`
width:64px;
height:64px;
background: #F1F1F1;
border-radius: 8px;
`

const ProductName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
  
`

const Price = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;  
`

const Quantity = styled.p`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
text-align: right;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
`

const GrayText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
`

const BoldText = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: right;
text-transform: uppercase;
color: #000000;  
`


