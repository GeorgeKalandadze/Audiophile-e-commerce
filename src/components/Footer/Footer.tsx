import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/shared/desktop/logo.svg'
import FaceBookIcon from '../../assets/shared/desktop/icon-facebook.svg'
import TwitterIcon from '../../assets/shared/desktop/icon-twitter.svg'
import InstagramIcon from '../../assets/shared/desktop/icon-instagram.svg'




const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo}/>
      <LinksContainer>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/headpones">HEADPHONES</StyledLink>
        <StyledLink to="/speakers">SPEAKERS</StyledLink>
        <StyledLink to="/earphones">EARPHONES</StyledLink>
      </LinksContainer>
      <TextsDiv>
        <Text>
          Audiophile is an all in one stop to fulfill your audio needs. 
          We're a small team of music lovers and sound specialists who 
          are devoted to helping you get the most out of personal audio. 
          Come and visit our demo facility - we’re open 7 days a week.
        </Text>
        <Text>
          Copyright 2021. All Rights Reserved
        </Text>
        </TextsDiv>
      <IconsContainer>
        <img src={FaceBookIcon}/>
        <img src={TwitterIcon}/>
        <img src={InstagramIcon}/>
      </IconsContainer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  margin-top:50px;
  background-color: #101010;
  padding:50px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:30px;
  @media only screen and (min-width: 768px){
    align-items:flex-start
  }

  @media only screen and (min-width: 120px){
    padding: 70px 150px;
  }
`

const StyledLink = styled(Link)`
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 25px;
letter-spacing: 2px;
text-transform: uppercase;
color: #FFFFFF;
text-decoration:none;

`

const TextsDiv = styled.div`
  display:flex;
  flex-direction:column;
  @media only screen and (min-width: 768px){
    height:100%;
    justify-content:space-between;
  }
`

const Text = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.5;

@media only screen and (min-width: 768px){
    text-align:left;
}
`

const LinksContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
gap:20px;
@media only screen and (min-width: 768px){
    flex-direction:row
}
`

const IconsContainer = styled.div`
  display:flex;
  gap:20px;
  
  @media only screen and (min-width: 768px){
    width:100%;
    justify-content:flex-end
}
`
