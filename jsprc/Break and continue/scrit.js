let i1 = 0;
let i2 = 0;
let txt1 = "";
let txt2 = "";

function callBreak() {
  for (i1 = 1; i1<=10; i1++) {
    txt1 += i1 + "<br>";
    if (i1 === 6) {
      break;
    }
  }
  document.getElementById("demo").innerHTML = txt1;
}
