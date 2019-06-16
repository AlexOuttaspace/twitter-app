import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchPosts } from 'store'

export const SearchInput: React.FC = () => {
  const [queryValue, setQueryValue] = useState('')
  const dispatch = useDispatch()

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (queryValue === '') return

      dispatch(searchPosts(queryValue))
      setQueryValue('')
    },
    [queryValue, dispatch, setQueryValue]
  )

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={queryValue}
        placeholder="Search for github issues"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQueryValue(e.target.value)
        }
      />
      <button type="submit">Search</button>
    </form>
  )
}
