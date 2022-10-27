import { useState, useEffect, useCallback } from 'react'
import useFetch from 'use-http'
import { SelectChangeEvent } from '@mui/material/Select'
import { Currency } from './Currency.type'
import { getValueFromLocaleEUR, getValueFromLocaleUSD } from '../../helpers/CurrencyHelper'

const useCurrency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('BTC-USD')
  const [currencyData, setCurrencyData] = useState<Currency>()
  const { get, response, loading } = useFetch('https://api.blockchain.com/v3/exchange')

  const getCurrencyData = useCallback(
    async (currency: string) => {
      const initialTodos = await get(`tickers/${currency}`)
      if (response.ok) setCurrencyData(initialTodos)
    },
    [get, response.ok],
  )

  const handleCurrencyChange = useCallback((event: SelectChangeEvent<unknown>) => {
    setSelectedCurrency(event.target.value as string)
  }, [])

  const formatValueWithSymbol = useCallback(
    (value: number): string => {
      if (selectedCurrency === 'BTC-USD') {
        return getValueFromLocaleUSD(value)
      }

      return getValueFromLocaleEUR(value)
    },
    [selectedCurrency],
  )

  const formatSats = useCallback(
    (sats: number) => {
      const btcValue = sats * 0.00000001

      if (selectedCurrency === 'BTC') {
        return btcValue.toString() + ' ₿'
      }

      if (currencyData) {
        const convertedValue = btcValue * currencyData.price_24h

        return formatValueWithSymbol(convertedValue)
      }
    },
    [currencyData, formatValueWithSymbol, selectedCurrency],
  )

  useEffect(() => {
    if (selectedCurrency !== 'BTC') {
      getCurrencyData(selectedCurrency)
    } else {
      setCurrencyData(undefined)
    }
  }, [getCurrencyData, selectedCurrency])

  return {
    selectedCurrency,
    currencyData,
    loadingCurrencyData: loading,
    formatSats,
    handleCurrencyChange,
    formatValueWithSymbol,
  }
}

export default useCurrency
