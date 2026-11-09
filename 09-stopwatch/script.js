const display = document.getElementById("display");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 0;
let timeId = null;

function updateDisplay(){
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600)/60);
    const s = seconds % 60;

    const hh = String(h).padStart(2, "0");
    const mm= String(m).padStart(2,"0");
    const ss = String(s).padStart(2, "0");

    display.textContent = `${hh}:${mm}:${ss}`;
    
}
start.addEventListener("click", function(){
    if (timeId !== null){
        return;
    }
    timeId = setInterval(function(){
        seconds++;
        updateDisplay()
    },1000);
});
stop.addEventListener("click", function(){
    clearInterval(timeId);
    timeId = null;
})
reset.addEventListener("click", function(){
    clearInterval(timeId);
    timeId = null;
    seconds = 0;
    updateDisplay();
})