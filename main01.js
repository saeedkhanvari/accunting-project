const buyBtn = document.getElementById("buyBtn");

const sellBtn = document.getElementById("sellBtn");

const amount = document.getElementById("amount");

const price = document.getElementById("price");

const total = document.getElementById("total");

const totalText = document.getElementById("totalText");

const buyAverage = document.getElementById("buyAverage");

const sellAverage = document.getElementById("sellAverage");

totalBuy = [];
buyAmount = [];
buyBtn.addEventListener("click", function () {
  let t1 = amount.value * price.value;
  let amountValue = Number(amount.value);
  totalBuy.push(t1);
  buyAmount.push(amountValue);
  console.log(buyAmount);
  console.log(totalBuy);
  let sumBuy = 0;
  for (i = 0; i < totalBuy.length; i++) {
    sumBuy += totalBuy[i];
  }
  let buyAmountCounter = 0;
  for (i = 0; i < buyAmount.length; i++) {
    buyAmountCounter += buyAmount[i];
  }
  console.log(buyAmountCounter);
  console.log(sumBuy);
  total.value = separate(sumBuy) + "T";
  totalText.innerHTML = "Total (Buy)";
  amount.value = "";
  price.value = "";
  buyAverage.value = separate(Math.trunc(sumBuy / buyAmountCounter)) + "T";
});

totalSell = [];
sellAmount = [];
sellBtn.addEventListener("click", function () {
  let t2 = amount.value * price.value;
  let amountValue = Number(amount.value);
  totalSell.push(t2);
  sellAmount.push(amountValue);
  console.log(sellAmount);
  console.log(totalSell);
  let sumSell = 0;
  for (i = 0; i < totalSell.length; i++) {
    sumSell += totalSell[i];
  }
  let sellAmountCounter = 0;
  for (i = 0; i < sellAmount.length; i++) {
    sellAmountCounter += sellAmount[i];
  }
  console.log(sellAmountCounter);
  console.log(sumSell);
  total.value = separate(sumSell) + "T";
  totalText.innerHTML = "Total (Sell)"; 
  
  amount.value = "";
  price.value = "";
  sellAverage.value = separate(Math.trunc(sumSell / sellAmountCounter)) + "T";
});

function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}

// totalBuy = [];
// buyAmount = [];
// buyBtn.addEventListener("click", function () {
//   calculator(totalBuy, buyAmount);
//   totalText.innerHTML = "Total (Buy)";
//   });

// totalSell = [];
// sellAmount = [];
// sellBtn.addEventListener("click", function () {
//   calculator(totalSell,sellAmount)
//   totalText.innerHTML = "Total (Sell)";
//   // sellAverage.value = separate(Math.trunc( sumSell / sellAmountCounter ))+ 'T';
// });

// let calculator = function (totalArray, arrayAmount) {
//   let t1 = amount.value * price.value;
//   let amountValue = Number(amount.value);
//   totalArray.push(t1);
//   arrayAmount.push(amountValue);
//   console.log(arrayAmount);
//   console.log(totalArray);
//   let sumBuyOrSell = 0;
//   for (i = 0; i < totalArray.length; i++) {
//     sumBuyOrSell += totalArray[i];
//   }
//   let buyAmountCounter = 0;
//   for (i = 0; i < buyAmount.length; i++) {
//     buyAmountCounter += buyAmount[i];
//   }
//   console.log(buyAmountCounter);
//   console.log(sumBuyOrSell);
//   total.value = separate(sumBuyOrSell) + "T";
//   amount.value = "";
//   price.value = "";
//   // buyAverage.value = separate(sumBuyOrSell / buyAmountCounter) + "T";
// };
