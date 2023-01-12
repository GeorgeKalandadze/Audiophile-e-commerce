import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../../assets/shared/desktop/icon-arrow-right.svg'
import { Link } from 'react-router-dom'

type CategoryCardTypes = {
    categoryType:string
    img:string
    page:string
}
const CategoriesCard = ({categoryType,img,page}:CategoryCardTypes) => {
  return (
    <MainDiv>
        <CardDiv>
            <ProductImg src={img}/>
            <ProductType>{categoryType}</ProductType>
            <ButtonContainer>
                <StyledLink to={page}>SHOP</StyledLink>
                <img src={ArrowIcon} alt=""/>
            </ButtonContainer>
        </CardDiv>
    </MainDiv>
  )
}

export default CategoriesCard


const MainDiv = styled.div`
margin-top:70px;
padding:20px;
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

