import React, {useState} from "react";
import './navbar.css'
import Logo from '../../assets/shared/desktop/logo.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { useGlobalContext } from "../../context";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import HeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import SpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import EarphoneImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

const Navbar = () => {
   
    const {isMenuClicked,setIsMenuClicked} = useGlobalContext();
    const className = isMenuClicked ? 'burger-bar clicked' : 'burger-bar';


    console.log(isMenuClicked)
    return(
        <div style={{width: '100%'}}>
            <nav>
                <div className="burger-menu" onClick={() => setIsMenuClicked(!isMenuClicked)}>
                    <div className={className} ></div>
                    <div className={className} ></div>
                    <div className={className} ></div>
                </div>
                <img src={Logo} className="logo"/>
                <img src={CartIcon} className="cart-icon"/>
            </nav>
            <div className={isMenuClicked ? 'sidebar-bar open' : 'side-bar'}>
                <CategoriesCard categoryType={"HEADHPONES"} img={HeadphoneImg} page='/headphones'/>
                <CategoriesCard categoryType={"SPEAKERS"} img={SpeakerImg} page='/speakers'/>
                <CategoriesCard categoryType={"EARPHONES"} img={EarphoneImg} page='/earphones'/>
            </div>
        </div>
    )
}

export default Navbar