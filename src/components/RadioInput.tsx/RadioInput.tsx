
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
const RadioInput = () => {
  const {customerErrors = {},customer,handleCustomersData} = useGlobalContext();

  console.log(customer);
  return (
    <div>
        <RadioInputContainer>
            <Radio type="radio" name='payment_details' value="e-Money" checked={customer.payment_details === "e-Money"} onChange={handleCustomersData}/>
            <Label>e-Money</Label>
        </RadioInputContainer>
        <RadioInputContainer>
            <Radio type="radio" name='payment_details' value="e-Money PIN" checked={customer.payment_details === "e-Money PIN"} onChange={handleCustomersData}/>
            <Label>Cash on Delivery</Label>
        </RadioInputContainer>
    </div>
    
  )
}

export default RadioInput

const RadioInputContainer = styled.div`
width:100%;
border: 1px solid #CFCFCF;
border-radius: 8px;
padding:15px 25px;  
display:flex;
gap:10px;
margin-bottom:15px
`

const Label = styled.label`

font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
letter-spacing: -0.25px;
color: #000000;

`

const Radio = styled.input`

`



