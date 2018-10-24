let b = null;
var OSOR0024 = {
   init: function () {
    document.createElement("div");
        d.className.add("box");
        b = document.querySelector(".box");
        b.textContent("osor0024");
        document.getElementById("boxes").appendChild("div");


/********************************
     Events
*********************************/

        function mouseover(highlight){
            b.addEventListener("mouseover", mouseOver);
        }
        
        function mouseout(highlight){
            b.addEventListener("mouseout", mouseOut);
                           }
        function click(){
            b.addEventListener("click", click);
        }
        
    }
}
OSOR0024.init()