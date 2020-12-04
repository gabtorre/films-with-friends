import React from "react";
import {HeaderContainer, HeaderBG, HeaderTitleP, HeaderTitleH1, HeaderTitleContent} from "../StyledComponents"
import "../../App.css"

const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderBG/>
                <HeaderTitleContent>
                        <HeaderTitleH1>Movie Box</HeaderTitleH1>
                        <HeaderTitleP>Make sharing movies with your friends fun.</HeaderTitleP>
                </HeaderTitleContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
