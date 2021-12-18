import styled from 'styled-components'

const  Container = styled.div`
    width : 100%;
    height : 70px;
    background-color:white;
    position: fixed;
    top: 0;
    overflow: hidden;
    display:flex;

`

const LogoWrapper = styled.div`
    flex:2;
    height:100%;
  //  background-color: red;
    display:flex;
    align-items:center;
`

const Logo = styled.img``

const LogoTitle = styled.h2`
    color: #707070;
    letter-spacing:1.2px;
    font-weight:bold;
`

const SearchBar = styled.div`
    flex : 6;
    display:flex;
    align-items:center;

    input{
        outline:none;
        width : 100%;
        border-radius:50px;
        height: 30px;
        padding : 0 20px;
        margin : 0 50px;
        color: #B4B4B4;
        border : 1px solid #000A2D; 
    }
`

const ProfileWrapper  = styled.div`
    flex:1;
    height:100%;
   // background-color: red;
    display:flex;
    align-items:center;
`

const CartIcon = styled.img``

const ProfileText = styled.h3``

const ProfileIcon = styled.img``

export  {Container,LogoWrapper,LogoTitle,Logo,SearchBar,ProfileIcon,ProfileText,ProfileWrapper,CartIcon}