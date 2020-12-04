import '../App.css';
import Menu from '../Components/Menu'
import {BlackContainer, HomeContainer, HomeWrapper, PostWrapper} from '../Components/StyledComponents'
import PostList from '../Components/Home/Posts'
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
                <PostWrapper><Posts/></PostWrapper>
                {/* <PostWrapper><PostList/></PostWrapper> */}
                <HomeWrapper><AddPost/></HomeWrapper>
            </HomeContainer>
        </BlackContainer>
        </>
    );
}

export default Home;
