const str = "23456790";
// console.log(arr.length);
const arr = [2, 3, 5, 9, 7, 8]
const obj = {'name': 'ayush', 'mob': 7984653121, 'course':'FSWD', 'Fee': 31820}


// let sort = arr.sort()
// console.log(sort[sort.length-2])

// sort.forEach((e, i)=>{
//     console.log(i+' : ' + [e+2])
// })

// console.log(obj)
let newAr = Array.from(obj)
console.log(newAr)
// obj.forEach((element) => {
//     console.log(element)
// });

for (let i in obj){
    console.log(i+':'+' '+obj[i])
}