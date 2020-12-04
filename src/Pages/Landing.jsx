import React from 'react'
import {LandingContainer, HomeWrapper} from '../Components/StyledComponents'
import Menu from '../Components/Menu'
import Header from '../Components/Landing/Header'

export default function Landing() {
    return (
        <>
        <Menu/>
        <LandingContainer>
            <Header/>

        </LandingContainer>
        </>
    )
}
