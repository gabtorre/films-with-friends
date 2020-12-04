import '../App.css';
import Menu from '../Components/Menu'
import {BlackContainer, HomeContainer, HomeWrapper, PostWrapper} from '../Components/StyledComponents'
import Main from '../Components/Home/Main'
import WatchList from '../Components/Home/Watchlist'
import AddPost from '../Components/Home/AddPost'
import Posts from '../Pages/Posts'

function Home() {
    return (
        <>
        <Menu/>
        <BlackContainer>
            <HomeContainer>
                <HomeWrapper><WatchList/><WatchList/></HomeWrapper>
                <PostWrapper><Main/></PostWrapper>
                <HomeWrapper><AddPost/></HomeWrapper>
            </HomeContainer>
        </BlackContainer>
        </>
    );
}

export default Home;
