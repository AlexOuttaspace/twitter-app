import { Dispatch } from 'redux'
import { Post } from 'types'

import { actionTypes } from './action-types'
import {
  LoadPostsSuccessAction,
  LoadPostsFailAction,
  LoadPostsStartAction
} from './types'

const API_URL = 'https://api.github.com/search/issues'

export const searchPosts = (query: string) => async (dispatch: Dispatch) => {
  try {
    const startAction: LoadPostsStartAction = {
      type: actionTypes.LOAD_POSTS_START
    }

    dispatch(startAction)

    const response = await fetch(`${API_URL}?q=${query}`)

    const data = await response.json()

    const posts: Post[] = data.items.slice(0, 20).map((item: any) => ({
      id: item.id,
      createdAt: item.created_at,
      title: item.title,
      authorName: item.user.login,
      avatarUrl: item.user.avatar_url,
      url: item.html_url
    }))

    const successAction: LoadPostsSuccessAction = {
      type: actionTypes.LOAD_POSTS_SUCCESS,
      posts
    }

    dispatch(successAction)
  } catch (e) {
    const failAction: LoadPostsFailAction = {
      type: actionTypes.LOAD_POSTS_FAIL,
      error: 'Error occured while loading posts'
    }

    dispatch(failAction)
  }
}
