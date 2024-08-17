const display = document.getElementById("display");
const his_tab = document.querySelector(".his_tab");
const his_btn = document.querySelector("#history_btn");
const equations = document.querySelector(".equations");
var items = [];

function addToDisplay(input){
    display.value += input;
}
function clrDisplay(){
    display.value = "";
}
function calculate() {
    equations.innerHTML = "";
    let expression = display.value;
    try{
        display.value = eval(expression);
    }
    catch (error){
        display.value = "Error";
    }
    finally{
        items.push(`${expression} = ${display.value}`);
        console.log(items);
        items.forEach(item => {
            var history = document.createElement("p");
            history.innerHTML = item;
            equations.appendChild(history);
        })
    }
}
his_btn.addEventListener("click", () =>{
    if (his_tab.style.display == "block"){
        return his_tab.style.display = "none";
    }
    his_tab.style.display = "block";
})