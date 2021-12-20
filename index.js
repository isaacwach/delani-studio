$(document).ready(function() {
    $(".design-icon").click(function(){
        $(".design-icon").slideDown("1500").hide("1000");
        $(".design-text").show("1000");
    })
    $(".design-text").click(function(){
        $(".design-text").hide("1000");
        $(".design-icon").show("1000");
    })
})