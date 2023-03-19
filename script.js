let inputbox = document.getElementById("input");
let heading = document.getElementById("main");

inputbox.addEventListener("keypress", function(){
    document.querySelector("#input").style.color = "#609966";
    document.querySelector("#input").style.backgroundColor = "#EDF1D6";
    document.querySelector("#main").style.color = "#B3005E";

});