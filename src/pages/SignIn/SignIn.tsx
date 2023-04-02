import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';
import FormInputWave from "../../components/FormInputWave/FormInputWave";



const SignIn = () => {
  const navigate = useNavigate();
  
  
  return (
    <div className='form-container'>
    <div className='form'>
    <form >
        <h1>Login</h1>
        <FormInputWave id="name" label="Name" type="text" />
        <FormInputWave id="email" label="Email" type="email" />
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px'>Log In</Button>
        <p onClick={() => navigate('/signup')}  className='form-type-text'>Don’t have an account? <span style={{color:"#D87D4A"}}>Sign Up</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignIn