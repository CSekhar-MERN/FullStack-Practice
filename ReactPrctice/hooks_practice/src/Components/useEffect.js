import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setNum((num) => num+1);
        }, 1000);
    }, []) //if we are use empty array brackets then it renders only once 



useEffect(()=>{
    setCalc(()=> count * 2)
}, [count]); //it render in every updation


useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.data)
    .then(res => {setAlbums(res)})
    .catch(error =>{
        console.log(error)
    })
}, [])

    return(
        <>
        <div>
            <h1>Hello Effect</h1>
<h2>Automatically change number in every second : {num}</h2>

<h1>If the Count variable update the effect will run again: </h1>
 
 <h2><span>Count: </span> {count}</h2>

 <button onClick={()=> setCount((c)=> c+ 1)}>+</button>

 <h2><span>Calculation : </span> {calc}</h2>


        </div>

        <div>
            <h1>Photos</h1>
            {albums.map((item)=>{
                return <li key={item.id}>{item.title} <br /> <img src={item.url} alt={item.thumbnailUrl} /> </li> 
            })}
        </div>
        </>
    )
}

export default UseEffect;