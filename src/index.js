import "./styles.css";

let incrementBtn = document.getElementById("increment-btn");
let countNum = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  countNum.innerText = count;
}

incrementBtn.addEventListener("click", increment);
