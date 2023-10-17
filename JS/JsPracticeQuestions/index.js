// ODD EVEN ---------

function oddeven(num){
    if(num % 2 == 0){
        console.log(`${num} is a even number`)
    } else {
        console.log(`${num} is a odd number`)
    }
}

// oddeven(12)


// REVERSE STRING -------

function Restring(str){
    const lnt = str.length;
    console.log(lnt)

    let newStr = '';

    for(let i=lnt-1; i>=0; i--){
        console.log(str[i])
        newStr += str[i]
    }
    console.log(newStr)
    return newStr
}

// Restring('Hello');


// PALINDROME NUMBER -------

function checkPalindrome(str){
    const lnt = str.length;
    console.log(lnt);

    for(let i=0; i< lnt / 2; i++){
        // console.log(str[i])
        if(str[i] !== str[lnt -1 -i]){
            console.log(`${str} is not a palindrome`)
        } else {
        console.log(`${str} is a plindrome `)
        }
        
    }
}

// checkPalindrome('madamm')


// LEAP YEAR ------

function isLeap(year){

if((year % 4=== 0 && year % 100 !== 0 ) || year % 400 === 0 ){
        console.log(`${year} is a leap year`)
    } else {
        console.log('not a leap year')
    }

}

isLeap(2024)
