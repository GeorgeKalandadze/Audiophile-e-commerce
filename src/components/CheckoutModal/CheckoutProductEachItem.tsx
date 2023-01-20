import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import productsData from '../../data.json'

type CartItemProps = {
    id:number
    quantity:number
}

const CheckoutProductEachItem = ({id, quantity}:CartItemProps) => {
  const {increaseCartQuantity, decreaseCartQuantity} = useGlobalContext()
  const item = productsData.find(i => i.id === id)
  return (
    <CheckoutCardcontainers>
        <ProductDiv>
        <Img src={item?.image.desktop}/>
        <div>
            <Title>{item?.name}</Title>
            <Price>{item?.price}</Price>
        </div>
        </ProductDiv>
        <div>
            <ChangeQuantityButton onClick={() => decreaseCartQuantity(id)}>-</ChangeQuantityButton>
            <QuantitySpan>{quantity}</QuantitySpan>
            <ChangeQuantityButton onClick={() => increaseCartQuantity(id)}>+</ChangeQuantityButton>
        </div>
    </CheckoutCardcontainers>
  )
}

export default CheckoutProductEachItem

const CheckoutCardcontainers= styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:40px;
`

const Img = styled.img`
  width:64px;
  height:64px;
  border-radius: 8px;
`

const Title = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
color: #000000;
`

const Price = styled.p`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
`

const ProductDiv = styled.div`
  display: flex;
  align-items:center;
  gap:20px;
`

const ChangeQuantityButton = styled.button`
background-color:#F1F1F1;
border:none;
outline:none;
padding:10px 10px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;

`

const QuantitySpan = styled.span`
padding:10px 10px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
background-color:#F1F1F1;
`