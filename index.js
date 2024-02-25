// const fromCurrencyOptions =document.querySelector('.from-currency select')
// const toCurrencyOptions =document.querySelector('.to-currency select')
// const fromAmount =document.querySelector('.from-amount input')
// const fromResult =document.getElementById('from-result')

const fromCurrencyOptions = document.querySelector(".from-currency select");
const toCurrencyOptions = document.querySelector(".to-currency select");
const fromAmount = document.querySelector(".from-amount input");
const fromResult = document.getElementById("from-result");
const toResult = document.getElementById("to-result");
const convertBtn = document.getElementById("convert-btn");
const swapBtn = document.getElementById("swap-btn");
const USD = document.getElementById("USD");
const input = document.getElementsByClassName("form-control");

async function loadCountrySymbols() {
  const Api_URL =
    " https://v6.exchangerate-api.com/v6/4745a337c38736d4325a3d85/latest/USD";
  const result = await fetch(Api_URL);
  const data = await result.json();
  // console.log(data.conversion_rates);
  let symbolList = data.conversion_rates;
  showData(symbolList);
}
document.addEventListener("DOMContentLoaded", () => {
  loadCountrySymbols();
});
function showData(conversion_rates) {
  // console.log(conversion_rates);
  let symbolsOnly = Object.keys(conversion_rates);
  // console.log(symbolsOnly);
  let html = "";
  symbolsOnly.forEach((conversion_rates) => {
    html += `<option data-id='${conversion_rates}'>${conversion_rates}</option>`;
  });
  fromCurrencyOptions.innerHTML = html;
  fromCurrencyOptions.querySelectorAll("option").forEach((option) => {
    if (option.dataset.id == "USD") option.selected = "selected";
  });
  toCurrencyOptions.innerHTML = html;
  toCurrencyOptions.querySelectorAll("option").forEach((option) => {
    if (option.dataset.id == "EUR") option.selected = "selected";
  });
}
fromAmount.addEventListener("keyup", function () {
  // console.log("clicked");
  let amount = Number(this.value);
  // console.log(amount);
  if (!amount) fromAmount.style.borderColor = "#de3f44";
  else fromAmount.style.borderColor = "#c6c7c9";
});
convertBtn.addEventListener("click", () => {
  let fromCurrency = fromCurrencyOptions.value;
  let toCurrency = toCurrencyOptions.value;
  // console.log(fromCurrency, toCurrency);
  let fromAmt = Number(fromAmount.value);
  if (fromAmt) getConvertedData(fromCurrency, toCurrency, fromAmt);
  // console.log(fromAmt);
});
async function getConvertedData(from, to, amount) {
  const API_URL = `https://v6.exchangerate-api.com/v6/4745a337c38736d4325a3d85/latest/EUR `;
  // https://v6.exchangerate-api.com/v6/4d51db285d51802d64ac8cd8/latest/USD
  const result = await fetch(API_URL);
  const data = await result.json();
  // console.log(data.conversion_rates);
  const arrkeys = Object.values(data.conversion_rates);
  // console.log(arrkeys);
  displayConvertedData(from, to, amount, data.conversion_rates);
}

function displayConvertedData(fromCurrency, toCurrency, fromAmt, toAmt) {
  // console.log(fromCurrency, toCurrency, fromAmt, toAmt);
  fromResult.innerHTML = `${fromAmt.toFixed(2)} ${fromCurrency}`;
  toResult.innerHTML = `${toAmt.toFixed(2)}${toCurrency}`;
}

swapBtn.addEventListener("click", () => {
  let fromIndex = fromCurrencyOptions.selectedIndex;
  let toIndex = toCurrencyOptions.selectedIndex;
  fromCurrencyOptions.querySelectorAll("option")[toIndex].selected =
    "selected ";
  toCurrencyOptions.querySelectorAll("option")[fromIndex].selected = "selected";
});
// bbbbb

// aaaaaaaaaaaa
// const fromCurrencyOptions = document.querySelector(".from-currency select");
// const toCurrencyOptions = document.querySelector(".to-currency select");
// const fromAmount = document.querySelector(".from-amount input");
// const fromResult = document.getElementById("from-result");
// const toResult = document.getElementById("to-result");
// const convertBtn = document.getElementById("convert-btn");
// const swapBtn = document.getElementById("swap-btn");

// // fetch country symbol from API
// async function loadCountrySymbols() {
//   const API_URL = "https://api.exchangerate.host/symbols";
//   const result = await fetch(API_URL);
//   const data = await result.json();
//   // console.log(data.symbols);
//   let symbolList = data.symbols;
//   showData(symbolList);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadCountrySymbols();
// });

// function showData(symbols) {
//   let symbolsOnly = Object.keys(symbols);
//   console.log(symbolsOnly);
//   let html = "";
//   symbolsOnly.forEach((symbol) => {
//     html += `<option data-id = "${symbol}"> ${symbol} </option>`;
//   });

//   fromCurrencyOptions.innerHTML = html;
//   fromCurrencyOptions.querySelectorAll("option").forEach((option) => {
//     if (option.dataset.id == "USD") option.selected = "selected";
//   });

//   toCurrencyOptions.innerHTML = html;
//   toCurrencyOptions.querySelectorAll("option").forEach((option) => {
//     if (option.dataset.id == "EUR") option.selected = "selected";
//   });
// }

// // validate the amoutn to be converted
// fromAmount.addEventListener("keyup", function () {
//   let amount = Number(this.value);
//   if (!amount) fromAmount.style.borderColor = "#de3f44";
//   else fromAmount.style.borderColor = "#c6c7c9";
// });

// // convert 'from country currency' to 'to country currency'
// convertBtn.addEventListener("click", () => {
//   let fromCurrency = fromCurrencyOptions.value;
//   let toCurrency = toCurrencyOptions.value;
//   // console.log(fromCurrency, toCurrency);
//   let fromAmt = Number(fromAmount.value);
//   if (fromAmt) getConvertedData(fromCurrency, toCurrency, fromAmt);
// });

// // get the converted data from the API
// async function getConvertedData(from, to, amount) {
//   const API_URL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
//   const result = await fetch(API_URL);
//   const data = await result.json();
//   // console.log(data.result);
//   displayConvertedData(from, to, amount, data.result);
// }

// // display the converted result
// function displayConvertedData(fromCurrency, toCurrency, fromAmt, toAmt) {
//   fromResult.innerHTML = `${fromAmt.toFixed(2)} ${fromCurrency}`;
//   toResult.innerHTML = `${toAmt.toFixed(2)} ${toCurrency}`;
// }

// // swap or reverse the currency
// swapBtn.addEventListener("click", () => {
//   let fromIndex = fromCurrencyOptions.selectedIndex;
//   let toIndex = toCurrencyOptions.selectedIndex;
//   fromCurrencyOptions.querySelectorAll("option")[toIndex].selected = "selected";
//   toCurrencyOptions.querySelectorAll("option")[fromIndex].selected = "selected";
// });
