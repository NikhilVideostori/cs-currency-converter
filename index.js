import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi=new Freecurrencyapi('fca_live_VZaQ8nZFMPOnvhEvaWtkdkJqXcjeJ6CBJHEZuwbD')


convertCurrency("USD","INR",1)

export async function convertCurrency(fromCurrency,toCurrency,units){
const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
})
const multiplier = (res.data[toCurrency])
return multiplier*units
}

