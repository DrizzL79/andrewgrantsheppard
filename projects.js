const para = document.querySelector('button');
const div = document.querySelector('div');
const p = document.createElement('p');


para.onclick = getTime;

function printTime() {
    let d = new Date();
    p.textContent = `${d}`;
    div.id="date";
    div.appendChild(p);
    para.parentNode.removeChild(para);    
} 

function getTime() {
    setInterval(printTime);
}
