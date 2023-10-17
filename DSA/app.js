// const arr = [11,7,2,15]
// const target = 9;
// const len = arr.length;

// let newArr = []
// for(let i = 0; i<=len; i++){
//     if(arr[i-1] + arr[i] ==  9){
//         console.log(i-1 , i)
//         newArr.push(i-1, i)
//     } 
// }
// console.log('index is : ',newArr)


function findIndex(arr, target){
    const len = arr.length;
    

    let newArr = []
for(let i = 0; i<=len-1; i++){
    for(let j=i+1; j<=len; j++){

        if(arr[i] + arr[j] ==  target){
            // console.log(i , j)
            newArr.push(i, j)
            // return [i, j]
        } 
    }
}
console.log('index is : ',newArr)

}

const ary = [10,15,4,3,2,1]
const value = 11

findIndex(ary, value)