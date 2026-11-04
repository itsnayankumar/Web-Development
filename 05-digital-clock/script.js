const time = document.getElementById("time")
const date = document.getElementById("date")

function updateClock(){
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  time.textContent = `${h}:${m}:${s}`;  
}
updateClock();
setInterval(updateClock, 1000);