let deg = 6;
//Get all the clocks
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');
//Start of the mechanical movement of the watch
setInterval(() => {
    //get time
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    //The movement of each scorpion
    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})