import React from 'react'
import styled from 'styled-components'
import { H3 } from '../components/Texts/styles'
import CurrencyContext from '../features/Currency/CurrencyContext'
import CurrencySelector from '../features/Currency/CurrencySelector'
import useCurrency from '../features/Currency/useCurrency'
import ExplorerLayout from '../layout/ExplorerLayout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: white;
  align-items: center;
  background-color: #f2a900;
  padding: 3rem 1.5rem;
  border-radius: 25px;
  margin: 2rem;
  position: absolute;
  top: 0;
  bottom: 0;
`

const Explorer = () => {
  const {
    selectedCurrency,
    currencyData,
    loadingCurrencyData,
    handleCurrencyChange,
    formatSats,
    formatValueWithSymbol,
  } = useCurrency()

  return (
    <Wrapper>
      <H3 style={{ textAlign: 'center' }}>Bitcoin Blockchain Explorer</H3>
      <CurrencySelector
        currency={selectedCurrency}
        onChange={handleCurrencyChange}
        price24={currencyData ? formatValueWithSymbol(currencyData.price_24h) : ''}
      />
      {/* <FieldValue>3AEaCPD8KHhudgXdnzGpZLboUrfKUKqDW7</FieldValue> */}
      <CurrencyContext.Provider value={{ currencyData, loadingCurrencyData, formatSats }}>
        <ExplorerLayout />
      </CurrencyContext.Provider>
    </Wrapper>
  )
}

export default Explorer
