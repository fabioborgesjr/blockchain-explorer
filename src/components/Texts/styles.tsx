import { Typography } from '@mui/material'
import styled from 'styled-components'

export const LoadingText = styled((props) => (
  <Typography {...props} variant='caption'>
    Loading data...
  </Typography>
))`
  font-weight: 700 !important;
`

export const H3 = styled((props) => <Typography {...props} variant='h3' />)`
  font-weight: 700 !important;

  @media (max-width: 600px) {
    font-size: 2rem !important;
  }
`

export const FieldLabel = styled((props) => <Typography {...props} variant='body2' />)`
  font-weight: 700 !important;
`

export const FieldValue = styled((props) => <Typography {...props} variant='body1' />)`
  // font-weight: 400;
`
