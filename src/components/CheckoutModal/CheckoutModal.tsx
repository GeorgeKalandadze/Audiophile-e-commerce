import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
import CheckoutProductEachItem from './CheckoutProductEachItem'
import { Link} from 'react-router-dom'
import { useRef, useState } from 'react'
import UseOnClickOutside from '../../hooks/UseOnClickOutside'

type IsShopCartOpenType = {
  show:boolean
}
const CheckoutModal = () => {
  const {cartItems,totalPrice, removeAllItems,isShopCartOpen,setIsShopCartOpen} = useGlobalContext()

  const ref = useRef<HTMLDivElement>(null);

  UseOnClickOutside(ref, () => {
    setIsShopCartOpen(false)
  });


  return (
    <MainDiv show={isShopCartOpen}>
     
        <CheckoutCard ref={ref}>
          <CheckoutCardcontainers>
              <CartQuantity >cart ({cartItems.length})</CartQuantity>
              <RemoveAllButton onClick={removeAllItems}>Remove all</RemoveAllButton>
          </CheckoutCardcontainers>
            {cartItems.map((item) => (
              <CheckoutProductEachItem key={item.id} {...item}/>
            ))}
         
          <CheckoutCardcontainers>
            <Total>TOTAL</Total>
            <TotalPrice>{totalPrice} $</TotalPrice>
          </CheckoutCardcontainers>
          <Link to="/checkoutform"><Button bgColor='#D87D4A;' pdng='20px ' width='100%'>CHECKOUT</Button></Link>
        </CheckoutCard>
    </MainDiv >
  )
}

export default CheckoutModal

const MainDiv = styled.div<IsShopCartOpenType>`
z-index:30;
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'block' : 'none'};
padding:120px 10px;
width:100%;


`

const CheckoutCard = styled.div`
padding: 20px;
background: #FFFFFF;
border-radius: 8px;
width:100%;

@media only screen and (min-width: 768px){
   width:400PX; 
   position: fixed;
    left: 70%;
   
  }

`

const CheckoutCardcontainers= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:40px;
`

const CartQuantity = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
letter-spacing: 1.28571px;
text-transform: uppercase;
color: #000000; 
`

const RemoveAllButton = styled.button`
border:none;
outline:none;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
text-decoration-line: underline;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
background-color:transparent;
cursor: pointer;
`



const Total = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
`

const TotalPrice = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
text-transform: uppercase;
color: #000000;
`
