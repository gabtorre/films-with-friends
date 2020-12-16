import React from 'react'
import {LandingContainer} from '../Components/StyledComponents'
import Menu from '../Components/Menu'
import Header from '../Components/Landing/Header'
import Footer from '../Components/Footer'

export default function Landing() {

    return (
        <>
        <Menu/>
        <LandingContainer>
            <Header/>
        </LandingContainer>
        <Footer/>
        </>
    )
}
