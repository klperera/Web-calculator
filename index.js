const display = document.getElementById("display");
var items = [];

function push(data){
    items.push(data);
}

function addToDisplay(input){
    display.value += input;
}
function clrDisplay(){
    display.value = "";
}
function calculate() {
    items.push(`${display.value} = ${eval(display.value)}`);
    try{
        display.value = eval(display.value);
        
    }
    catch (error){
        display.value = "Error"
    }
}
function history(){
    var his_tab = document.getElementsByClassName("his_tab");
    console.log(items);
    
    
    his_tab.textcontent = items;
    

}
