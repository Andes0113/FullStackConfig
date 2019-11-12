$("#name").focus()

const emaili = $("#mail");
let jobs = $("#title");
emaili.keyup(checkEmail);
function checkEmail() {
    let x = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emaili.val());
    console.log(x);
    return x;
}


let designinput = $("#design");
let shirtcolorlist = $("#colors-js-puns");
let shirtcolors = $("#color");
shirtcolorlist.hide();
designinput.change(()=>{
    if(designinput.val() == "js puns"){
        shirtcolorlist.show();
        shirtcolorlist.val("Select a Shirt");
        shirtcolors.children().eq(0).show();
        shirtcolors.children().eq(1).show();
        shirtcolors.children().eq(2).show();
        shirtcolors.children().eq(3).hide();
        shirtcolors.children().eq(4).hide();
        shirtcolors.children().eq(5).hide();
    }
    else if(designinput.val() == "heart js"){
        shirtcolorlist.show();
        shirtcolorlist.val("Select a Shirt");
        shirtcolors.children().eq(0).hide();
        shirtcolors.children().eq(1).hide();
        shirtcolors.children().eq(2).hide();
        shirtcolors.children().eq(3).show();
        shirtcolors.children().eq(4).show();
        shirtcolors.children().eq(5).show();
    }
    else{
        shirtcolorlist.hide();
    }
});
$("#other-title").hide();
jobs.change(()=>{
    if(jobs.val() == "other"){
        $("#other-title").show();
    }else{
        $("#other-title").hide();
    }
});

let activities = $(".activities :input");
let lastchecked;
activities.click(()=>{
    activities.each(function(index, e){
        activities.each(function(index, x){
            if($(e).attr("data-day-and-time") == $(x).attr("data-day-and-time") && $(e).attr("name") != $(x).attr("name")){
                if($(e).is(":checked")){
                    $(x).parent().toggleClass("striked", true);
                    $(x).prop("disabled", true);
                }
                else if($(x).is(":checked")){
                    $(e).parent().toggleClass("striked", true);
                    $(e).prop("disabled", true);
                }
                if(!$(e).is(":checked") && !$(e).prop("disabled")){
                    $(x).parent().toggleClass("striked", false);
                    $(x).prop("disabled", false);
                }
                else if(!$(x).is(":checked") && !$(x).prop("disabled")){
                    $(e).parent().toggleClass("striked", false);
                    $(e).prop("disabled", false);
                }
            }
        });
});

$("#credit-card").show();
$("#paypal").hide();
$("#bitcoin").hide();
$("#payment").change(()=>{
    if($("#payment").val() == "Credit Card"){
        $("#credit-card").show();
        $("#paypal").hide();
        $("#bitcoin").hide();
    }
    else if($("#payment").val() == "PayPal"){
        $("#credit-card").hide();
        $("#paypal").show();
        $("#bitcoin").hide();
    }
    else if($("#payment").val() == "Bitcoin"){
        $("#credit-card").hide();
        $("#paypal").hide();
        $("#bitcoin").show();
    }
});

// function showOrHideTip(show, element) {
//     // show element when show is true, hide when false
//     if (show) {
//       element.style.display = "inherit";
//     } else {
//       element.style.display = "none";
//     }
//   }

// function createListener(validator) {
//     return e => {
//       const text =$(this).val();
//       const valid = validator(text);
//       const showTip = text !== "" && !valid;
//       const tooltip = $(this).next();
//       showOrHideTip(showTip, tooltip);
//     };
//   }

// emaili.on("input", createListener(checkEmail));