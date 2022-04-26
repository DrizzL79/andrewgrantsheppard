/*function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}
  
const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', createParagraph);
}*/

var para = document.querySelector('span');

para.addEventListener('click', printTime);

function printTime() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthname = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var millis = d.getMilliseconds();
    para.textContent = `${weekday[day]} ${date} ${monthname[month]} ${year} ${hours}:${mins}:${secs}:${millis}`;
} 