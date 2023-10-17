function displayTime () {
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



   let d = new Date();
   let h = d.getHours();
   let m = d.getMinutes();
   let s = d.getSeconds();
   const day = week[d.getDay()];

    let time = day+" " + h+":"+m+":"+s ;
    
    document.getElementById('time').innerHTML = time
}

setInterval(displayTime, 1000)
// displayTime();s