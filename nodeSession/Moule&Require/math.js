const add = function(a, b){
    return `Sum of ${a} and ${b} is `+ (a+b)
}

const multi = function(a,b){
    return `Multiplication of ${a} and ${b} is `+ (a*b)
}
const sub = function(a,b){
    return `Substraction of ${a} and ${b} is ` +(a-b)
}


module.exports.add = add
module.exports.multi = multi
module.exports.sub = sub