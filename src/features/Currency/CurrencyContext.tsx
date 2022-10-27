import { createContext } from 'react'
import { Currency } from './Currency.type'

type CurrencyContextInterface = {
  currencyData?: Currency
  loadingCurrencyData: boolean
  formatSats?: (sats: number) => string | undefined
}

const CurrencyContext = createContext<CurrencyContextInterface>({
  currencyData: undefined,
  loadingCurrencyData: false,
})

export default CurrencyContext
