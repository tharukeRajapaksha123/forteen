import styled from 'styled-components';

const Container = styled.div`
    width : 300px;
    height : 420px;
    background-color:white;
    border-radius: 20px;
    display:flex;
    flex-direction : column;
    justify-content:space-evenly;
    padding : 20px;
`

const TitleWrapper = styled.div`
    width : 300px;
    margin : 15px;
`

const Title = styled.h2``

const CatogaryTitle = styled.div`
    display:flex;
    height : 50px;
    width : 100%;
    padding : 0 15px;
    overflow:hidden;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    h3{
        padding : 0 15px;
        color:#505050;
        letter-spacing:1.5px;
    }
`;

const CategoryImage = styled.div`
    width : 20%;
    height : 100%;
    border-radius : 10px;
    overflow:hidden;
    img{
        width : 100%;
        height: 100%;
        object-fit:cover;
    }
    
`

const Spacer = styled.div`
    flex: 1;
`

const Devider = styled.div`
    background-color:grey;
    width: 280px;
    height:0.5px;
    border-radius:10px;
`

export  {Container,TitleWrapper,Title,CatogaryTitle,CategoryImage,Spacer,Devider}
