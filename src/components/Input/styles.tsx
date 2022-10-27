import styled from 'styled-components'
import Select from '@mui/material/Select'

export const Input = styled.input`
  padding: 0.78em;
  width: 60%;
  height: 100%;

  @media (min-width: 600px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`

export const StyledSelect = styled(Select)`
  background-color: #fff;
  height: 2rem;
  margin: 1rem 0 0;
`

export const SearchIconWrapper = styled.button`
  background-color: #fabd60;
  color: #131a22;
  border-radius: 0em 0.2em 0.2em 0em;
  padding: 0.32em 0.5em;
  cursor: pointer;
  transition: all 250ms ease;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover {
    background-color: #ff9900;
  }
`
