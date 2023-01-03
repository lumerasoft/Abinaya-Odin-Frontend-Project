let operator=''
let previousValue=''
let currentValue=''

document.addEventListener("DOMContentLoaded",function(){
    let clear=document.querySelector("#clear-btn")
    let numbers=document.querySelectorAll(".number")
    let operators=document.querySelectorAll(".operator")
    let equal =document.querySelector(".equal")
    let decimal=document.querySelector(".dot")
    let displayValue =document.querySelector(".display-value-row")
    let displayCurrentValue =document.querySelector(".display-current-row")

    numbers.forEach((number)=>number.addEventListener("click",function(e){
        numberOperation(e.target.textContent)
        displayCurrentValue.textContent=currentValue
    }))
    operators.forEach((operatorNum)=>operatorNum.addEventListener("click",function(e){
        operatorOperation(e.target.textContent)
        displayValue.textContent=previousValue+" "+operator
        displayCurrentValue.textContent=currentValue
    }))
    clear.addEventListener("click",function(){
        currentValue=''
        displayValue.textContent=currentValue
        displayCurrentValue.textContent=currentValue
    })
    equal.addEventListener("click",function(){
        if(currentValue!='' & previousValue!=''){
            calculate()
            displayValue.textContent=''
            if(previousValue.length<=5){
                displayCurrentValue.textContent=previousValue
            }
            else{
                displayCurrentValue.textContent=previousValue.slice(0,5)
            }    
        }
    })
    decimal.addEventListener("click",function(){
        addDecimal()
    })
})

function numberOperation(num){
    if(currentValue.length<=5){
        currentValue+=num
    }
}

function operatorOperation(operatorNum){
    operator=operatorNum
    previousValue=currentValue
    currentValue=''
}

function calculate(){
    previousValue=Number(previousValue)
    currentValue=Number(currentValue)
    if(operator=="+")
    {
        previousValue+=currentValue
    }
    else if(operator=="-")
    {
        previousValue-=currentValue
    }
    else if(operator=="*")
    {
        previousValue*=currentValue
    }
    else if(operator=="/")
    {
        previousValue/=currentValue
    }
    previousValue=roundNumber(previousValue)
    previousValue=previousValue.toString()
    currentValue=previousValue.toString()
}

function roundNumber(num){
    return Math.round(num*1000)/1000
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.'
    }
}