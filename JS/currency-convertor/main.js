let currencyRates = {
	timestamp: 1519296206, // example timestamp
	base: 'EUR',
	date: '2021-03-17', // example date
	rates: {},
}

console.log({ currencyRates }) // initial object

document
	.getElementById('newRateForm')
	.addEventListener('submit', function (event) {
		event.preventDefault()
		const baseCurrency = document.getElementById('baseCurrency').value
		const targetCurrency = document.getElementById('targetCurrency').value
		const rate = document.getElementById('rate').value
		currencyRates.base = baseCurrency

		// for example:  DKK = targetCurrency
		currencyRates.rates[targetCurrency] = +rate
		document.getElementById('targetCurrency').value = ''
		console.log({ currencyRates }) // object has been modified
	})

document
	.getElementById('convertForm')
	.addEventListener('submit', function (event) {
		event.preventDefault()
		const toCurrency = document.getElementById('toCurrency').value
		const amount = document.getElementById('amount').value
		const result = currencyRates.rates[toCurrency] // Checking if the conversion rate is available
			? amount * currencyRates.rates[toCurrency] // Accessing the conversion rate
			: 'Conversion rate not available'

		document.getElementById('result').innerText = result.toFixed(2)
	})
