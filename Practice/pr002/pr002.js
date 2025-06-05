const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
function btnAlert(){
    btn3.style.color = "rgb(159,86,86)";
    alert("lalala");
}
function changeText(id){
    id.style.fontsize = "8px";
    id.innerHTML = "text has changed!"
}
btn3.addEventListener("click", btnAlert);
btn4.addEventListener("click", () => changeText(btn4))
