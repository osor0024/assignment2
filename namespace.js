var OSOR0024 = {
    init: function () {
        document.createElement("div");
        document.getElementsByTagName("div")[0].setAttribute("class", "box");
        let b = document.querySelector(".box");
        b.textContent("osor0024");
        document.getElementById("boxes").appendChild("div");


        function mouseover(highlight) {
            b.addEventListener("mouseover", mouseOver);
        },

        function mouseout(highlight) {
            b.addEventListener("mouseout", mouseOut);
        },

        function click() {
            b.addEventListener("click", click);
        }

    }
}
OSOR0024.init()
