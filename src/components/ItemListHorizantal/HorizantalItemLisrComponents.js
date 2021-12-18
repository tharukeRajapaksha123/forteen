import styled from 'styled-components';

const Container = styled.div`
    width : 87vw;
    height : 400px;
    background-color:white;
    border-radius : 15px;
    display: flex;
    overflow-y:hidden;
    display: flex;
    padding : 15px 25px;
    flex-direction:column;
    h1{
        color: #505050;
        font-family: "Rubik",sans-serif;      
    }
    margin-bottom : 20px;
    
`

const ItemList = styled.div`
    display: flex;
    flex-direction:row;
    margin-top: 20px;
`

const ItemCard = styled.div`
    width : 210px;
    height : 270px;
    border-radius: 12px;
    cursor:pointer;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    margin : 5px 10px;
    padding: 20px;
`

export {Container,ItemList,ItemCard}