const arr = ['Apple', 'Apple', 'Banana', 'Orange', 'Pineapple', 'Kiwi', 'Berry', 'Apple', 'Orange', 'Orange', 'Orange', 'Kiwi', 'Banana'];
let apple = [];
let banana = [];
let kiwi = [];
let orange = [];
let demo = document.getElementById('demo');
let para = document.createElement('p')


console.log(arr)

for (let fruit of arr) {
  if (fruit === 'Apple') {
    apple.push(fruit);
  } else if (fruit === 'Banana') {
    banana.push(fruit);
  } else if (fruit === 'Kiwi') {
    kiwi.push(fruit);
  } else if (fruit === 'Orange') {
    orange.push(fruit);
  }
}
// console.log('Apple:', apple);
// console.log('Banana:', banana);
// console.log('Kiwi:', kiwi);
// console.log('Orange:', orange);
let appLen = apple.length;
let banLen = banana.length;
let kiwLen = kiwi.length;
let oraLen = orange.length;
// functions
function appleFunc() {
  // let apparr= "";
  apple.forEach((element, index) => {

    demo.innerHTML += '<ul><li>' + index + " " + element + '</li></ul>';
  });
  para.innerHTML = 'Only ' + appLen + ' are left in Apple bucket';
  demo.append(para);
}

function bananaFunc() {
  banana.forEach((element, index) => {
    demo.innerHTML += '<ul><li>' + index + " " + element + '</li></ul>';
  })
  para.innerHTML = 'Only ' + banLen + ' are left in Banana Bucket';
  demo.appendChild(para);
}

function kiwiFunc() {
  kiwi.forEach((element, index) => {
    demo.innerHTML += '<ul><li>' + index + " " + element + '</li></ul>';
  })
  para.innerHTML = 'Only ' + kiwLen + ' are left in Kiwi Bucket';
  demo.appendChild(para);
}

function orangeFunc() {
  orange.forEach((element, index) => {
    demo.innerHTML += '<ul><li>' + index + " " + element + '</li></ul>';
  })
  para.innerHTML = 'Only ' + oraLen + ' are left in Orange Bucket';
  demo.appendChild(para);
}
