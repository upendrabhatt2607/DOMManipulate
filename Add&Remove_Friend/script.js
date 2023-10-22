let friendStatus = document.querySelector("h5");
let btn = document.querySelector("#btn");
var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        friendStatus.innerHTML = "Friends";
        friendStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag = 1;
    }else{
        friendStatus.innerHTML = "Stranger";
        btn.innerHTML = "Add Friend";
        friendStatus.style.color = "rgb(220, 34, 34)";
        flag = 0;
    }
})