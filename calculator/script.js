let numOne=document.getElementById("one")
numOne.addEventListener("click",function(){
    document.getElementById("value-display").innerHTML="1"
})


function add(a,b){
    let x=parseInt(a)+parseInt(b)
    console.log(x)
}
function sub(a,b){
    console.log(a-b)
}
function multiply(a,b){
    console.log(a*b)
}
function divide(a,b){
    console.log(a/b)
}

function operate(){
    //let num1=prompt("Enter the first number ")
    //let num2=prompt("Enter the second number ")
    //let operator=prompt("Enter the oprator ")
    if(operator=="+")
    {
       add(num1,num2)
    }
    else if(operator=="-")
    {
        sub(num1,num2)
    }
    else if(operator=="*")
    {
        multiply(num1,num2)
    }
    else if(operator=="/")
    {
        divide(num1,num2)
    }
    
}
operate()