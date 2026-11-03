let count = 0;
const display  = document.getElementById("count")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const plus = document.getElementById("plus")

plus.addEventListener("click", function(){
    count ++;
    display.textContent = count;
})
minus.addEventListener("click", function(){
    count --;
    display.textContent = count;
})

reset.addEventListener("click", function(){
    count = 0;
    display.textContent = count;
})