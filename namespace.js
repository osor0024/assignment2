var OSOR0024 = {
    init: function () {
        document.createElement("div");
        document.getElementsByTagName("div")[0].setAttribute("class", "box");
        let b = document.querySelector(".box");
        b.textContent("osor0024");
        document.getElementById("boxes").appendChild("div");
    },
style: function(){
    this.style.borderColor = "pink";
    this.style.backgroundColor = "red";
},
    mouseover: function (highlight) {
        b.addEventListener("mouseover", mouseOver);
    },

    mouseout: function (highlight) {
        b.addEventListener("mouseout", mouseOut);
    },

    click: function (style) {
        b.addEventListener("click", click);
    }


}
OSOR0024.init()
