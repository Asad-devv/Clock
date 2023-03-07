let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

function clock() {
  let d = new Date(); // create Date object inside function
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  hrs.textContent = h;
  min.textContent = m;
  sec.textContent = s;
  if (h > 12) {
    h = h - 12;
    ampm.textContent = "pm";
  }
  setTimeout(() => {
    clock();
  }, 1000);
}

clock(); // call clock function to start the clock
