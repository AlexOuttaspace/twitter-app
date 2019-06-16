import { StoreState } from './types'
import { actionTypes } from './action-types'
import {
  LoadPostsSuccessAction,
  LoadPostsFailAction,
  LoadPostsStartAction
} from './types'

type Action =
  | LoadPostsFailAction
  | LoadPostsSuccessAction
  | LoadPostsStartAction

const initialState: StoreState = {
  posts: [],
  loading: false,
  error: null,
  alreadySearched: false
}

export const reducer = (state = initialState, action: Action): StoreState => {
  switch (action.type) {
    case actionTypes.LOAD_POSTS_START:
      return {
        ...state,
        alreadySearched: true,
        loading: true,
        error: null
      }
    case actionTypes.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
        error: null
      }
    case actionTypes.LOAD_POSTS_FAIL:
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
