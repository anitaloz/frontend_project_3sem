$(document).ready(function(){
    $(".slider").slick({
        infinite: true,
        arrows : false,
        responsive: [{
            breakpoint: 900,
            settings: {
                infinite: true,
                slidesToShow: 2.7,
                autoplay: true,
                speed: 2000,
            }
        }],
        
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
    });
});
$(document).ready(function(){
    $(".slider2").slick({
        infinite: true,
        arrows : false,
        responsive: [{
            breakpoint: 900,
            settings: {
                infinite: true,
                slidesToShow: 2.7,
                autoplay: true,
                speed: 2000,
            }
        }],
        
        slidesToScroll: 2,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
    });
});