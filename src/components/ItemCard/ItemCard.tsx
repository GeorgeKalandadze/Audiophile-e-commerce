import React from 'react'
import styled from 'styled-components'
import TestImage from '../../assets/cart/image-xx99-mark-two-headphones.jpg'
import { Button } from '../Button/Button'

type ItemsProps = {
    itemImage:string
    productName:string
    productText:string
    isNew:boolean
}
const ItemCard = ({itemImage,productName,productText,isNew}: ItemsProps) => {
  return (
    <Container>
        <Container>
            <ItemImg src={itemImage} alt="" />
            <TextsContainer>
                {isNew && <IsNewProduct>NEW PRODUCT</IsNewProduct>}
                <ProductName>{productName}</ProductName>
                <BigText>{productText}</BigText>
                <Button bgColor='#d87d4a' pdng='15px 30px'>See Product</Button>
            </TextsContainer>
        </Container>
    </Container>
  )
}

export default ItemCard

const Container = styled.div`
margin-top:30px;
padding:10px;
`

const ItemImg = styled.img`
width:100%;
border-radius: 8px;
`

const TextsContainer = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
gap:20px;
text-align:center;
align-items:center;
`

const IsNewProduct = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 10px;
text-transform: uppercase;
color: #D87D4A;
`

const ProductName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
`

const BigText = styled.p`
opacity: .5;
`