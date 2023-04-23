import { Button } from '../../components/Button/Button';
import './homePage.css';
import SpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphoneProductImg from '../../assets/home/desktop/image-earphones-yx1.jpg'
import PersonCard from '../../components/PersonCard/PersonCard';
import Footer from '../../components/Footer/Footer';
import CategoriesCards from '../../components/CategoriesCards/CategoriesCards';
import { Link } from 'react-router-dom';
import LogoutModal from '../../components/LogoutModal/LogoutModal';
import { useGlobalContext } from '../../context';

const HomePage = () => {
  const {isLogoutModal} = useGlobalContext();
  
  return (
    <div className={"home-page-main-conatiner "}
    >
      {isLogoutModal && <LogoutModal/>}
      <div className="home-page">
        <div className='home-page-texts'>
          <h2>NEW PRODUCT</h2>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p className='description'>
            Experience natural, lifelike audio and 
            exceptional build quality made for the 
            passionate music enthusiast.
          </p>
          {/* <Button  bgColor="#D87D4A;" pdng="15px 20px">See Products</Button> */}
          <Link to = "/xx99-mark-two-headphones"><Button  bgColor="#D87D4A;" pdng="15px 30px">See Products</Button></Link>
        </div>
      </div>
      <div>
        <CategoriesCards/>
      </div>
      <div className='products-container'>
        <div className='first-product'>
          <img src={SpeakerImg} alt="" />
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are 
            phenomenally built to deliver truly 
            remarkable sound.
          </p>
          <Link to={"/zx9-speaker"}><Button pdng='15px 25px'>See Product</Button></Link>
        </div>
        <div className='second-product'>
          <h1>ZX7 SPEAKER</h1>
          <Link to={"/zx7-speaker"}>
          <Button 
            pdng='15px 25px' 
            bgColor='transparent' 
            border='2px solid black'
            color='black'
          >
              See Product
            </Button>
          </Link>
        </div>
        <div className='yx-earphone-cont'>
        <img src={EarphoneProductImg} className="earphone-product-img"/>
        <div className='last-child'>
          <h1>YX1 EARPHONES</h1>
          <Link to={"/yx1-earphones"}>
          <Button 
            pdng='15px 25px' 
            bgColor='transparent' 
            border='2px solid black'
            color='black'
          >
              See Product
            </Button>
          </Link>
        </div>
        </div>
        
      </div>
      <PersonCard/>
      <Footer/>
    </div>
  )
}

export default HomePage