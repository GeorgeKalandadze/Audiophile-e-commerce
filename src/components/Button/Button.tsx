import styled from "styled-components";

interface ButtonStyleProps {
    bgColor?:string
    pdng?:string
    border?:string
    color?:string
    width?:string
    brdRadius?:string
    hover?:string
}

const ButtonStyle = styled.button<ButtonStyleProps>`
cursor: pointer;
width:${prop => prop.width || null};
background-color:${prop => prop.bgColor || "black"};
color:${prop => prop.color || "white"};
padding:${prop => prop.pdng || "10px 25px"};
font-size:16px;
font-weight:500;
outline:none;
border:${prop => prop.border || "none"};
border-radius:${prop => prop.brdRadius || "0px"};
font-size: 13px;
font-weight: 700;
letter-spacing: 1px;
line-height: 18px;
transition:0.2s;
&:hover {
    background-color:${prop => prop.hover || ""};;
  }
`

export const Button = ButtonStyle