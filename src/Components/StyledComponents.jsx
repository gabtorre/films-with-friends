import styled from 'styled-components'

// Containers

export const MainContainer = styled.div`
    background-color: #1A1D20;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    position: fixed;
`

export const LandingContainer = styled.div`
    background-color: black;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    position: fixed;
`

export const BlackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181D2F;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    // position: fixed;
`
export const SideBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #181D2F;
    flex-direction: column;
    color: #F5F5F1;
    height: 100%;
    width: 100%;
    padding: 5%
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


// Home Page
export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
export const HomeLeftWrapper = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start
    color: #F5F5F1;
    // margin-right: 5%;
    // padding: 0 3% 0 0;
`

export const PostWrapper = styled.div`
    height: 100%;
    display: flex;
    flex: 3;
    text-align: center;
    flex-direction: column;

`

export const HomeRightWrapper = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start
    color: #F5F5F1;
    // margin-left: 5%;
    // padding: 0 0 0 3%;
`

export const CardWrapper = styled.div`
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: #1A1D20;
    padding: 5%
`

export const ActivityWrapper = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
`
export const ActivityPostsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const ActivityCardWrapper = styled.div`
    display: flex;
    text-align: center;
    background-color: #0F121D;
    padding: 2%;
    border-radius: 25px;
    max-width: 500px;
    height: auto;
    margin: 1%
`

export const ActivityCardUserWrapper = styled.div`
    display: flex;
    text-align: left;
    background-color: #0F121D;
    border-radius: 8%
`

export const ActivityMovieCardWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`

export const MovieCardWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
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
    display: flex;
`

export const CommentWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
    padding: 3%
    width: 100%;
`

export const CommentForm = styled.form`
    border: 0;
    display: flex;
    align-items: center;
    height: 100px;
`

export const CommentInput = styled.input `
    border: 0;
    padding: 0.75rem 1.25rem;
    width: 100%;
    height: 100%;
    background-color: #171C2E;
    text-align: left;
    border-radius: 5px;
    font-size: 14px
    color: #FFF;
`

export const CommentTextArea = styled.textarea `
    border: 0;
    padding: 0.75rem 1.25rem;
    width: 100%;
    height: 100%;
    background-color: #171C2E;
    text-align: left;
    border-radius: 5px;
    font-size: 14px
    color: #FFF;
`




// Movie Sidebar

export const MovieSideBarSuggestion = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #181D2F;
    color: #F5F5F1;
    margin: 5%;
    border-radius: 5%;
    width: 100%
    flex-wrap: wrap;
`

export const MovieSideBarSuggestionCard = styled.div`
    display: flex;
    flex-direction: row;
    color: #F5F5F1;
    margin: 5%;
    border-radius: 5%;
    width: 100%
    align-content: center
`
export const MovieSideBarSuggestionRight = styled.div`
    display: flex;
    background-color: #181D2F;
    flex: 7;
    flex-direction: column;
    color: #F5F5F1;

`
export const MovieSideBarSuggestionImg = styled.div`
    display: flex;
    background-color: #181D2F;
    flex: 3;
    border-radius: 5%;
    text-align: left;
`
export const MovieSideBarRedBtn = styled.button`
    background-color: #DC3545;
    color: white;
    margin: 2%;
    border-radius: 20px;
    padding: 2%;
    border: none;
    width: ${({width}) => (width ? `${width}px` : '100px')};
    font-size: 12px
`

export const MovieSideBarShareBtn = styled.button`
    background-color: white;
    color: red;
    margin: 2%;
    border-radius: 20px;
    width: 80px;
    padding: 2%;
    border: none;
    font-size: 12px
`

export const MovieSuggestionTitle = styled.small`
    width: 80%;
    height: auto;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 12px;
`
export const MovieSuggestionDate = styled.small`
    width: 80%;
    height: auto;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 10px
`

export const MovieResultText = styled.p`
    width: 200px;
    height: auto;
    word-break: break-word;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap
`

export const UserSearchCard = styled.p`
    display: flex;
    flex-direction: row;
`


// Profile Sidebar

export const LogOutBtn = styled.button`
    background-color: white;
    color: red;
    margin: 5%;
    border-radius: 15px;
    width: 50%;
    padding: 2%;
    border: none;
    font-size: 12px;
    font-weight: bold;
`
export const EditProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto
`

//MOVIE LIST PAGE 

export const MoviePoster = styled.img`
width: 100%;
border-radius: 10%;
`
export const MovieTitle = styled.p`
text-align: center;
font-weight: 700;
line-height: 1em;
padding: 10px 0;
`
export const ChildDiv = styled.div`
width: 100%;
min-width: 150px;
height: 100%;
margin: 10px;
`