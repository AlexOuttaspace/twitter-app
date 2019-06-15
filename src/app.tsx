import React from 'react'
import { styled } from 'linaria/react'
import { Provider } from 'react-redux'

import { store } from './store'

const AppHeader = styled.header`
  border: 5px solid red;
`

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <AppHeader>hello</AppHeader>
      </div>
    </Provider>
  )
}
