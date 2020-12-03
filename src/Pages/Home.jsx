
import '../App.css';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import Menu from '../Components/Menu'

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <>
        {data.post.map( ({ text }) => (
          <h3>{text}</h3>
        ))}
    </>
  );
}

function AddPost() {
  let input
  const [createPost] = useMutation(
    gql `
      mutation createPost($text: String!) {
        createPost(text: $text){
          id
          text
        }
      }
    `,
    {
      update(
        cache,
        {
          data: { createPost },
        },
      ) {
        const { post } = cache.readQuery({query: GET_POSTS})
        cache.writeQuery({
          query: GET_POSTS,
          data: { post: [createPost].concat(post)}
        })
      }
    }
  )

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          createPost({ variables: { text: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Post</button>
      </form>
    </>
  )
}

function Home() {
  return (
      <>
      <Menu/>
    <ApolloProvider client={client}>
      <Posts/>
      <AddPost/>
    </ApolloProvider>
    </>
  );
}

export default Home;
