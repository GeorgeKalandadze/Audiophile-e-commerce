import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
import CheckoutProductEachItem from './CheckoutProductEachItem'
import { useRef, useState,useEffect, } from 'react'
import UseOnClickOutside from '../../hooks/UseOnClickOutside'
import axiosClient from '../../axios-client'
import { useNavigate,useLocation} from 'react-router-dom'



type IsShopCartOpenType = {
  show:boolean
}

interface CartProps {
  id: number
  quantity: number
  product:{
    name:string
    price: number
    cart_image: string
  }
}



const CheckoutModal = () => {
  const {isShopCartOpen,setIsShopCartOpen,cartIconRef} = useGlobalContext()
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()
  const location = useLocation();
  

  UseOnClickOutside(ref, () => {
    setIsShopCartOpen(false)
  },cartIconRef);

  
  useEffect(() => {
    
    axiosClient.get('/cart/get-carts')
      .then(({data}) => {
        
        setCartItems(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[isShopCartOpen,cartItems])




  const totalPrice = () => {
    return cartItems.reduce((accum, next) => accum + next.product.price * next.quantity, 0).toFixed(2)
  }

  const removeAllItems = () => {
    axiosClient.delete('/cart/delete-cart')
      .then(({data}) => {
       console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const makeChackout = () => {
    axiosClient.post('/checkout')
  .then(response => {
    navigate('/checkoutForm')
      
  })
  .catch(error => {
      console.error(error);
  })
  }

 
    useEffect(() => {
      return () => {
        setIsShopCartOpen(false);
      };
    }, [location.pathname]);


  return (
    <MainDiv show={isShopCartOpen}>
        <CheckoutCard ref={ref}>
          <CheckoutCardcontainers>
              <CartQuantity >cart ({cartItems.length})</CartQuantity>
              <RemoveAllButton onClick={removeAllItems}>Remove all</RemoveAllButton>
          </CheckoutCardcontainers>
            {cartItems.map((item) => (
              <CheckoutProductEachItem 
                key={item.id} 
                id={item.id}
                quantity={item.quantity} 
                name={item.product.name}
                price={item.product.price}
                cartImage={item.product.cart_image}
                
              />
            ))}
         
          <CheckoutCardcontainers>
            <Total>TOTAL</Total>
            <TotalPrice>{totalPrice()} $</TotalPrice>
          </CheckoutCardcontainers>
          <Button bgColor='#D87D4A;' pdng='20px ' width='100%' onClick={makeChackout}>CHECKOUT</Button>
        </CheckoutCard>
    </MainDiv >
  )
}

export default CheckoutModal

const MainDiv = styled.div<IsShopCartOpenType>`
z-index:30;
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'block' : 'none'};
padding:120px 10px;
width:100%;
`

const CheckoutCard = styled.div`
padding: 20px;
background: #FFFFFF;
border-radius: 8px;
width:100%;

@media only screen and (min-width: 768px){
   width:400PX; 
   position: fixed;
    left: 70%;
   
  }

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
cursor: pointer;
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
