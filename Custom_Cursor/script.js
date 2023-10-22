let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", function(val){
    cursor.style.left = val.x + "px";
    cursor.style.top = val.y + "px";
})