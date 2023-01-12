import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'

const EachProductPage = () => {
  const [quantity, setQuantity] = useState<number>(0)
  const {ProductName} = useParams()
  const {productsData} = useGlobalContext()

  return (
    <MainContainer>
      {
        productsData.filter((product) => product.name == ProductName).map((fullProduct) => (
          <div>
            <div>
              <ProductImage src={fullProduct.image.desktop}/>
              <AboutProduct>
                {fullProduct.new && <IsNewProduct>NEW PRODUCT</IsNewProduct>}
                <EachProductName>{fullProduct.name}</EachProductName>
                <BigText>{fullProduct.description}</BigText>
                <ButtonContainer>
                  <div>
                    <ChangeQuantityButton onClick={() => setQuantity(quantity=> quantity - 1)}>-</ChangeQuantityButton>
                    <QuantitySpan>{quantity}</QuantitySpan>
                    <ChangeQuantityButton onClick={() => setQuantity(quantity=> quantity + 1)}>+</ChangeQuantityButton>
                  </div>
                  <Button bgColor='#D87D4A'>ADD TO CART</Button>
                </ButtonContainer>
                </AboutProduct>
                <div>
                  <SectionHeader>FEATURES</SectionHeader>
                  <BigText>{fullProduct.features}</BigText>
                </div>
                <div>
                  <SectionHeader>in the box</SectionHeader>
                  <div>
                  {fullProduct.includes.map((box) => (
                    <Includes>
                      <BoxSpan>{box.quantity}x</BoxSpan>
                      <BoxItems>{box.item}</BoxItems>
                    </Includes>
                  ))}
                  </div>
                  <Images>
                      <ProductImage src={fullProduct.gallery.first.desktop}/>
                      <ProductImage src={fullProduct.gallery.second.desktop}/>
                      <ProductImage src={fullProduct.gallery.third.desktop}/>
                  </Images>
                </div>
            </div>
          </div>
        
        ))
      }
    </MainContainer>
  )
}

export default EachProductPage

const MainContainer = styled.div`
  padding:20px;
`

const ProductImage = styled.img`
  width:100%;
  border-radius:8px;
`

const IsNewProduct = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
letter-spacing: 10px;
text-transform: uppercase;
color: #D87D4A;
`

const EachProductName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
`

const BigText = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const ChangeQuantityButton = styled.button`
background: #F1F1F1;
border:none;
outline:none;
padding:10px 15px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
opacity: 0.25;
`

const QuantitySpan = styled.span`
padding:10px 15px;
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

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

const AboutProduct = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap:20px;
`

const SectionHeader = styled.h1`
margin-top:60px;
margin-bottom:20px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
letter-spacing: 0.857143px;
text-transform: uppercase;
color: #000000; 
`
const Includes = styled.div`
margin-top:10px;
display:flex;
gap:15px;
`

const BoxSpan = styled.span`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
color: #D87D4A;
`

const BoxItems = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const Images = styled.div`
  margin-top:80px;
  display:grid;
  gap:20px;
`

