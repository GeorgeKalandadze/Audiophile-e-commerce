import {useNavigate} from "react-router-dom"
import { Button } from '../../components/Button/Button';



const SignIn = () => {
  const navigate = useNavigate();
  
  
  return (
    <div className='form-container'>
    <div className='form'>
    <form >
        <h1>Login</h1>
        <input className='signinup-input'  name="email"  placeholder={"Gmail"} />
        <input className='signinup-input' name="password" placeholder={"Password"} />
        <Button width='100%' bgColor='#D87D4A' pdng='15px 25px'>Log In</Button>
        <p onClick={() => navigate('/signup')}  className='form-type-text'>Don’t have an account? <span style={{color:"#D87D4A"}}>Sign Up</span></p>
    </form>
    </div>
    </div>
  )
}

export default SignIn