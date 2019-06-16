import React from 'react'
import { Provider } from 'react-redux'

import { Posts, SearchInput } from './components'
import { store } from './store'
import { Layout } from './ui'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <SearchInput />
        <Posts />
      </Layout>
    </Provider>
  )
}
