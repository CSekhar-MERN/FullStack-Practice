const arr = ['Rahul', 'Shyam', 'John', 'Moan']

let promise = new Promise((resolve, reject)=>{
    console.log('Promise start and it is pending yet')
    setTimeout(() => {
        console.log('Promise is fulfilled')
        console.log('our array is ['+ arr + ']')
        // reject(new Error('We got an error'))
        resolve(arr.forEach((value) => {

            for(let i = 0; i<=value.length; i++){

                setInterval((i) =>{
                    console.log(i)
                }, 2000)
            }

        }));
        reject('not fulilled')
    }, 5000)
})
// console.log(promise)
promise.then((value) => {
    console.log(value)
}).catch((err)=>{
    console.log(err)
})