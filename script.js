const container = document.querySelector("#container");
const grid =  document.querySelector("#resize-grid");

grid.addEventListener("click",function(){
    const size = prompt("enter a size between 1 and 100");
    const gridSize=  Number(size);
    if (!Number.isInteger(gridSize)||gridSize<1 || gridSize>100){
    alert("enter a  whole number  between 1 and 100")
    return ;}
    container.innerHTML = "";
    for ( let i = 0 ; i<gridSize *gridSize; i++){
   let temp = document.createElement("div");
   temp.classList.add("square");
   container.appendChild(temp);
   const squareSize= 960/gridSize;
    temp.style.width = `${squareSize}px`;
    temp.style.height = `${squareSize}px`;
    
}



});




