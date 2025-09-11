let counterSpan = document.getElementById("counter");
let resetBtn = document.getElementById("reset");

let visits = localStorage.getItem("visitCount") || 0;

visits ++;
localStorage.setItem("visitCount", visits);

counterSpan.textContent = visits;

resetBtn.addEventListener("click", () => {
  localStorage.setItem("visitCount", 0);
  counterSpan.textContent = 0;
});