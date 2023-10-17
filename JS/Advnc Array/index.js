const arr=[2, 4, 6, 8, 10];

// arr.find((value, index) => {
// if (value > 4 && value < 10){

//     console.log(value);
// }
// });


// .find() method print only one value of an array
const result = arr.find((value, index) => {
    if (value > 4){
        return value;
    }
});
console.log(result);

// .filter() method print all the value which filtered in array and gives you a new filtered array
const result2 = arr.filter((value, index) => {
    if(value > 4){
        return value;
    }
})
console.log(result2);

// .every() method is check all the elements of an array
const result3 = arr.every((value, index) => {
    return value > 4;
});
console.log(result3);

// .some() method checks only if one element of an array
const result4 = arr.some((value, index) => {
    return value > 4;
});
console.log(result4);

// forOf()
console.log("ForOf()");
for(let value of arr){
    value = value + 3;
    console.log(value);
}

// forEach()
console.log("ForEach()");
arr.forEach((value, index) => {
    console.log(value);
    console.log(index);
})

// wanna to do total sum of array
let totalSum = 0;
arr.forEach((value, index) => {
    totalSum += value;
});
console.log(totalSum);

// map() is used to do something in your array and it provides you new array never overwrite on your old array

const mapFunc = arr.map((value,index) => {
    return value + 20;
});

console.log(mapFunc);
console.log(arr)