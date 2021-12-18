import styled from 'styled-components';
import Slider from 'react-slick'


const Container = styled.div`
    width : 920px;
    height : 330px;
    background-color:white;
    border-radius: 20px;
    display:flex;
    flex-direction : column;
    justify-content:space-evenly;
    margin : 0 20px;
    overflow:hidden;
`

const Carausel = styled(Slider)`
    overflow:hidden;
`

const Wrapper =styled.div`
    padding :0;
    img{
        width: 100%;
        height:100%;
        object-fit:cover;
        border-radius: 20px;
    }
`

export {Container,Carausel,Wrapper}