import React, { useCallback, useContext, useMemo } from 'react'
import DataContainer from '../../components/Container/DataContainer'
import { LoadingText } from '../../components/Texts/styles'
import { createSchema } from '../../helpers/SchemaHelper'
import CurrencyContext from '../Currency/CurrencyContext'

type Props = {
  data: object[]
}

const AddressDataViewer: React.FC<Props> = ({ data }) => {
  const { loadingCurrencyData, formatSats } = useContext(CurrencyContext)

  const formatValue = useCallback((value: number) => formatSats && formatSats(value), [formatSats])

  const getUnspentValue = useCallback(
    (txrefs: []) => {
      let totalUnspent = 0

      txrefs.forEach((tx: any) => {
        if (!tx.spent) {
          totalUnspent += tx.value
        }
      })

      return formatSats && formatSats(totalUnspent)
    },
    [formatSats],
  )

  const fieldsSchema = useMemo(
    () => [
      createSchema('address', 'Address'),
      createSchema('n_tx', 'Confirmed Transactions'),
      createSchema('total_received', 'Total BTC received', formatValue),
      createSchema('total_sent', 'Total BTC sent', formatValue),
      createSchema('txrefs', 'Total BTC Unspent', getUnspentValue),
      createSchema('final_balance', 'Final Balance', formatValue),
    ],
    [formatValue, getUnspentValue],
  )

  return loadingCurrencyData ? (
    <LoadingText />
  ) : (
    <DataContainer schemas={fieldsSchema} data={data} />
  )
}

export default AddressDataViewer
