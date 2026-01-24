
console.log("SCRIPT LOADED");

const actionBtn = document.getElementById("actionBtn");
const message = document.getElementById("message");

let clicked = false;

if (actionBtn && message) {
  actionBtn.addEventListener("click", function () {
    if (!clicked) {
      message.textContent = "Memento vivere.......";
      clicked = true;
    } else {
      message.textContent = "Click the button to see magic.";
      clicked = false;
    }
  });
}



let count = 0;

const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  counterValue.textContent = count;
}

function changeCount(value) {
  count = count + value;

  if (count < 0) {
    count = 0;
  }

  updateCounter();
}

if (increaseBtn && decreaseBtn && resetBtn && counterValue) {

  increaseBtn.addEventListener("click", function () {
    changeCount(1);
  });

  decreaseBtn.addEventListener("click", function () {
    changeCount(-1);
  });

  resetBtn.addEventListener("click", function () {
    changeCount(-count);
  });

}
