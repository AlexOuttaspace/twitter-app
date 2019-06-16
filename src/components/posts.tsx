import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { styled } from 'linaria/react'
import { StoreState } from 'store/types'
import { PostItem, Spinner } from 'ui'
import { format } from 'date-fns'

const Root = styled.ul`
  width: 95%;
  max-width: 800px;
  list-style-type: none;
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
  if (loading) return <Spinner />

  if (error) return <div>error</div>
  if (posts.length === 0) return <div>No posts were found</div>

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
