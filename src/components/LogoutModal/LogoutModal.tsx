import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Button } from '../Button/Button'
type IsLogoutModalOpen = {
    show:boolean
  }
const LogoutModal = () => {
const {isLogoutModal,userInfo} = useGlobalContext();
  return (
    <MainDiv show={isLogoutModal}>
        <LogoutDiv>
            <UserImageDiv >
                <UserImage src={userInfo.avatar_image}/>
            </UserImageDiv>
            <Name>{userInfo.name}</Name>
            <Button bgColor='#D87D4A' width='100%'>Log Out</Button>
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
    padding:20px 50px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
`

const UserImage = styled.img`
    width:100%;
`

const UserImageDiv = styled.div`
    width: 9.3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    
`

const Name = styled.h1`
    font-family:sans-serif;
    font-size:20px;
`