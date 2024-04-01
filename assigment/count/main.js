const btnMinus = document.querySelector(".counter-descrease");
const btnPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = Number(counterNumber.textContent);

btnPlus.addEventListener("click", function () {
  counterValue++;
  counterNumber.textContent = counterValue;
});
btnMinus.addEventListener("click", function () {
  if (counterValue > 0) {
    counterValue--;
    counterNumber.textContent = counterValue;
  }
});
