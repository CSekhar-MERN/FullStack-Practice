// accesss data of html body
console.log(document.body);
// access data of html head
console.log(document.head);
// access data of whole html 
console.log(document.documentElement);


const element1 = document.getElementById("ss");
const tag1 = document.getElementsByTagName("span");
console.log(tag1);
const head = document.getElementById("head");
const input = document.querySelector("input");
const mybtn = document.querySelector("button");




tag1[0].style.fontSize="x-large";
tag1[0].style.color="red";
element1.style.fontSize="x-large";

element1.innerText = "Shekhar";
element1.innerHTML= `<h1 class = "dom">Shekhar</h1>`;

const dom = document.getElementsByClassName("dom");
console.log(dom);

element1.style.backgroundColor = "blue";
element1.style.display = "flex";
element1.style.margin = "80px";
element1.style.textAlign = "center"


// input text
input.addEventListener("change", (e) => {
    console.log(heading);
    head.innerText=([e.target.value]);
});

head.style.fontSize = "50px"
head.style.textAlign= "center";
head.style.font = "bold 3.5rem 'Roboto'"
head.style.textDecoration = " underline";

// getAttribute is used for getting your id or class
console.log(mybtn.getAttribute("class"));
console.log(head.getAttribute("class")); 
console.log(head.getAttribute("id"));

// setAttribute is used for set id or class
mybtn.setAttribute("class", "bttubhai");
console.log(mybtn.getAttribute("class"));

// create a element or html tag

const h2 = document.createElement("h2");
h2.innerHTML ="this is h2"

// (Append) print element at end of the code
document.body.append(h2)

// (Prepend) print element at end of the code
const h3 = document.createElement("h3");
h3.innerHTML ="this is h3"

document.body.prepend(h3)

// button 2
const mybtn2 = document.querySelectorAll("button");
console.log(mybtn2[1]);

