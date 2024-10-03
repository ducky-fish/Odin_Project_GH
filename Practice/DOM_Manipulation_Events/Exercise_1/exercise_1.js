// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pRed = document.createElement("p");
pRed.classList.toggle("pRed");
pRed.textContent = "Hey, I'm Red!";

pRed.style.color = 'red';

container.appendChild(pRed);

const h3Blue = document.createElement("h3");
h3Blue.classList.toggle("h3Blue");
h3Blue.textContent = "I'm a blue h3!";

h3Blue.style.color = 'blue';

container.appendChild(h3Blue);

const divPinkBlack = document.createElement("div");
content.setAttribute("div","divPinkBlack");
//What is the line below doing??
divPinkBlack.classList.toggle("divPinkBlack");

divPinkBlack.setAttribute("style", "border: medium solid black; background: pink");

divPinkBlack.classList.toggle("h1");
divPinkBlack.classList.toggle("p");

const h1 = document.createElement("h1");
const p = document.createElement("p");

h1.textContent = "I'm in a div!";
p.textContent = "Me too!";

divPinkBlack.appendChild(h1);
divPinkBlack.appendChild(p);

container.appendChild(divPinkBlack);