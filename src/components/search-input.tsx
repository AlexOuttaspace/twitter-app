import React, { useState, useCallback } from 'react'
import { styled } from 'linaria/react'
import { useDispatch } from 'react-redux'
import { searchPosts } from 'store'

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin-bottom: 50px;
  display: flex;
`

const Input = styled.input`
  padding: 8px 14px;
  flex-grow: 1;
  font-size: 1.2rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 2px solid #31da32;
`

const SubmitButton = styled.button`
  background: none;
  border: none;
  background-color: #31da32;
  border: 2px solid #31da32;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const SearchInput: React.FC = () => {
  const [queryValue, setQueryValue] = useState('')
  const dispatch = useDispatch()

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (queryValue === '') return

      dispatch(searchPosts(queryValue))
    },
    [queryValue, dispatch, setQueryValue]
  )

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        value={queryValue}
        placeholder="Search for github issues"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQueryValue(e.target.value)
        }
      />

      <SubmitButton type="submit">SEARCH</SubmitButton>
    </Form>
  )
}
