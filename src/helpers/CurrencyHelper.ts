export const formatValueToUSD = (value: string) => {
  return value.replace(/(?!^)(\d\d\d)(?=(\d\d\d)*\.)/g, ',$1')
}

export const getValueFromLocaleUSD = (value: number) => {
  const usdFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return usdFormatter.format(value).toString()
}

export const getValueFromLocaleEUR = (value: number) => {
  const eurFormatter = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })

  return eurFormatter.format(value).toString()
}
