import { formatPriceConstants } from '../constants/format-price'

export const formatPrice = (number, decimals = formatPriceConstants.decimals, decPoint = formatPriceConstants.decimals, thousandsSep = formatPriceConstants.thousandsSep) => {
  // честно скажу эту функцию я взял с гугла
  let j
  if (isNaN(decimals = Math.abs(decimals))) {
    decimals = 2
  }
  if (decPoint === undefined) {
    decPoint = ','
  }
  if (thousandsSep === undefined) {
    thousandsSep = '.'
  }
  const i = parseInt(number = (+number || 0).toFixed(decimals)) + ''
  if ((j = i.length) > 3) {
    j = j % 3
  } else {
    j = 0
  }
  const km = (j ? i.substr(0, j) + thousandsSep : '')
  const kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep)
  const kd = (decimals ? decPoint + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : '')
  return km + kw + kd
}
