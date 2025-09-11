let countSpan = document.getElementById("count");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click", function() {
  count++;
  countSpan.textContent = count;
});

minusBtn.addEventListener("click", function() {
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countSpan.textContent = count;
});