import React, { useCallback, useState } from 'react'
import LayoutContainer from '../components/Container/LayoutContainer'
import SearchInput from '../components/Input/SearchInput'
import useFetch from 'use-http'
import { LoadingText } from '../components/Texts/styles'
import TransactionsDataViewer from '../features/Transactions/TransactionsDataViewer'

const TransactionsLayout = () => {
  const [data, setData] = useState(null)
  const { get, response, loading, error } = useFetch('https://api.blockcypher.com/v1/btc/main')

  const getTransactionsData = useCallback(
    async (address: string) => {
      const transactionData = await get(`txs/${address}?unspentOnly=true`)

      if (response.ok) setData(transactionData)
    },
    [get, response.ok],
  )

  return (
    <LayoutContainer className='transactionsLayout'>
      <SearchInput fetchData={getTransactionsData} disabled={loading} />
      {data ? (
        loading ? (
          <LoadingText />
        ) : (
          <TransactionsDataViewer data={data} />
        )
      ) : error ? (
        'Something wrong happened!'
      ) : (
        'Search using your desired transaction hash'
      )}
    </LayoutContainer>
  )
}

export default TransactionsLayout
