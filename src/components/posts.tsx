import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { StoreState } from 'store/types'

export const Posts: React.FC = () => {
  const { posts, loading, error, alreadySearched } = useSelector(
    (state: StoreState) => {
      const { posts, loading, error, alreadySearched } = state

      return { posts, loading, error, alreadySearched }
    },
    shallowEqual
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>error</div>
  if (posts.length > 0) return <div>{JSON.stringify(posts)}</div>

  return <div>Use search field to find issues on github</div>
}
