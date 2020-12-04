//NOT USED

import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import {MainContainer, HomeWrapper, CardWrapper} from '../StyledComponents'
import Card from 'react-bootstrap/Card'
import Search from './Search'

const client = new ApolloClient({
  uri: 'https://workers-graphql-server.gabtorres.workers.dev/',
})

const GET_POSTS = gql`
  {
    post {
      id
      text
    }
  }
`

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return (
    <Card style={{ width: '100%' }} id="admin-card">
        <CardWrapper>
            <p>Loading...</p>
        </CardWrapper>
    </Card>)
  if (error) return <p>Error :</p>

  return (
    <>
        {data.post.map( ({ text }) => (
            <Card style={{ width: '100%', marginBottom: '2%' }} id="admin-card">
                <CardWrapper>
                    <p>{text}</p>
                </CardWrapper>
            </Card>
        ))}
    </>
  );
}



function PostList() {
    return (
    <>
        <ApolloProvider client={client}>
            <Posts/>
        </ApolloProvider>

    </>
    );
}

export default PostList;
