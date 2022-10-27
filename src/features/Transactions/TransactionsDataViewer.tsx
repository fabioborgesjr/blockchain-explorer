import React, { useCallback, useContext, useMemo } from 'react'
import DataContainer from '../../components/Container/DataContainer'
import { LoadingText } from '../../components/Texts/styles'
import { createSchema } from '../../helpers/SchemaHelper'
import CurrencyContext from '../Currency/CurrencyContext'

type Props = {
  data: object[]
}

const TransactionsDataViewer: React.FC<Props> = ({ data }) => {
  const { loadingCurrencyData, formatSats } = useContext(CurrencyContext)

  const formatValue = useCallback((value: number) => formatSats && formatSats(value), [formatSats])

  const getInputOutputValue = useCallback(
    (txs: []) => {
      let value = 0

      txs.forEach((tx: any) => {
        value += tx['output_value'] || tx['value'] || 0
      })

      return formatSats && formatSats(value)
    },
    [formatSats],
  )

  const fieldsSchema = useMemo(
    () => [
      createSchema('hash', 'Transaction Hash'),
      createSchema('received', 'Received time'),
      createSchema('confirmed', 'Status', (confirmed) =>
        confirmed ? 'Confirmed' : 'Not Confirmed',
      ),
      createSchema('size', 'Size (in bytes)'),
      createSchema('confirmations', 'Number of Confirmations'),
      createSchema('inputs', 'Total BTC input', getInputOutputValue),
      createSchema('outputs', 'Total BTC output', getInputOutputValue),
      createSchema('fees', 'Fees', formatValue),
    ],
    [formatValue, getInputOutputValue],
  )

  return loadingCurrencyData ? (
    <LoadingText />
  ) : (
    <DataContainer schemas={fieldsSchema} data={data} />
  )
}

export default TransactionsDataViewer
