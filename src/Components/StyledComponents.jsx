import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #1A1D20;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    position: fixed;
`
export const BlackContainer = styled.div`
    background-color: black;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    position: fixed;
`

//Landing
export const HeaderContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative
`
export const HeaderBG = styled.div`
    background: black;
    positionL absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: lightblue url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80") fixed center;
`
export const HeaderTitleContent = styled.div`
    z-index: 3;
    max-width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 100px
`
export const HeaderTitleH1 = styled.h1 `
    color: white;
    font-size: 80px;
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 800px){
        font-size: 30px;
    }

`
export const HeaderTitleP = styled.p`
    font-size: 24px;
    color: white;
    font-weight:  medium;
    font-style: italic;

    @media screen and (max-width: 800px){
        font-size: 20px;
    }
`


// Home
export const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    margin: 5%;

`
export const HomeWrapper = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
    flex-direction: column;
    margin: auto 2%;
`

export const PostWrapper = styled.div`
    height: 100%;
    flex: 3;
    text-align: center;
    flex-direction: column;

`

export const CardWrapper = styled.div`
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: #1A1D20;
    padding: 5%
`


export const MovieCardWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
    padding: 3%
`


// Auth Pages

export const AuthContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: #1A1D20;
    color: white
`
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormLeft = styled.form`
    background: #B81D24;
    min-width: 400px;
    min-height: 50%;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;

`

export const Form = styled.form`
    background: #1A1D20;
    min-width: 400px;
    min-height: 50%;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;

`


export const TitleWrapper = styled.h1`
    margin-bottom: 40px;
    display: inline;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px
    font-size: 14px
    color: white;
`

export const FormInput = styled.input`
    padding: 15px 15px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    padding: 15px 0;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin: 25px auto;
    color: white;
    font-size: 15px;
`

export const CommentDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.03);
    padding: 0 0 0.75rem;
`

export const CommentForm = styled.form`
    display: flex;
    border: 0;
`

export const CommentInput = styled.input `
    border: 0;
    padding: 0.75rem 1.25rem;
    flex-basis: 100%;
    background-color: #E7EAF1;
`
