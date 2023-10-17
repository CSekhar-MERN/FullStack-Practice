let promise = new Promise(function(resolve, reject){
    console.log('hello')
    resolve(56)
    reject('an error generate')
})

console.log('Hello One')
setTimeout(function(){
    console.log('Hello two in 2 sec')
}, 2000)

console.log('My name is '+ "Hello Three")
console.log(promise)