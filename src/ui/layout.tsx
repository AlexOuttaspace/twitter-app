import React from 'react'
import { styled } from 'linaria/react'

const Root = styled.div`
  width: 100%;
  padding-top: 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Layout: React.FC = ({ children }) => <Root>{children}</Root>
