// NOT USED

import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, useMutation } from '@apollo/react-hooks'
import { CardWrapper } from '../StyledComponents'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

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
      <Form
        onSubmit={e => {
          e.preventDefault()
          createPost({ variables: { text: input.value } })
          input.value = ''
        }}
      >
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Share Your Thoughts</Form.Label> */}
          <Form.Control as="textarea" ref={node => {input = node}} rows={3} placeholder="Share Your Thoughts..."  />
        </Form.Group>
        <Button type="submit" variant="danger" className="menubtns" style={{margin: "3%"}}>Share!</Button>
      </Form>
    </>
  )
}

function PostList() {
  return (
    <Card style={{ width: '100%' }} id="admin-card">
        <CardWrapper>
            <ApolloProvider client={client}>
                <AddPost/>
            </ApolloProvider>
        </CardWrapper>
    </Card>
  );
}

export default PostList;
