import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axiosClient from '../../axios-client'
import { FaCheckCircle } from 'react-icons/fa';


interface CartItem {
  id: number;
  quantity: number;
  // other properties of a cart item
}

const EachProductPage = () => {

  const {ProductName} = useParams()
  const {products,handleDecrement,handleIncrement} = useGlobalContext()

 
  const ERROR_TOAST_THEME = {
    background: "#FED7D7",
    text: "#9B2C2C",
  };

  const addCartItem = (id: number) => {
    axiosClient
      .post("/cart/add", {
        product_id: id,
        quantity: 1,
      })
      .then((response) => {
        console.log(response)
        if(response.status === 201){
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            progressStyle: { backgroundColor: "#D87D4A" },
            icon: <FaCheckCircle style={{ color: "#D87D4A" }} />,
          });
        }
      })
      .catch((error) => {
        toast.error("Cart Already added", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          progressStyle: { backgroundColor: "red" }
          });
      });
  };
  // useEffect(() => {
  //   // find the cart item for the current product
  //   const cartItem = cartAddedItems.find(item => item.product.slug === ProductName)
  //   if (cartItem) {
  //     setQuantity(cartItem.quantity)
  //     setCartItemId(cartItem.id)
  //   }
  // }, [ProductName, cartAddedItems])

  return (
    <MainContainer >
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{top:70}}
      theme="dark"
      />
      <Link to="/"><GoBackButton>Go Back</GoBackButton></Link>
      {
        products.filter((product) => product.slug == ProductName).map((fullProduct) => (
          <div key={fullProduct.id}>
            <div>
              <ProductDiv>
                <div>
                <MainProductImage src={`${import.meta.env.VITE_API_BASE_URL}/${fullProduct.cart_image}`}/>
                </div>
                <AboutProduct>
                  {fullProduct.new && <IsNewProduct>NEW PRODUCT</IsNewProduct>}
                  <EachProductName>{fullProduct.name}</EachProductName>
                  <BigText>{fullProduct.description}</BigText>
                  <ButtonContainer>
                    {/* <div>
                      <ChangeQuantityButton onClick={() => handleDecrement(fullProduct.id)}>-</ChangeQuantityButton>
                      <QuantitySpan>{quantity}</QuantitySpan>
                      <ChangeQuantityButton onClick={() => handleIncrement(7)}>+</ChangeQuantityButton>
                    </div> */}
                    <Button bgColor='#D87D4A' width='200px'  onClick={() => addCartItem(fullProduct.id)}>ADD TO CART</Button>
                  </ButtonContainer>
                  </AboutProduct>
                </ProductDiv>
                <div>
                  <SectionHeader>FEATURES</SectionHeader>
                  <BigText>{fullProduct.features}</BigText>
                </div>
                <BoxDiv>
                  <SectionHeader>in the box</SectionHeader>
                  <div>
                  {fullProduct.includes.map((box,index) => (
                    <Includes key={index}>
                      <BoxSpan>{box.quantity}x</BoxSpan>
                      <BoxItems>{box.item}</BoxItems>
                    </Includes>
                  ))}
                  </div>
                </BoxDiv>
                    
                <Images>
                    {fullProduct.product_images.map((image) => (
                       <ProductImage src={`${import.meta.env.VITE_API_BASE_URL}/${image.image_path}`}/>
                    ))}
                </Images>
            </div>
          </div>
        
        ))
      }
    </MainContainer>
  )
}

export default EachProductPage

const MainContainer = styled.div`
padding:20px;
@media only screen and (min-width: 1200px){
   padding:70px 180px;
  }
`
const ProductDiv = styled.div`
margin-top:30px;
  @media only screen and (min-width: 768px){
   display:flex;
   align-items:center;
   gap:50px;
  }

`
const MainProductImage = styled.img`
  width:100%;
  border-radius:8px;
  @media only screen and (min-width: 768px){
   width:380px;
   height:480px;
   margin-bottom:30px;
  }
  @media only screen and (min-width: 1200px){
   width:480px;
   
   margin-bottom:30px;
   
   
  }

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

const EachProductName = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
`

const BigText = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const ChangeQuantityButton = styled.button`
background: #F1F1F1;

border:none;
outline:none;
padding:10px 15px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;

`

const QuantitySpan = styled.span`
padding:10px 15px;
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
background-color:#F1F1F1;

`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

const AboutProduct = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap:20px;

  
`

const SectionHeader = styled.h1`
margin-top:60px;
margin-bottom:20px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
letter-spacing: 0.857143px;
text-transform: uppercase;
color: #000000; 
@media only screen and (min-width: 768px){
  margin-top:0px;
  }
`
const Includes = styled.div`
margin-top:10px;
display:flex;
gap:15px;
`
const BoxDiv = styled.div`
  @media only screen and (min-width: 768px){
   display:flex;
   align-items:flex-start;
   justify-content:space-between;
   margin-top:30px;
  }
`
const BoxSpan = styled.span`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
color: #D87D4A;
`

const BoxItems = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`

const Images = styled.div`
  margin-top:80px;
  display:grid;
  gap:20px;

  @media only screen and (min-width: 768px){
    gap:0px;
    column-gap:20px;
    grid-template-columns: auto auto ;
  }

 

  
`

const ProductImage = styled.img`
  border-radius:8px;
  width:100%;
  @media only screen and (min-width: 768px){
    &:nth-child(1),:nth-child(2){
      grid-column: 1/2;
     
    }
    &:nth-child(1){
      margin-bottom:20px;
     
    }
    &:last-child {
      height:100%;
      grid-column: 2/3;
      grid-row: 1 / 4;
    }
  }
`

const GoBackButton = styled.div`
margin-top:90px;
outline:none;
border:none;
font-family: 'Manrope';
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
`



