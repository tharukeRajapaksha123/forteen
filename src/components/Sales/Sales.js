import React from 'react'
import { Carausel, Container, Wrapper } from './SalesComponents'

const Sales = ({sales}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    }
    return (
        <Container>
             <Carausel {...settings}>
                {sales.map((sale)=>{
                    return <Wrapper key={sale.id}>
                        <img src={sale.image[0]} alt="sale"/>
                    </Wrapper>
                })}
            </Carausel>
        </Container>
    )
}

export default Sales
