$("ul a").css("text-transform", "uppercase");
$(function () {
    $("#btnHome").hide();

    $("#btnAbout").on("click", function() {
        alert("xin chao da den voi trang web demo!s");
    });

    $("button").on("click", function(){
        $("#btnHome").toggle();
    })
    
    var newLi = $("<li>").append($("<a>").html("Login"));
    
    $("a").parent("ul").append(newLi);
});