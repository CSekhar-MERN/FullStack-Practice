var sh1 = require('./hello')
var ma = require('./math')
var fs = require('fs')
var rf = fs.readFileSync('text1.txt', 'utf8')
var wf = fs.writeFileSync('text2.txt', 'Hello this is written by writeFileSync command')
var df = fs.unlinkSync('text2.txt')


console.log(sh1())
console.log(ma.multi(40,30));
console.log(ma.add(20, 40))
console.log(rf)
console.log(wf)
console.log('file deleted')