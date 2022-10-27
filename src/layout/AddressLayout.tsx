import React, { useState, useCallback } from 'react'
import LayoutContainer from '../components/Container/LayoutContainer'
import SearchInput from '../components/Input/SearchInput'
import useFetch from 'use-http'
import { LoadingText } from '../components/Texts/styles'
import AddressDataViewer from '../features/Address/AddressDataViewer'
import { Typography } from '@mui/material'

const AddressLayout = () => {
  const [data, setData] = useState(null)
  const { get, response, loading, error } = useFetch('https://api.blockcypher.com/v1/btc/main')

  const getAddressData = useCallback(
    async (address: string) => {
      const addressData = await get(`addrs/${address}?unspentOnly=true`)

      if (response.ok) setData(addressData)
    },
    [get, response.ok],
  )

  return (
    <LayoutContainer className='addressLayout'>
      <SearchInput fetchData={getAddressData} disabled={loading} />
      {data ? (
        loading ? (
          <LoadingText />
        ) : (
          <AddressDataViewer data={data} />
        )
      ) : error ? (
        <Typography>Something wrong happened!</Typography>
      ) : (
        <Typography>Search using your desired bitcoin address</Typography>
      )}
    </LayoutContainer>
  )
}

export default AddressLayout
