import React from 'react'
import CatogaryBar from '../CatogaryBar/CatogaryBar'
import Sales from '../Sales/Sales'
import SubMenu from '../SubMenu/SubMenu'
import { Body, SubHeader } from './HomeBodyComponents'

const HomeBody = () => {
    return (
        <Body>
            <SubHeader>
                <CatogaryBar/>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <Sales/>
                    <SubMenu/>
                </div>
            </SubHeader>
        </Body>
    )
}

export default HomeBody
