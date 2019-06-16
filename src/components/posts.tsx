import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { styled } from 'linaria/react'
import { StoreState } from 'store/types'
import { PostItem, Spinner } from 'ui'
import { format } from 'date-fns'

const Root = styled.ul`
  width: 100%;
  max-width: 850px;
  list-style-type: none;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 0.1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #42fa42;
  }
`

const SpinnerWrapper = styled.div`
  margin-top: 50px;
`

const Error = styled.div`
  margin-top: 50px;
  font-size: 1.5rem;
`

const NotFound = styled.div`
  margin-top: 50px;
  font-size: 1.5rem;
`

export const Posts: React.FC = () => {
  const { posts, loading, error, alreadySearched } = useSelector(
    (state: StoreState) => {
      const { posts, loading, error, alreadySearched } = state

      return { posts, loading, error, alreadySearched }
    },
    shallowEqual
  )

  if (!alreadySearched) return null
  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )

  if (error) return <Error>{error}</Error>
  if (posts.length === 0) return <NotFound>No issues were found</NotFound>

  return (
    <Root>
      {posts.map((post, idx) => (
        <PostItem
          key={post.id}
          idx={idx}
          id={post.id}
          url={post.url}
          title={post.title}
          createdAt={format(post.createdAt, 'DD.MM.YYYY')}
          avatarUrl={post.avatarUrl}
          authorName={post.authorName}
        />
      ))}
    </Root>
  )
}
