import React from 'react'
import { styled } from 'linaria/react'

const AppHeader = styled.header`
  border: 5px solid red;
`

export const App: React.FC = () => {
  return (
    <div>
      <AppHeader>hello</AppHeader>
    </div>
  )
}
