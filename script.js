const button = document.getElementById("actionBtn");

let clickCount = 0;

if (button) {
  button.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
      console.log("Button clicked once");
    } else if (clickCount === 2) {
      console.log("Button clicked twice");
    } else {
      console.log("Button clicked many times");
    }
  });
}



