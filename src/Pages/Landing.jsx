import React from 'react'
import {BlackContainer, HomeWrapper} from '../Components/StyledComponents'
import Menu from '../Components/Menu'
import Header from '../Components/Landing/Header'

export default function Landing() {
    return (
        <>
        <Menu/>
        <BlackContainer>
            <Header/>
            {/* <HomeWrapper>

            </HomeWrapper> */}
        </BlackContainer>
        </>
    )
}
