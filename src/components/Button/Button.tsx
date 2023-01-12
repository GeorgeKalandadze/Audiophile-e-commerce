import styled from "styled-components";

interface ButtonStyleProps {
    bgColor?:string
    pdng?:string
    border?:string
    color?:string
}

const ButtonStyle = styled.button<ButtonStyleProps>`

background-color:${prop => prop.bgColor || "black"};
color:${prop => prop.color || "white"};
padding:${prop => prop.pdng || "10px 25px"};
font-size:16px;
font-weight:500;
outline:none;
border:${prop => prop.border || "none"};
font-size: 13px;
font-weight: 700;
letter-spacing: 1px;
line-height: 18px;
`

export const Button = ButtonStyle