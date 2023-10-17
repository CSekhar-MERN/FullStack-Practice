var fs = require('fs')
var myRs = fs.createReadStream(__dirname + '/read.txt', 'utf-8')
myRS.on('open', function(){
    console.log('File is open')
}) 
myRs.on('data', function(Content){
    console.log(Content)
})