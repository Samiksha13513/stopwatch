let hrs=0;
let min=0;
let sec=0;
let timeinterval;

function start(){
    let count=0;
timeinterval= setInterval (()=>{
count++;
document.getElementById('second').innerHTML= count;
document.getElementById('minute').innerHTML= min;
document.getElementById('hour').innerHTML= hrs;
if (count==60) {
    count=0;
    min++;
if (min==60) {
    min=0;
    hrs++;
}



}},100)
}
function pause(){
    clearInterval(timeinterval);
}
function reset(){
    clearInterval(timeinterval);
    hrs=0;
    min=0;
    sec=0;
    document.getElementById('second').innerHTML=0;
    document.getElementById('minute').innerHTML=0;
    document.getElementById('hour').innerHTML=0;
}