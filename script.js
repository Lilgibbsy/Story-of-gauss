// Script.js

//HTML Elements
let calcBtn = document.getElementById("clac-btn");

// Add Event Listener
calcBtn.addEventListener("click", calcSum);

//Event Function
function calcSum() {
  let total = 0;
  for (let n = 1; n <= 100; n++) {
    total = total + n;
  }

  //Output the Total
  sumOut.innerHTML = total;
}
