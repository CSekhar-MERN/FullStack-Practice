// const array = [
//     {
//         "name": "Domino's",
//         "city": "Delhi",
//         "location_id": 1,
//         "city_id": 1,
//         "locality": "ShalimarBagh",
//         "thumb": [
//             "Assets/breakfast.jpg",
//             "Assets/dinner.png",
//             "Assets/drinks.png",
//             "Assets/dinner.png"
//         ],
//         "aggregate_rating": 4.2,
//         "rating_text": "VeryGood",
//         "min_price": 666,
//         "contact_number": 919453524651,
//         "cuisine": [
//             {
//                 "id": 1,
//                 "name": "NorthIndian"
//             },
//             {
//                 "id": 4,
//                 "name": "FastFood"
//             }
//         ],
//         "image": "Assets/breakfast.jpg",
//         "mealtype_id": 1
//     },
//     {
//         "name": "KFC",
//         "city": "Delhi",
//         "location_id": 1,
//         "city_id": 1,
//         "locality": "ShalimarBagh",
//         "thumb": [
//             "Assets/breakfast.jpg",
//             "Assets/dinner.png",
//             "Assets/drinks.png",
//             "Assets/dinner.png"
//         ],
//         "aggregate_rating": 4.5,
//         "rating_text": "Excellent",
//         "min_price": 333,
//         "contact_number": 919453524651,
//         "cuisine": [
//             {
//                 "id": 2,
//                 "name": "SouthIndian"
//             },
//             {
//                 "id": 4,
//                 "name": "FastFood"
//             }
//         ],
//         "image": "Assets/breakfast.jpg",
//         "mealtype_id": 1
//     },
//     {
//         "name": "BurgerKing",
//         "city": "Delhi",
//         "location_id": 1,
//         "city_id": 1,
//         "locality": "ShalimarBagh",
//         "thumb": [
//             "Assets/breakfast.jpg",
//             "Assets/dinner.png",
//             "Assets/drinks.png",
//             "Assets/dinner.png"
//         ],
//         "aggregate_rating": 4.5,
//         "rating_text": "Excellent",
//         "min_price": 999,
//         "contact_number": 919453524651,
//         "cuisine": [
//             {
//                 "id": 2,
//                 "name": "SouthIndian"
//             },
//             {
//                 "id": 4,
//                 "name": "FastFood"
//             }
//         ],
//         "image": "Assets/breakfast.jpg",
//         "mealtype_id": 1
//     },
//     {
//         "name": "BabaKaDhaba",
//         "city": "Mumbai",
//         "location_id": 5,
//         "city_id": 1,
//         "locality": "AnandVihar",
//         "thumb": [
//             "Assets/breakfast.jpg",
//             "Assets/dinner.png",
//             "Assets/drinks.png",
//             "Assets/dinner.png"
//         ],
//         "aggregate_rating": 3.5,
//         "rating_text": "Excellent",
//         "min_price": 599,
//         "contact_number": 919453524651,
//         "cuisine": [
//             {
//                 "id": 2,
//                 "name": "SouthIndian"
//             },
//             {
//                 "id": 4,
//                 "name": "FastFood"
//             }
//         ],
//         "image": "Assets/breakfast.jpg",
//         "mealtype_id": 2
//     }
    
// ]
 
// // const arr2 = [{'name' :'Rahul'}, {'name' :'shyam'},{'name' : 'Ram'},{'name' : 'abhishek'}]
// // const mp = arr2.map((user)=> user.name)
// // console.log(mp)
// // const neww = array.map((user) =>`name : ${user.name}, city : ${user.city}, locality: ${user.locality}`)
// const neww = array.map((user) => user.cuisine.map((nm)=> nm.name))

// // console.log(neww)

// const table = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
// let value = table.map((tbl) => 9*tbl)
// let value2 = table.map((tbl) => 5*tbl)

// for(let i =0; i<table.length; i++){
//     let count = table[i]*9
//     // console.log(count)
// }
// // console.log(value, value2)


// function myFunc(callback){
//     setTimeout(()=>{
//        let  result = 100
//         callback(result)
//     }, 10000)
//     let rslt = 200
//     callback(rslt)
//     console.log('scnd')
// }

// function newFunc(value){
//     console.log('value is ' + value)
// }

// myFunc(newFunc)

// const year = new Date()
// console.log(year.getUTCDate())
// if(year.getUTCDate() === ){
//     console.log('leap year')
// } else {
//     console.log('not leap year')
// }
// console.log(year.getFullYear()%4)
// if(){

// }

// function prime (num){

//     if(num == 1){
//         console.log(`${num} is not a prime number`)
//     } else if(num < 1){
//         console.log(`${num}is not a prime number`)
//     } else {
//         for(let i = 2 ; i < num; i++){
//             if(num % i == 0){
//                 // console.log(true)
//                 console.log(`${num} is not a prime number`)
//                 break;
//             }else {
//                 console.log(`${num} is a prime number`)
//                 break;
//             }
//         }
//     }

    
// }

// prime(11)

function isPrime(num){
    if(num == 1){
        console.log('not a prime number')
    } else if (num < 1){
        console.log('not a prime number')
        
    }else {
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                var rslt = 'not a prime number';
        break;
            } else {
        var rslt = num + ' prime number'
        // break;
            }
        }
        console.log(rslt)
    }
}
isPrime(17)