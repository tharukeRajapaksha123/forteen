import React from 'react'
import { CategoryImage, CatogaryTitle, Container, TitleWrapper,Title, Spacer, Devider, } from './CatogaryBarComponents'

const CatogaryBar = () => {
    const i= "https://chamacomputers.lk/api/img/products/product_1356_1.png"
    return (
        <Container>
            <TitleWrapper>
                <Title>Categories</Title>
            </TitleWrapper>
            <Devider/>
            <CatogaryTitle>
                <CategoryImage>
                    <img src={i} alt="catefogt"/>
                </CategoryImage>
                <h3>Laptops</h3>
                <Spacer/>
            </CatogaryTitle>
            <Devider/>
            <CatogaryTitle>
                <CategoryImage>
                    <img src={i} alt="catefogt"/>
                </CategoryImage>
                <h3>Smart Phones</h3>
                <Spacer/>
            </CatogaryTitle>
            <Devider/>
            <CatogaryTitle>
                <CategoryImage>
                    <img src={i} alt="catefogt"/>
                </CategoryImage>
                <h3>Laptops</h3>
                <Spacer/>
            </CatogaryTitle>
            <Devider/>
        </Container>
    )
}

export default CatogaryBar
