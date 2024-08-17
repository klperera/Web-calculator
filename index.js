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
document.addEventListener("keypress", event => {
    console.log(event);
    switch (event.key) {
        case "0":
            addToDisplay('0')
            break;
        case "1":
            addToDisplay('1')
            break;
        case "2":
            addToDisplay('2')
            break;
        case "3":
            addToDisplay('3')
            break;
        case "4":
            addToDisplay('4')
            break;
        case "5":
            addToDisplay('5')
            break;
        case "6":
            addToDisplay('6')
            break;
        case "7":
            addToDisplay('7')
            break;
        case "8":
            addToDisplay('8')
            break;
        case "9":
            addToDisplay('9')
            break;
        case "+":
            addToDisplay('+')
            break;
        case "-":
            addToDisplay('-')
            break;
        case "*":
            addToDisplay('*')
            break;
        case "/":
            addToDisplay('/')
            break;
        case "%":
            addToDisplay('%')
            break;
        case ".":
            addToDisplay('.')
            break;
        case "Enter":
            calculate()
            break;
        default:
            console.log("press only a number.");
            break;
    }
})