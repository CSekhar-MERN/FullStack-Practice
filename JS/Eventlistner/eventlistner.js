const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const mybtn = document.getElementById("mybtn");
const input = document.querySelector("input");



mybtn.addEventListener("click", () => {
    box1.classList.add("box1classs")
})

mybtn.addEventListener("dblclick", () => {
    box1.classList.remove("box1classs")
})

mybtn.addEventListener("mouseover", ()=>{
    mybtn.classList.add("btnhover");
    heading.classList.add("h1hover");
    box1.style.backgroundColor="skyblue";

})
mybtn.addEventListener("mouseout", ()=>{
    mybtn.classList.remove("btnhover");
    heading.classList.remove("h1hover");
    box1.style.backgroundColor="";

})

mybtn.addEventListener("click", (e) => {
    e.preventDefault();
})

input.addEventListener("change", (e) => {
    console.log(e.target.value);
    document.getElementById("box1").innerHTML = e.target.value;
})

