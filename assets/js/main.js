let buttons = document.querySelectorAll(".numButtons");
let history = document.querySelector("#history");
let ans = document.querySelector("#displayResult");

buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        let values = e.target.dataset.num;
        history.value += values;
    })
})
function del() {
    let his = history.value.slice(0, -1);
    history.value = his;
}
function clearbtn() {
    history.value ="";   
    ans.value="";
}
function compute(){
    let answer = eval(history.value);
    ans.value = answer;
}

