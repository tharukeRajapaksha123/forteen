import React from 'react'
import {Container,LogoTitle,LogoWrapper, ProfileWrapper, SearchBar,CartIcon,ProfileText,ProfileIcon} from './HeaderComponents'

const Header = () => {
    return (
        <Container>
            <LogoWrapper>
                <LogoTitle>FORTEEN</LogoTitle>
            </LogoWrapper>
            <SearchBar>
                <input type="text" placeholder="Search Here ..." />
            </SearchBar>
            <ProfileWrapper>
                <CartIcon/>
                <ProfileIcon/>
                <ProfileText>Profile</ProfileText>
            </ProfileWrapper>
        </Container>
    )
}

export default Header
