function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀"
            resolve(cheese)
        }, 2000)
    })
}
function makeDough(cheese){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dough = cheese + 'DOUGH';
            resolve(dough);
        }, 2000)
    })
}

function bakePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough+ 'PIZZA';
            resolve(pizza)
        }, 2000);
    })
}

async function orderPizza() {
    const cheese = await getCheese();
    console.log('here is the cheese', cheese);
    const dough = await makeDough();
    console.log('here is the dough', dough);
    const pizza = await bakePizza();
    console.log('here is the pizza', pizza);
}

orderPizza()