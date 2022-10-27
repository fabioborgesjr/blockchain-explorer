import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { SelectChangeEvent } from '@mui/material/Select'
import { StyledSelect } from '../../components/Input/styles'
import styled from 'styled-components'
import { Typography } from '@mui/material'

type Props = {
  currency: string
  onChange: ((event: SelectChangeEvent<unknown>, child: React.ReactNode) => void) | undefined
  price24: string | undefined
}

const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

function CurrencySelector({ currency, onChange, price24 }: Props) {
  return (
    <StyledFormControl>
      <StyledSelect
        value={currency}
        label='Currency'
        onChange={onChange}
        style={{ marginRight: '1rem' }}
      >
        <MenuItem value={'BTC-USD'}>
          <CurrencyWrapper>
            USD <AttachMoneyIcon fontSize='small' />
          </CurrencyWrapper>
        </MenuItem>
        <MenuItem value={'BTC-EUR'}>
          <CurrencyWrapper>
            EUR <EuroSymbolIcon fontSize='small' />
          </CurrencyWrapper>
        </MenuItem>
        <MenuItem value={'BTC'}>
          <CurrencyWrapper>
            BTC <CurrencyBitcoinIcon fontSize='small' />
          </CurrencyWrapper>
        </MenuItem>
      </StyledSelect>
      {price24 && (
        <Typography style={{ marginTop: '1rem' }}>{'Price Last 24 hours: ' + price24}</Typography>
      )}
    </StyledFormControl>
  )
}

export default CurrencySelector
