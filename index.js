$(document).ready(function() {
    $(".design-icon").click(function(){
        $(".design-icon").slideDown("1500").hide("1000");
        $(".design-text").show("1000");
    })
    $(".design-text").click(function(){
        $(".design-text").hide("1000");
        $(".design-icon").show("1000");
    })
    $(".dev-icon").click(function(){
        $(".dev-icon").slideDown("1500").hide("1000");
        $(".dev-text").show("1000");
    })
    $(".dev-text").click(function(){
        $(".dev-text").hide("1000");
        $(".dev-icon").show("1000");
    })
    $(".product-icon").click(function(){
        $(".product-icon").slideDown("1500").hide("1000");
        $(".product-text").show("1000");
    })
    $(".product-text").click(function(){
        $(".product-text").hide("1000");
        $(".product-icon").show("1000");
    })
})