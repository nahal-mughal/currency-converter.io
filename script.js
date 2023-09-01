const fromAmountElement = document.querySelector(".amount")
const toAmountElement = document.querySelector(".convertedAmount")
const fromCurrencyElement = document.querySelector(".fromCurrency")
const toCurrencyElement = document.querySelector(".toCurrency")
const finalResult = document.querySelector(".conversionRate")
const main = document.querySelector('.converter_container')

const countries = [
    { name: 'United States Dollar', code: 'USD' },
    { name: 'Euro', code: 'EUR' },
    { name: 'Pound Sterling', code: 'GBP' },
    { name: 'Australian Dollar', code: 'AUD' },
    { name: 'Bulgarian Lev', code: 'BGN' },
    { name: 'Brazilian Real', code: 'BRL' },
    { name: 'Canadian Dollar', code: 'CAD' },
    { name: 'Swiss Franc', code: 'CHF' },
    { name: 'Chinese Yuan', code: 'CNY' },
    { name: 'Czech Koruna', code: 'CZK' },
    { name: 'Danish Krone', code: 'DKK' },
    { name: 'Algerian Dinar', code: 'DZD' },
    { name: 'Estonian Kroon', code: 'EEK' },
    { name: 'Egyptian Pound', code: 'EGP' },
    { name: 'Euro', code: 'EUR' },
    { name: 'Fijian Dollar', code: 'FJD' },
    { name: 'Pound Sterling', code: 'GBP' },
    { name: 'Guernsey Pound', code: 'GGP' },
    { name: 'Ghanaian Cedi', code: 'GHS' },
    { name: 'Croatian Kuna', code: 'HRK' },
    { name: 'Hungarian Forint', code: 'HUF' },
    { name: 'Indonesian Rupiah', code: 'IDR' },
    { name: 'Israeli Shekel', code: 'ILS' },
    { name: 'Indian Rupee', code: 'INR' },
    { name: 'Iraqi Dinar', code: 'IQD' },
    { name: 'Iranian Rial', code: 'IRR' },
    { name: 'Icelandic Krona', code: 'ISK' },
    { name: 'Jersey Pound', code: 'JEP' },
    { name: 'Jamaican Dollar', code: 'JMD' },
    { name: 'Jordanian Dinar', code: 'JOD' },
    { name: 'Japanese Yen', code: 'JPY' },
    { name: 'Kenyan Shilling', code: 'KES' },
    { name: 'Kyrgyzstani Som', code: 'KGS' },
    { name: 'Cambodian Riel', code: 'KHR' },
    { name: 'South Korean Won', code: 'KRW' },
    { name: 'Kuwaiti Dinar', code: 'KWD' },
    { name: 'Kazakhstani Tenge', code: 'KZT' },
    { name: 'Lebanese Pound', code: 'LBP' },
    { name: 'Sri Lankan Rupee', code: 'LKR' },
    { name: 'Moroccan Dirham', code: 'MAD' },
    { name: 'Moldovan Leu', code: 'MDL' },
    { name: 'Macedonian Denar', code: 'MKD' },
    { name: 'Myanma Kyat', code: 'MMK' },
    { name: 'Mongolian Tugrik', code: 'MNT' },
    { name: 'Macanese Pataca', code: 'MOP' },
    { name: 'Mauritian Rupee', code: 'MUR' },
    { name: 'Maldivian Rufiyaa', code: 'MVR' },
    { name: 'Malawian Kwacha', code: 'MWK' },
    { name: 'Mexican Peso', code: 'MXN' },
    { name: 'Malaysian Ringgit', code: 'MYR' },
    { name: 'Nigerian Naira', code: 'NGN' },
    { name: 'Nicaraguan Córdoba', code: 'NIO' },
    { name: 'Norwegian Krone', code: 'NOK' },
    { name: 'Nepalese Rupee', code: 'NPR' },
    { name: 'New Zealand Dollar', code: 'NZD' },
    { name: 'Omani Rial', code: 'OMR' },
    { name: 'Panamanian Balboa', code: 'PAB' },
    { name: 'Peruvian Nuevo Sol', code: 'PEN' },
    { name: 'Philippine Peso', code: 'PHP' },
    { name: 'Pakistani Rupee', code: 'PKR' },
    { name: 'Polish Zloty', code: 'PLN' },
    { name: 'Paraguayan Guarani', code: 'PYG' },
    { name: 'Qatari Rial', code: 'QAR' },
    { name: 'Romanian Leu', code: 'RON' },
    { name: 'Serbian Dinar', code: 'RSD' },
    { name: 'Russian Ruble', code: 'RUB' },
    { name: 'Saudi Riyal', code: 'SAR' },
    { name: 'Swedish Krona', code: 'SEK' },
    { name: 'Singapore Dollar', code: 'SGD' },
    { name: 'Saint Helena Pound', code: 'SHP' },
    { name: 'Slovenian Tolar', code: 'SIT' },
    { name: 'Slovak Koruna', code: 'SKK' },
    { name: 'Sierra Leonean Leone', code: 'SLL' },
    { name: 'Somali Shilling', code: 'SOS' },
    { name: 'Surinamese Dollar', code: 'SRD' },
    { name: 'São Tomé and Príncipe Dobra', code: 'STD' },
    { name: 'Salvadoran Colón', code: 'SVC' },
    { name: 'Syrian Pound', code: 'SYP' },
    { name: 'Thai Baht', code: 'THB' },
    { name: 'Tunisian Dinar', code: 'TND' },
    { name: 'Turkish Lira', code: 'TRY' },
    { name: 'Trinidad and Tobago Dollar', code: 'TTD' },
    { name: 'New Taiwan Dollar', code: 'TWD' },
    { name: 'Tanzanian Shilling', code: 'TZS' },
    { name: 'Ukrainian Hryvnia', code: 'UAH' },
    { name: 'Ugandan Shilling', code: 'UGX' },
    { name: 'United States Dollar', code: 'USD' },
    { name: 'Uruguayan Peso', code: 'UYU' },
    { name: 'Venezuelan Bolívar', code: 'VEF' },
    { name: 'Vietnamese đồng', code: 'VND' },
    { name: 'Yemeni Rial', code: 'YER' },
    { name: 'South African Rand', code: 'ZAR' }
];

countries.forEach(country => {
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")

    option1.value = option2.value = country.code
    option1.textContent = option2.textContent = `${country.code} (${country.name})`

    fromCurrencyElement.appendChild(option1)
    toCurrencyElement.appendChild(option2)

    //default values
    fromCurrencyElement.value = "PKR"
    toCurrencyElement.value = "MWK"
})

const generateRates = async () => {
    const amount = parseFloat(fromAmountElement.value)
    const fromCurrency = fromCurrencyElement.value
    const toCurrency = toCurrencyElement.value

    try {
        finalResult.textContent = "Fetching Rates...."
        const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`)
        const data = await response.json()

        const conversionRate = data.conversion_rates[toCurrency]
        const convertedAmount = (conversionRate * amount)

        toAmountElement.value = convertedAmount

        finalResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    } catch (error) {
        main.innerHTML = `<h2>Sorry We couldn't Fetch Your Rates :(</h2>`
    }

}

fromAmountElement.addEventListener("input", generateRates)
fromCurrencyElement.addEventListener("change", generateRates)
toCurrencyElement.addEventListener("change", generateRates)
window.addEventListener("load", generateRates)
