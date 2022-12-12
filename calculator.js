let inputText = document.getElementById('inputfield');
let expression = '';

function digit(num){
  expression += num;
  inputText.value = expression;
} 

function result(){
    try{
        inputText.value = eval(inputText.value)
    }
    catch(err){
        alert("Enter a valid input");
    }
    expression = '';
    
}

function clr(){
    expression =  '';
    inputText.value = expression;
}

function del(){
    inputText.value = inputText.value.slice(0, -1);
    expression = '';
}