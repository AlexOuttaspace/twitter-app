import { Post } from 'types'

import { actionTypes } from './action-types'

export interface LoadPostsSuccessAction {
  type: typeof actionTypes.LOAD_POSTS_SUCCESS
  posts: Post[]
}

export interface LoadPostsFailAction {
  type: typeof actionTypes.LOAD_POSTS_FAIL
  error: string
}

export interface LoadPostsStartAction {
  type: typeof actionTypes.LOAD_POSTS_START
}

export interface StoreState {
  posts: Post[]
  loading: boolean
  error: string | null
  alreadySearched: boolean
}
