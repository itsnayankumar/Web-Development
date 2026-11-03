const color = ["red", "blue", "black", "white", "orange", "yellow"]

const change = document.getElementById("change")
const random = document.getElementById("random")
const color_name = document.getElementById("color-name")

random.addEventListener("click", function(){
    const index = Math.floor(Math.random() * color.length)
    const picked = color[index];

    console.log(index)

    document.body.style.backgroundColor = picked;
    color_name.textContent = picked;
});

let current = 0;

change.addEventListener("click", function(){
    document.body.style.backgroundColor = color[current];
    color_name.textContent =  color[current];
    current++;
    if(current === color.length){
        current = 0;
    }
})