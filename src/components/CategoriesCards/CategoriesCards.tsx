import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../assets/shared/desktop/icon-arrow-right.svg'
import { Link } from 'react-router-dom'
import HeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphoneImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'


const CategoriesCards = () => {
  return (
    <MainDiv>
        <CardDiv>
            <ProductImg src={HeadphoneImg}/>
            <ProductType>HEADPHONES</ProductType>
            <ButtonContainer>
                <StyledLink to='/headphones'>SHOP</StyledLink>
                <img src={ArrowIcon} alt=""/>
            </ButtonContainer>
        </CardDiv>
        <CardDiv>
            <ProductImg src={SpeakerImg}/>
            <ProductType>SPEAKERS</ProductType>
            <ButtonContainer>
                <StyledLink to='/speakers'>SHOP</StyledLink>
                <img src={ArrowIcon} alt=""/>
            </ButtonContainer>
        </CardDiv>
        <CardDiv>
            <ProductImg src={EarphoneImg}/>
            <ProductType>EARPHONES</ProductType>
            <ButtonContainer>
                <StyledLink to='/earphones'>SHOP</StyledLink>
                <img src={ArrowIcon} alt=""/>
            </ButtonContainer>
        </CardDiv>
    </MainDiv>
  )
}

export default CategoriesCards


const MainDiv = styled.div`
margin-top:70px;
padding:20px;
gap:80px;
display:flex;
flex-direction:column
`

const CardDiv = styled.div`

position: relative;
background: #F1F1F1;
border-radius: 8px;
height:165px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-end;
padding:15px;
`

const ProductType = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
text-align: center;
letter-spacing: 1.07143px;
text-transform: uppercase;
color: #000000;
margin-bottom:10px;
`

const ButtonContainer = styled.div`
gap:20px;
`

const StyledLink = styled(Link)`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
text-decoration:none;
margin-right:7px;
text-decoration:none
`

const ProductImg = styled.img`
width:120px;
height:120px;
position:absolute;
top:0;
left:50%;
transform:translate(-50%,-50%)
`
