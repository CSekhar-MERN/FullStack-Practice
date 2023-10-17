const input = document.getElementById("numOfwords");

const container = document.querySelector(".main");

let numOfwords;
const generatePara = () => {
    numOfwords = Number(input.value);


const para = document.createElement("p");

para.innerText = "sample para";

para.setAttribute("class", "paras");

container.append(para);

};