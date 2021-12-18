import React from 'react'
import useFetchSales from '../../customHooks/useFetchSales'
import CatogaryBar from '../CatogaryBar/CatogaryBar'
import HorizantalItemLisr from '../ItemListHorizantal/HorizantalItemLisr'
import Sales from '../Sales/Sales'
import SubMenu from '../SubMenu/SubMenu'
import { Body, SubHeader } from './HomeBodyComponents'

const HomeBody = () => {
    const {sales} = useFetchSales()
   // console.log(sales)
    return (
       <>
            <Body>
                <SubHeader>
                    <CatogaryBar/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <Sales sales={sales}/>
                        <SubMenu/>
                    </div>
                </SubHeader>
                <HorizantalItemLisr title="Smart Phones" itemList = {[]}/>
                <HorizantalItemLisr title="Laptops" itemList = {[]}/>
                <HorizantalItemLisr title="Accessories" itemList = {[]}/>
                <HorizantalItemLisr title="Smart Phones" itemList = {[]}/>
            </Body>
       </>
    )
}

export default HomeBody
