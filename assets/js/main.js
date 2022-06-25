let buttons = document.querySelectorAll(".numButtons");
let history = document.querySelector("#history");
let ans = document.querySelector("#displayResult");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".red")


buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        let values = e.target.dataset.num;
        history.value += values;
    })
})
 clear.addEventListener('click', function(e) {
    history.value ="";   
    ans.value="";
 })
 equal.addEventListener('click', function(e){
    let answer = eval(history.value);
    ans.value = answer;
 })
