import '../App.css';
import Menu from '../Components/Menu'
import {BlackContainer, HomeContainer, HomeWrapper, PostWrapper} from '../Components/StyledComponents'
import PostList from '../Components/Home/Posts'
import WatchList from '../Components/Home/Watchlist'
import AddPost from '../Components/Home/AddPost'

function Home() {
    return (
        <>
        <Menu/>
        <BlackContainer>
            <HomeContainer>
                <HomeWrapper><WatchList/><WatchList/></HomeWrapper>
                <PostWrapper><PostList/></PostWrapper>
                <HomeWrapper><AddPost/></HomeWrapper>
            </HomeContainer>
        </BlackContainer>
        </>
    );
}

export default Home;
