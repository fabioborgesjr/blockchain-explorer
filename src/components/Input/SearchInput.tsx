import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Input, SearchIconWrapper } from './styles'
import SearchIcon from '@mui/icons-material/Search'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  width: 100%;
`

type Props = {
  fetchData: (param: string) => Promise<void>
  disabled: boolean
}

const SearchInput: React.FC<Props> = ({ fetchData, disabled }) => {
  const [value, setValue] = useState('')
  const isSubmitDisabled: boolean = disabled || !value.length

  const handleSubmit = useCallback(
    (e: any) => {
      if (e.preventDefault) {
        e.preventDefault()
      }

      if (isSubmitDisabled) {
        return 0
      }

      setValue('')

      return fetchData(value)
    },
    [fetchData, isSubmitDisabled, value],
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value)
        }}
        disabled={disabled}
      />
      <SearchIconWrapper disabled={isSubmitDisabled}>
        <SearchIcon onClick={handleSubmit} />
      </SearchIconWrapper>
    </Form>
  )
}

export default SearchInput
