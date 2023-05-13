$(function () {
    $(".start").on("click", function(){
        var currentleft = parseInt($(".box").css("left").replace("px", ""));
        $(".box").css("left", (currentleft + 250) + "px");
    });

});