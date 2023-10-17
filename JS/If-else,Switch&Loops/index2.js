// ------- ODD EVEN ----------

function oddEven(num){
    if(num % 2 === 0 ){
        console.log(`${num} is Even number`)
    } else {
        console.log(`${num} is Odd Number`)
    }
}

// oddEven(10)


//----------- REVERSE STRING ------------

function revString(str){
    let len = str.length;
    console.log(str)
    // console.log(len)
    let revStr = '';
    
     
    for(let i = len-1; i>=0; i--){
        console.log(str[i])
        revStr += str[i]
    }
    return revStr
}
// console.log(revString('hello'))

// ----------- PALINDROM NUMBER --------

function isPalindrome(str){

    const len = str.length;
    // console.log(len)

    for(let i = 0; i< len / 2; i++){
        // console.log(str[len -1 -i])
        if(str[i] !== str[len -1 -i]){
            console.log(`${str} is not plindrome`)
            // return;
        }
    }
    console.log(`${str} is a plaindrome`)
}

// isPalindrome('madam')

// -------- reverse array ------

// const arr = [1,3,2,6,8,7]
// const lnt = arr.length
// var newArr = []
// // var arrSort = arr.sort()

// // var arrSort = arr.sort((a,b)=> b-a)
// // console.log(arrSort)
// for(let i = 0; i<= lnt ; i++){
//     if(arr[i] > arr[i+1]){
//         newArr.push = arr[i]
//     }
// }
// console.log(newArr)


// ------- Leap year -------
//  const year = 2023;

//  if(year % 4 === 0 && year % 400 === 0 || year % 100 !== 0){
//     console.log(`${year} is leap year`)
//  } else {
//     console.log(`${year} is not a leap year`)
//  }



// ----- REVERSE STRING -----

function revrs(str){
    let len = str.length;
    let rvrs = '';

    for(let i= len-1 ; i>=0; i--){
        rvrs += str[i]
    }
    console.log(rvrs)

}

// revrs('Hello')


// evenODD

function evenODDD(num){
    if(Math.floor(num/2)*2 == num){
        console.log('even')
    } else {
        console.log('odd')
    }
}
// evenODDD(6)


// function isEven(number) {
    
//     return (number & 1) === 0;
//   }
  
//   function isOdd(number) {
//     return (number & 1) === 1;
//   }

//   console.log(isEven(6))
//   console.log(isOdd(2))

// let data = ['A', 'B', 'C', 'D', 'E', 'F'];
// let newStr = ''
// for(let i=0; i<= 5; i++){
//     // console.log(i)
//     newStr += data[i]
//     console.log(newStr)
// }

// 2. Find last second largest number in given array?
// const input= [2, 3, 2, 5, 9, 7, 8]
// let newArr = ''
// console.log('unsorted Array : ', input)
// for(let i=0; i<=input.length; i++){
//     if(input[i] > input[i+1]){
//         newArr += input[i]
//         const temp = input[i]
//         input[i]= input[i+1]
//         input[i+1] = temp

//     }
// }
// console.log('newArr is :', newArr)
// const sorted = input
// console.log('sorted array : ',sorted)
// let len = sorted.length;
// console.log(len)
// console.log(sorted[len-2])


	// const input= [2, 3, 2, 5, 9, 7, 8]
    // const len = input.length;
    // // // console.log(len-1-6)

    // for(let i = 0; i < len-1; i++){
    //     for(let j = 0; j<len - 1 - i; j++){
    //      if(input[j] > input[j+1])   {
    //         //swap element
    //         const temp = input[j]
    //         input[j]= input[j+1]
    //         input[j+1]= temp;
    //      }
    //     }
    // }
    // console.log(input)

//     const input = [2, 3, 2, 5, 9, 7, 8];

// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const sortedArray = bubbleSort(input);
// console.log(sortedArray);


// Sorting 

const input= [2, 3, 2, 5, 9, 7, 8]
const len = input.length;

console.log(len)
console.log(input)

for(let i=0; i<len; i++){
    if(input[i] > input[i+1]){
        const temp = input[i];
        input[i] = input[i+1];
        input[i+1] = input[i]
    }
}
console.log(input)



