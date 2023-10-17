let arr = [];

// arr.push(1, 2, 3, 4, 5, 6);

// console.log(arr);

// if we wana to remove last element then pop() is used
// arr.pop();

// if we wana to remove first element then shift() is used
// arr.shift();

// if we wana to add any element on first index of array then unshift() is used

// arr.unshift(44);

// if we wana to remove any element then splice(which index, to whcich index) is used
// arr.splice(2, 2)

// reverse all array index elements
// arr.reverse();

// arr[0]= 10000;

// console.log(arr);
// console.log(arr.length);

// for(let i = 0; i<10; i++){
//     arr[i]= "Shekhar";
//     console.log(i);
// }
// console.log(arr)
// arr[3]=23


// MAKE A OBJECT 

const obj1 = {
    name: "Shekhar",
    subject: "BCA",
    Age: 22,
    Height: 16
}

const obj2 = {
    1 : obj1["name"],
    2: obj1["subject"],
    3: obj1["Age"],
    4: obj1["Height"],
}

// if you wanna to update or change data then type this
obj2.newData = "Beta";
console.log(obj1);
console.log(obj2);