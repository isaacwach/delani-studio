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


    $(".image").mouseover(function(){
        $("#hidden1").show()
    })
    $(".image").mouseout(function(){
        $("#hidden1").hide()
    })
    $(".image1").mouseover(function(){
        $("#hidden2").show()
    })
    $(".image1").mouseout(function(){
        $("#hidden2").hide()
    })
    $(".image2").mouseover(function(){
        $("#hidden3").show()
    })
    $(".image2").mouseout(function(){
        $("#hidden3").hide()
    })
    $(".image3").mouseover(function(){
        $("#hidden4").show()
    })
    $(".image3").mouseout(function(){
        $("#hidden4").hide()
    })
    $(".image4").mouseover(function(){
        $("#hidden5").show()
    })
    $(".image4").mouseout(function(){
        $("#hidden5").hide()
    })
    $(".image5").mouseover(function(){
        $("#hidden6").show()
    })
    $(".image5").mouseout(function(){
        $("#hidden6").hide()
    })
    $(".image6").mouseover(function(){
        $("#hidden7").show()
    })
    $(".image6").mouseout(function(){
        $("#hidden7").hide()
    })
    $(".image7").mouseover(function(){
        $("#hidden8").show()
    })
    $(".image7").mouseout(function(){
        $("#hidden8").hide()
    })
})


var email=document.getElementById("mce-EMAIL").value;
function validateEmail(mail) {
    var name=document.getElementById("mce-FNAME").value;
    var email=document.getElementById("mce-EMAIL").value;
    if (name===""||name===null) {
        alert("Please enter your name")
        return false
    }
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailFormat))
    {
    alert(name + ' we have received your email. Thank you for contacting us.');
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    return false;
    }
}