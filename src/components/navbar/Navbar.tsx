import React, {useState,useEffect} from "react";
import './navbar.css'
import Logo from '../../assets/shared/desktop/logo.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { useGlobalContext } from "../../context";
import CategoriesCards from "../CategoriesCards/CategoriesCards";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const {isMenuClicked,setIsMenuClicked,openShopCartModal} = useGlobalContext();
    const className = isMenuClicked ? 'burger-bar clicked' : 'burger-bar';

    const location = useLocation();

    useEffect(() => {
        setIsMenuClicked(false);
    }, [location.pathname]);

    return(
        <div style={{width: '100%'}}>
            <nav>
                <div className="burger-menu" onClick={() => setIsMenuClicked(!isMenuClicked)}>
                    <div className={className} ></div>
                    <div className={className} ></div>
                    <div className={className} ></div>
                </div>
                <img src={Logo} className="logo"/>
                <img src={CartIcon} className="cart-icon" onClick={() => openShopCartModal()}/>
            </nav>
            <div className={isMenuClicked ? 'sidebar-bar open' : 'side-bar'}>
                <CategoriesCards/>
            </div>
        </div>
    )
}

export default Navbar