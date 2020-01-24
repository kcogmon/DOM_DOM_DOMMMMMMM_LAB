//color array
var RYGB=["red","yellow","blue","orange","purple", "cyan","aqua"];
//created button
document.addEventListener("DOMContentLoaded" , function(){
    var btn =document.createElement("button");
    btn.innerText ="Add Square";
    document.body.appendChild(btn);
//add event
    btn.addEventListener("click" , addSquare);
//create a div container
    var container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
//create function for addSquare
    function addSquare(){
         var existingSquares = document.getElementsByClassName('squares').length;
        var squares = document.createElement("div");
        squares.className = "squares";
        squares.id=existingSquares;
        document.body.appendChild(squares);
 //create eventListeners for squares       
        squares.addEventListener("click" , randoColor);
        squares.addEventListener("dblclick" , removeNeighbor);
        squares.addEventListener("mouseenter" , showNum);
        squares.addEventListener("mouseleave" , removeNum);
 //put this element in your container       
        container.appendChild(squares);
    }
 //  create function randoColor
        function randoColor(event){
            var index = Math.floor(Math.random()*RYGB.length);
            var newColor = RYGB[index];
            this.style.backgroundColor = newColor;
        }; 
//create showNum function
    function showNum() {
        var id = this.id;
        this.innerText = id;
    }
//create removeNum function
    function removeNum() {
        this.innerText = "";
    }
//removing neighbor
    function removeNeighbor() {
        var id = this.id;
//sets id to identify even numbers
        if (id % 2 === 0) {
// if even, remove the square after
             if (this.nextSibling) {
                 this.nextSibling.remove() ; 
             } else {
                 alert('There are no elements to the right to remove.');
             }
// if odd, remove the square before
            } else {
             if (this.previousSibling) {
            this.previousSibling.remove();
             } else {
            alert('There are no elements to the left to remove.');
             }
        }
     }
})