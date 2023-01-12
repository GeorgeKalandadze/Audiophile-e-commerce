import React from 'react'
import styled from 'styled-components'

type HeaderProp = {
    headerText:string
}
const Header = ({headerText}:HeaderProp) => {
  return (
    <HeaderCont>
        {headerText}
    </HeaderCont>
  )
}

export default Header


const HeaderCont = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;
color: #FFFFFF;
background-color:black;
padding:30px 20px; 

`