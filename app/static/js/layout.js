function myFunction(x) {
    if (x.matches) { // If media query matches
        $(".main-div").attr("class", "container main-div px-0")
        $(".card").css({
            "border-radius": "0px"
        })
        $(".card").attr("class", "container card px-2 pt-2  justify-content-center")
        $("body").attr("class", "d-flex")
        $(".con").attr("class", "h-100 px-3 py-3 con")
        $(".user").css({"height":$(".card").height() -260})
        $(window).resize( function(){
        $(".user").css({"height":$(".card").height() -260})

});
    } else {
        $(".main-div").attr("class", "w-25 mx-auto main-div")
        $("body").attr("class", "d-flex min-vh-100 justify-content-center align-items-center")
        $(".card").css({
            "border-radius": "15px"
        })
        $(".card").addClass("pb-3")
        $(".con").attr("class", "h-100  con")
        $(".user").css({"height":"284px"})
        $(window).resize( function(){
        $(".user").css({"height":"284px"})
});
    }   
}

var x = window.matchMedia("(max-width: 575px)")
myFunction(x)
x.addListener(myFunction)