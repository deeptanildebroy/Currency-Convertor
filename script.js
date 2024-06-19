// script.js
// This is copied from internet It consist of almost 90 different currencies
const currencyList = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "INR", name: "Indian Rupee" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "ZAR", name: "South African Rand" },
    { code: "DKK", name: "Danish Krone" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "COP", name: "Colombian Peso" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "RON", name: "Romanian Leu" },
    { code: "PEN", name: "Peruvian Sol" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "QAR", name: "Qatari Riyal" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "OMR", name: "Omani Rial" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "ISK", name: "Icelandic Krona" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "UGX", name: "Ugandan Shilling" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "RSD", name: "Serbian Dinar" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "BAM", name: "Bosnia and Herzegovina Convertible Mark" },
    { code: "XOF", name: "West African CFA Franc" },
    { code: "XAF", name: "Central African CFA Franc" },
    { code: "BWP", name: "Botswana Pula" },
    { code: "MUR", name: "Mauritian Rupee" },
    { code: "MWK", name: "Malawian Kwacha" },
    { code: "MZN", name: "Mozambican Metical" },
    { code: "ZMW", name: "Zambian Kwacha" },
    { code: "SCR", name: "Seychellois Rupee" },
    { code: "NAD", name: "Namibian Dollar" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "BMD", name: "Bermudian Dollar" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "PGK", name: "Papua New Guinean Kina" },
    { code: "SBD", name: "Solomon Islands Dollar" },
    { code: "SRD", name: "Surinamese Dollar" },
    { code: "TOP", name: "Tongan Pa'anga" },
    { code: "TTD", name: "Trinidad and Tobago Dollar" },
    { code: "VUV", name: "Vanuatu Vatu" },
    { code: "WST", name: "Samoan Tala" },
    { code: "HTG", name: "Haitian Gourde" },
    // You can also add more from searching through internet but make sure that the currency code eg . - HTG,TTD is available in the API 
];

function populateCurrencyDropdowns() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    currencyList.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency.code;
        option1.text = `${currency.name} (${currency.code})`;
        fromCurrency.add(option1);

        const option2 = document.createElement('option');
        option2.value = currency.code;
        option2.text = `${currency.name} (${currency.code})`;
        toCurrency.add(option2);
    });

    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const apiKey = 'c7fd81dec7c81fbbd78aea9b';  // Replace with your API key.Don't use mine use you mail 
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`; // https://v6.exchangerate-api.com/v6/c7fd81dec7c81fbbd78aea9b/latest/USD

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.conversion_rates && data.conversion_rates[toCurrency]) {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'Unable to get the exchange rate. Please try again.';
        }
    } catch (error) {
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
}

document.addEventListener('DOMContentLoaded', populateCurrencyDropdowns);
