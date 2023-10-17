// Make a function type 1

// function printValue(a, b, c){
//     let result = (a*10+b*10+c*10)/2;
//     console.log(result)
//     let result2 = result+ 100;
//     console.log(result2);
// }

// printValue(15, 15, 15);
// printValue(17, 15, 16);

// Make a function type 2
// const myFunc = function (a = 0, b = 0, c = 0) {
//   let result = (a * 10 + b * 10 + c * 10) / 2;
//   let result2 = result + 100;
//   return result2;
// };
// let ans = myFunc(17, 15, 16);
// console.log(ans);

// Make A FUNCTION TYPE 3 WITH ARRAY METHOD

function totalArray(arr = []) {
    let total = 0;
    for(let i = 0; i<arr.length; i++){
        total = total + arr[i];
    }

    return total;
}

const arr = [1, 2, 3, 4, 5];
console.log(totalArray(arr));


