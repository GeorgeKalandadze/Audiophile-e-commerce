import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import productsData from '../../data.json'
import axiosClient from '../../axios-client'

type CartItemProps = {
    id:number
    quantity:number
    name:string
    price: number
    cartImage: string
}

interface CartItem {
  id: number;
  quantity: number;
  // other properties of a cart item
}



const CheckoutProductEachItem = ({price,cartImage,name,id,quantity}:CartItemProps) => {
  const {increaseCartQuantity, decreaseCartQuantity} = useGlobalContext()
  const [cart, setCart] = useState<CartItem[]>([])
  // const item = productsData.find(i => i.id === id)

  const handleDecrement = (cart_id:number) => {
    setCart(cart => 
      cart.map((item) => 
      cart_id === item.id ? {...item, quantity:item.quantity - (item.quantity > 1 ? 1:0)}:item)
      )
      updateCartQuantity(cart_id,"dec")
  }

  const handleIncrement= (cart_id:number) => {
    setCart(cart => 
      cart.map((item) => 
      cart_id === item.id ? {...item, quantity:item.quantity + 1}:item)
      )
      updateCartQuantity(cart_id,"inc")
  }

  const updateCartQuantity = (cart_id: number, scope: string) => {
    axiosClient.put(`/cart/update-quantity/${cart_id}/${scope}`)
    .then(response => {
      console.log(response.data);
    })
  }


  return (
    <CheckoutCardcontainers>
        <ProductDiv>
        <Img src={`${import.meta.env.VITE_API_BASE_URL}/${cartImage}`}/>
        <div>
            <Title>{name}</Title>
            <Price>{price}</Price>
        </div>
        </ProductDiv>
        <div>
            <ChangeQuantityButton onClick={() => handleDecrement(id)}>-</ChangeQuantityButton>
            <QuantitySpan>{quantity}</QuantitySpan>
            <ChangeQuantityButton onClick={() => handleIncrement(id)}>+</ChangeQuantityButton>
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