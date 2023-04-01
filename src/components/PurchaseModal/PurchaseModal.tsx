import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IconConfirmation from '../../assets/checkout/icon-order-confirmation.svg'
import { useGlobalContext } from '../../context'
import productsData from '../../data.json'
import { Button } from '../Button/Button'

type IsShowPurchaseModal = {
    isShow:boolean
}
const PurchaseModal = ({isShow}:IsShowPurchaseModal) => {
  const {cartItems, totalPrice} = useGlobalContext();
  const [visibleAllCard, setVisibleAllCard] = useState<number>(1);

  const showAllItems = () => {
    setVisibleAllCard(cartItems.length)
  }

  return (
    <MainDiv isShow={isShow}>
        <PurchaseCard>
            <img src={IconConfirmation}/>
            <BigText>THANK YOU FOR YOUR ORDER</BigText>
            <SmallText>You will receive an email confirmation shortly.</SmallText>
            <AllProductContainer >
            {
                cartItems.slice(0, visibleAllCard).map((items) => {
                    const item = productsData.find((item) => item.id === items.id)
                    return (
                        <MainProductDiv>
                            <ProductDiv >
                                <Img src={item?.image.desktop}/>
                                <div>
                                    <Title>{item?.name}</Title>
                                    <Price>{item?.price}</Price>
                                </div>
                            </ProductDiv>
                            <ProductQuantity>{items.quantity} x</ProductQuantity>
                        </MainProductDiv>
                        
                    )
                })
            }
            <ShowAllBtn onClick={() => showAllItems()}>and {cartItems.length !== 0 ? cartItems.length - 1:0} other item(s)</ShowAllBtn>
            </AllProductContainer>
            <TotalPriceContainer>
                <GrandTotal>GRAND TOTAL</GrandTotal>
                <TotalPrice>${totalPrice}</TotalPrice>
            </TotalPriceContainer>
            <Link to="/"><Button width='100%' pdng='15px 25px' bgColor='#D87D4A'>BACK TO HOME</Button></Link>
        </PurchaseCard>
    </MainDiv>
  )
}

export default PurchaseModal


const MainDiv = styled.div<IsShowPurchaseModal>`

z-index:30;
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isShow ? 'block' : 'none'};
padding:20px 10px;
width:100%;

@media only screen and (min-width: 768px){
   display:flex;
   align-items:center;
   justify-content:center;
  }
`

const PurchaseCard = styled.div`
padding: 15px;
background: #FFFFFF;
border-radius: 8px;
max-width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
margin-bottom:50px;

@media only screen and (min-width: 768px){
   width:400PX; 
   position: fixed;
   margin:auto;
  }
`

const BigText = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.857143px;
text-transform: uppercase;
color: #000000;
margin-top:10px;
`

const SmallText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
margin-top:10px;
margin-bottom:10px;
`

const Img = styled.img`
width:40px;
height:40px;
`
const AllProductContainer = styled.div`
gap:20px;
background: #F1F1F1;
width:100%;
padding:15px;
border-top-left-radius:8px;
border-top-right-radius:8px;
display:flex;
flex-direction:column;

`
const MainProductDiv = styled.div`
background-color:#F1F1F1;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const ProductDiv = styled.div`
display:flex;
align-items:center;
gap:10px;

`
const Title = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
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

const ProductQuantity = styled.p`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
text-align: right;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const ShowAllBtn = styled.button`
margin-top:10px;
border:none;
outline:none;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.214286px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const TotalPriceContainer = styled.div`
width:100%;
background: #000000;
border-radius: 0px 0px 8px 8px;
padding:15px;
margin-bottom:15px;
`

const GrandTotal = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.5;  
`

const TotalPrice = styled.h1`
margin-top:10px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-transform: uppercase;
color: #FFFFFF;
`


