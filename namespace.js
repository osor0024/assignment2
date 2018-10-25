var OSOR0024 = {
    init: function () {
        let newDiv = document.createElement("div");
        newDiv.className= ("box");
        newDiv.textContent= ("osor0024");
        document.getElementById("boxes").appendChild("newDiv");


        newDiv.addEventListener("mouseover", function () {
            newDiv.classList.toggle("highlight");
        });

        newDiv.addEventListener("mouseout", function () {
            newDiv.classList.toggle("highlight");
            newDiv.removeAttribute("style");
        });

        newDiv.addEventListener("click", function () {
            newDiv.style.borderColor = "pink";
            newDiv.style.backgroundColor = "red";
        });
    }
        
    //    },

    //    mouseover: function (e) {
    //        e.target.classList.toggle("highlight");
    //        newDiv.addEventListener("mouseover", mouseOver);
    //    },
    //
    //    mouseout: function (e) {
    //        e.target.classList.toggle("highlight");
    //        e.target.removeAttribute("highlight");
    //        newDiv.addEventListener("mouseout", mouseOut);
    //    },
    //
    //    click: function () {
    //        this.style.borderColor = "pink";
    //        this.style.backgroundColor = "red";
    //        console.log(this);
    //        newDiv.addEventListener("click", click);
    //    }

};
