let color="black"


document.addEventListener("DOMContentLoaded",function(){
createBoard(16)

    let inputBox=document.querySelector("#popup")
    inputBox.addEventListener("click",function(){
        let size=getSize()
        createBoard(size)
    })
})

function  createBoard(size){
    let board=document.querySelector(".sketch-board")
    board.style.gridTemplateColumns=`repeat(${size},1fr)`
    board.style.gridTemplateRows=`repeat(${size},1fr)`
    let numOfDiv=size*size
    for(let i=0;i<numOfDiv;i++)
    {
        let div=document.createElement("div")
        div.addEventListener("mouseover",colorDiv)
        board.insertAdjacentElement("beforeend",div)
    }
}

function getSize()
{
    let inputSize=prompt("Enter the size of the board: ")
    let msg=document.querySelector("#msg")
    if(inputSize<0||inputSize>100)
    {
        msg.innerHTML="Enter the number between 1 to 100"
    }
    else if(inputSize=="")
    {
        msg.innerHTML="Please give the size"
    }
    else
    {
        msg.innerHTML="Start Sketching!!!"
        return inputSize
    }
}

function colorDiv()
{
    if(color=="random")
    {
        this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`
    }
    else
    {
        this.style.backgroundColor='black'
    }
}

function setColor(colorChoice)
{
     color=colorChoice
}

function resetBoard()
{
    let divs=document.querySelectorAll("div")
    divs.forEach((div)=>div.style.backgroundColor="white")
}