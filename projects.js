const para = document.querySelector('button');
const div = document.querySelector('div');
const p = document.createElement('p');

para.onclick = getTime;

function printTime() {
    let d = new Date();
    p.textContent = `${d}`;
    div.appendChild(p);
    p.style.color = "white";
    p.style.backgroundColor = "black";
    p.style.width = "300px";
    p.style.borderRadius = "15px";
    p.style.textAlign = "center";
    p.style.margin = "auto";
} 

function getTime() {
    setInterval(printTime);
}
