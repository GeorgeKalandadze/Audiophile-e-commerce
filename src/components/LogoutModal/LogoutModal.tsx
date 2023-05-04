import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
import axiosClient from '../../axios-client'
import {FormEvent, useRef} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoutICon from '../../assets/logout icon.png'
import UseOnClickOutside from '../../hooks/UseOnClickOutside'
type IsLogoutModalOpen = {
    show:boolean
  }
const LogoutModal = () => {
const {isLogoutModal,userInfo,setToken,setIsLogoutModal,logoutIconRef} = useGlobalContext();
const navigate = useNavigate()
const location = useLocation();
const ref = useRef<HTMLDivElement>(null);

UseOnClickOutside(ref, () => {
    setIsLogoutModal(false)
  },logoutIconRef);

const onLogout = (ev:any) => {
    ev.preventDefault()

    axiosClient.post('/logout')
    .then(() => {
        setToken('')
        navigate('/')
        setIsLogoutModal(false)
    })
}
  return (
    <MainDiv show={isLogoutModal} >
        <LogoutDiv ref={ref}>
            <LogoutTextDiv>
                <Name>Are you sure {userInfo.name} , that you Want Log out?</Name>
                <LogoutImage src={LogoutICon}/>
            </LogoutTextDiv>
            <ButtonsDiv>
                <Button bgColor='#D87D4A' width='45%' brdRadius='6px' onClick={onLogout}>Log Out</Button>
                <Button bgColor='transparent' brdRadius='6px' hover='#D87D4A' onClick={() => setIsLogoutModal(false)}  width='45%' color='black' >Cancel</Button>
            </ButtonsDiv>
        </LogoutDiv>
    </MainDiv>
  )
}

export default LogoutModal

const MainDiv = styled.div<IsLogoutModalOpen>`
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

const LogoutDiv = styled.div`
    width:auto;
    position: fixed;
    left: 70%;
    background: #FFFFFF;
    padding:20px 30px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    
    gap:20px;
`


const Name = styled.h1`
    font-family:sans-serif;
    font-size:17px;
`

const ButtonsDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

const LogoutImage = styled.img`
    width:25px;
`

const LogoutTextDiv = styled.div`
    display:flex;
    align-items:center;
    gap:10px
`