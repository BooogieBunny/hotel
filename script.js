$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $(".navbar ul").toggleClass("open");
        $(".content").toggleClass("open");
    })
})
