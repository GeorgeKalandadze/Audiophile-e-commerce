import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Button/Button'

type ItemsProps = {
    itemImage:string
    productName:string
    productText:string
    isNew:boolean
    slug:string
}
const ItemCard = ({itemImage,productName,productText,isNew,slug}: ItemsProps) => {
  return (
    <Container className='some'>
        
            <ItemImg src={`${import.meta.env.VITE_API_BASE_URL}/${itemImage}`} alt="" />
            <TextsContainer>
                {isNew && <IsNewProduct>NEW PRODUCT</IsNewProduct>}
                <ProductName>{productName}</ProductName>
                <BigText>{productText}</BigText>
                <Link to={`/${slug}`}><Button bgColor='#d87d4a' pdng='15px 30px'>See Product</Button></Link>
            </TextsContainer>
        
    </Container>
  )
}

export default ItemCard

const Container = styled.div`

@media only screen and (min-width: 768px){
  margin-top:10px;
}

@media only screen and (min-width: 1200px){
     display:flex;
     align-items:center;
     gap:40px;

}


`

const ItemImg = styled.img`
width:100%;
border-radius: 8px;
@media only screen and (min-width: 1200px){
  width:50%;
  height:500px
}
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

letter-spacing: 10px;
text-transform: uppercase;
color: #D87D4A;
`

const ProductName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;

letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
`

const BigText = styled.p`
opacity: .5;
`