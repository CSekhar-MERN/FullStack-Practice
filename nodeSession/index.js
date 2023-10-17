var fs = require('fs')
setTimeout(function(){
    console.log('welcome to Edureka')
}, 3000)
console.log('Function is paused for 3sec')

var time = 0
var timer = setInterval(function(){
    time += 2
    if(time > 8){
        clearInterval(timer)
    }else{

        console.log(time+ "next")
    }
}, 2000)

console.log(__dirname)//directory name
console.log(__filename)//file name

function sayHello(){
    console.log('Welcome to edureka learning center')
}
function sayBye(){
    console.log('Good bye')
}

// function callFunc(cf){
//     cf()
// }
 sayHello()
 sayBye()

//  callFunc(sayBye())

var rf = fs.readFileSync('text1.txt', 'utf8')
console.log(rf)

var wr = fs.writeFileSync('text2.txt', rf)
console.log('content is written ')


