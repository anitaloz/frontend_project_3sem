$(document).ready(function() {


 // "Аккордион".
    let cell = document.getElementsByClassName("accordion-cell")[0];
    let text= document.getElementsByClassName("accordion-text")[0];
    $(".accordion h3:first").addClass("active");
    $(".accordion p:not(:first)").hide();
    $(".accordion h3").click(function () {
    $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");
    });

   
}); 