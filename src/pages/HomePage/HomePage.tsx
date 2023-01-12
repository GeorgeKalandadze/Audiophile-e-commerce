import { Button } from '../../components/Button/Button';
import './homePage.css';
import SpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphoneProductImg from '../../assets/home/desktop/image-earphones-yx1.jpg'
import PersonCard from '../../components/PersonCard/PersonCard';
import Footer from '../../components/Footer/Footer';
import CategoriesCards from '../../components/CategoriesCards/CategoriesCards';

const HomePage = () => {
  return (
    <div className={"home-page-main-conatiner"}
    >
      <div className="home-page">
        <div className='home-page-texts'>
          <h2>NEW PRODUCT</h2>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and 
            exceptional build quality made for the 
            passionate music enthusiast.
          </p>
          {/* <Button  bgColor="#D87D4A;" pdng="15px 20px">See Products</Button> */}
          <Button  bgColor="#D87D4A;" pdng="15px 30px">See Products</Button>
        </div>
      </div>
      <div>
        <CategoriesCards/>
      </div>
      <div className='products-container'>
        <div>
          <img src={SpeakerImg} alt="" />
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are 
            phenomenally built to deliver truly 
            remarkable sound.
          </p>
          <Button pdng='15px 25px'>See Product</Button>
        </div>
        <div>
          <h1>ZX7 SPEAKER</h1>
          <Button 
            pdng='15px 25px' 
            bgColor='transparent' 
            border='2px solid black'
            color='black'
          >
              See Product
            </Button>
        </div>
        <img src={EarphoneProductImg} className="earphone-product-img"/>
        <div>
          <h1>YX1 EARPHONES</h1>
          <Button 
            pdng='15px 25px' 
            bgColor='transparent' 
            border='2px solid black'
            color='black'
          >
              See Product
            </Button>
        </div>
      </div>
      <PersonCard/>
      <Footer/>
    </div>
  )
}

export default HomePage