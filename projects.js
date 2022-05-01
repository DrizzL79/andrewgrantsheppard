const para = document.querySelector('button');

para.onclick = getTime;

function printTime() {
    var d = new Date();
    para.textContent = `${d}`;
} 

function getTime() {
    setInterval(printTime);
}
