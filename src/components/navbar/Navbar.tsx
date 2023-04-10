import React, {useState,useEffect} from "react";
import './navbar.css'
import Logo from '../../assets/shared/desktop/logo.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { useGlobalContext } from "../../context";
import CategoriesCards from "../CategoriesCards/CategoriesCards";
import { Link, useLocation } from "react-router-dom";
import axiosClient from "../../axios-client";

interface UserInfo  {
    name:string
    avatar_image:string
}

const Navbar = () => {
    const {isMenuClicked,setIsMenuClicked,openShopCartModal} = useGlobalContext();
    const className = isMenuClicked ? 'burger-bar clicked' : 'burger-bar';
    const [userInfo, setUserInfo] = useState<UserInfo>({name:"", avatar_image:""});

    useEffect(() => {
        axiosClient.get('/user')
    .then(({data}) => {
        // handle success
        
        setUserInfo(data)
    })
    .catch((error) => {
        // handle error
        console.error(error);
    });
    },[])

    // useEffect(() => {

    //     const getUserData = async () => {
    //         const response = await fetch('http://localhost:8000/api/user');
    //         const finalData = await response.json();
    //         setUserInfo(finalData)
    //     }

    //     getUserData();
    // },[]);

    console.log(userInfo)

    const location = useLocation();

    useEffect(() => {
        setIsMenuClicked(false);
    }, [location.pathname]);

    return(
        <div style={{width: '100%',zIndex:100,position:"absolute"}}>
            <nav>
                <div className="burger-menu" onClick={() => setIsMenuClicked(!isMenuClicked)}>
                    <div className={className} ></div>
                    <div className={className} ></div>
                    <div className={className} ></div>
                </div>
                <Link to={'/'}><img src={Logo} className="logo"/></Link>
                <div className="computer-nav">
                    <Link to={"/home"} className="styled-link">Home</Link>
                    <Link to={"/headphones"} className="styled-link">HEADPHONES</Link>
                    <Link to={"/speakers"} className="styled-link">SPEAKERS</Link>
                    <Link to={"/earphones"} className="styled-link">EARPHONES</Link>
                </div>
                <div className="navbar-right">
                    
                    <div className="profile-photo">
                        {userInfo?.avatar_image && <img src={userInfo.avatar_image}/>}
                    </div>
                    <img src={CartIcon} className="cart-icon" onClick={() => openShopCartModal()}/>
                </div>
            </nav>
            <div className={isMenuClicked ? 'sidebar-bar open' : 'side-bar'}>
                <CategoriesCards/>
            </div>
        </div>
    )
}

export default Navbar