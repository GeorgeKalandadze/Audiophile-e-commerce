import React from 'react'
import styled from 'styled-components'
import PersonAvatar from '../../assets/shared/desktop/image-best-gear.jpg'
const PersonCard = () => {
  return (
    <MainDiv>
        <PersonCardDiv>
            <PersonImg src={PersonAvatar}/>
            <TextsDiv>
                <BigText>Bringing you the <StyledSpan>best</StyledSpan> audio gear</BigText>
                <SmallText>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our 
                    store to meet some of the fantastic people who make Audiophile the best place to buy your 
                    portable audio equipment.
                </SmallText>
            </TextsDiv>
        </PersonCardDiv>
    </MainDiv>
  )
}

export default PersonCard

const MainDiv = styled.div`
padding:20px;
margin-right:30px;
@media only screen and (min-width: 1200px){
    padding: 0px 150px;
    margin-right:0px;
    margin-top:70px;
}
`
const PersonCardDiv = styled.div`
@media only screen and (min-width: 1200px){
    display:flex;
    align-items:center;
    gap:80px;
}
`

const PersonImg = styled.img`
width:100%;
border-radius:8px;
@media only screen and (min-width: 768px){
    height:423px; 
}

@media only screen and (min-width: 1200px){
    height:523px; 
    width:50%;
}


`

const TextsDiv = styled.div`
text-align: center;
margin-top:30px;
@media only screen and (min-width: 1200px){
    width:50%;
    text-align:left;
}

`

const BigText = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;

letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
`

const StyledSpan = styled.span`
color:#D87D4A;
`

const SmallText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;

color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
margin-top:30px;
`