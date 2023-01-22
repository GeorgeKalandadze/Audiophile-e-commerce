import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
import CheckoutProductEachItem from './CheckoutProductEachItem'
import { Link} from 'react-router-dom'
const CheckoutModal = () => {
  const {cartItems,totalPrice, removeAllItems} = useGlobalContext()



  return (
    <MainDiv >
        <CheckoutCard>
          <CheckoutCardcontainers>
              <CartQuantity >cart ({cartItems.length})</CartQuantity>
              <RemoveAllButton onClick={removeAllItems}>Remove all</RemoveAllButton>
          </CheckoutCardcontainers>
            {cartItems.map((item) => (
              <CheckoutProductEachItem key={item.id} {...item}/>
            ))}
         
          <CheckoutCardcontainers>
            <Total>TOTAL</Total>
            <TotalPrice>{totalPrice} $</TotalPrice>
          </CheckoutCardcontainers>
          <Link to="/checkoutform"><Button bgColor='#D87D4A;' pdng='20px ' width='100%'>CHECKOUT</Button></Link>
        </CheckoutCard>
    </MainDiv >
  )
}

export default CheckoutModal

const MainDiv = styled.div`
padding:30px 10px;
position:absolute;
width:100%;
`

const CheckoutCard = styled.div`
padding: 20px;
background: #FFFFFF;
border-radius: 8px;
width:100%;

`

const CheckoutCardcontainers= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:40px;
`

const CartQuantity = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
letter-spacing: 1.28571px;
text-transform: uppercase;
color: #000000; 
`

const RemoveAllButton = styled.button`
border:none;
outline:none;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
text-decoration-line: underline;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
background-color:transparent;
`



const Total = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5; 
`

const TotalPrice = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
text-transform: uppercase;
color: #000000;
`
