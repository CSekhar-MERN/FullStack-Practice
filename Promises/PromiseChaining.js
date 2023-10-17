const p1 = new Promise((res, rej) =>{
    console.log('P1 promise is start excuting')
    setTimeout(() =>{
        console.log('Resolve in 2 Seconds please wait until Resolve')
        res(56)
    }, 2000)
})

p1.then((value)=>{
    console.log('p1 is Resolve '+ value)
    let p2 = new Promise((res, rej) =>{
        console.log('p2 is in queue wait for 2 sec')
        setTimeout(()=>{
            res('p2 is resolve')
        }, 2000)
    })
    return p2;
}).then((value)=>{
    console.log('we are done ' +value)
}).then((value)=>{
    console.log('then handler no. 3')
    return 2
}).then((value)=>{
    console.log('then handler no. 4')
})