// MAKE A IF-ELSE LOOP TYPE 1

// let iceCream = 30;

// if(iceCream === 10){
//     console.log("Your ice-cream is Blue lagoon");
// } else if( iceCream === 30){
//     console.log("Your Ice-Cream is Chocobar");
// }


// MAKE A IF-ELSE  TYPE 2

// let iceCream = Number(prompt("Enter your Ice-Cream money"));

// if(iceCream === 10){
//     console.log("You will get Mango-Dolly in 10rs");
// }else if(iceCream === 30){
//     console.log("You will get Chocobar in 30rs");
// }else{
//     console.log("We have only Mango-Dolly and Chocobar yet, Please select in between them");
// }


// MAKE A SWITCH CASE STATEMENT TYPE 1


// let iceCream = Number(prompt("Enter your Ice-Cream money"));

// switch (iceCream) {
//     case 10:
//         console.log("You will get Mango-Dolly in 10rs");
//         break;

//         case 30:
//             console.log("You will get Chocobar in 30rs");
//             break;

//             default:
//                 console.log("We have only Mango-Dolly and Chocobar yet, Please select in between them");
//                 break;
// }



// MAKE A FOR LOOP STATEMENT TYPE 1

// for(let i =0; i<10 ; i++){
//     console.log(1);
//     console.log(Math.random());
// }

console.log('hello')

// ------------ IMPLICIT TYPE CONVERSION -----------------


// The Boolean value true is
// converted to number 1 and
// then operation is performed
var t= true + 2; 
// The Boolean value false is
// converted to number 0 and
// then operation is performed
var u = false + 2;
// NUMBER TO STRING
var v = 10 + '5';
//STRING TO NUMBER
var w = 10 - '5';
var x = 10 * '5';
var y = 10 / '5';
var z = 10 % '5';

// console.log(t);
// console.log(u);
// console.log(v)
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);


// --------------- PRIME NUMBER --------------


function isPrime(num){
    if(num < 2){
        return false + ' 1 or less than 1 number is not a Prime number';
    }
        for(let i =2; i * i <= num; i++){
            if(num % i === 0){
                return false + ` ${num} is divisible by ${i}, its not a prime number`
            }
        }
        return true + 'is a prime number'
    
}
// console.log(isPrime(2))


// --------------LEAP YEAR -------------


function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    return true + `${year} is a leap year`
    }
    return false + 'not a leap year'
}

// console.log(isLeapYear(2000))



// ---------- PALINDROME NUMBER ----------


function isPalindrome(str){

    const len = str.length;

    for(let i = 0; i< len / 2; i++){
        if(str[i] !== str[len -1 -i]){
            console.log(`${str} is not plindrome`)
            return;
        }
    }
    console.log(`${str} is a plaindrome`)
}

// isPalindrome('madam')

// var str = 'madas'
// var len = str.length;
// // console.log(len/2)
// for(let i = 0; i< len /2 ; i++){
//     console.log(str[i] !== str[len - 1 - i])
//     // if(str[i] !== str[len-1-i])
//     return;
// }


// ----------- Fibonnacci Series-------
 
function isFibonnacci(num){
    let fibb= [0, 1]

    for(let i = 2; i< num; i++){
        fibb[i] = fibb[i-1] + fibb[i-2]
        console.log(fibb[i]);
    }
}
// isFibonnacci(10)
// console.log()
// let fib = [0,1]

// for(let i=2; i<= 10; i++){
//     console.log(fib[i] = fib[i-1] + fib[i-2])
// }


// -------- REVERSE A STRING -----------


// const str = 'Alias'
// const len = str.length-1;


// for(let i = len; i>= 0; i--){
//     // console.log(str[i])
//     revStr += str[i]
    
// }
// console.log(revStr)


function revString(str){
    const len = str.length
    let revStr = '';

    for(let i = len-1; i>=0; i--){
        // console.log (str[i])
        revStr += str[i]

    }
    return revStr

}

console.log(revString('Hello'))