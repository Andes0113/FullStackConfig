$("#name").focus()

const emaili = $("#mail");
let jobs = $("#title");

//warnings for incorrect inputs

$(".name-warn").hide();
$(".email-warn").hide();
$(".cbox-warn").hide();
$(".ccard-warn1").hide();
$(".ccard-warn").hide();
$(".zip-warn").hide();
$(".cvv-warn").hide();

//warning for name input
$("#name").keyup(ncheck);
function ncheck(){
    let regparse_name = /^./;
    let x = regparse_name.test($("#name").val())
    if(!x){
        $(".name-warn").show();
    }else{
        $(".name-warn").hide();
    }
    return x;
}
//warning for credit card number
$("#cc-num").keyup(cccheck);
function cccheck(){
    if($("#payment").val() == "Credit Card"){
        let regparse_cc = /^\d{13,16}$/;
        let regparse_cc1 = /\D/;
        let x = regparse_cc.test($("#cc-num").val());
        let y = regparse_cc1.test($("#cc-num").val());
        console.log(y);
        if(y){
            $(".ccard-warn1").show();
        }else{
            $(".ccard-warn1").hide();
            if(!x){
                $(".ccard-warn").show();
            }else{
                $(".ccard-warn").hide();
            }
        }
        return x;
    }
    return true;
}
//warning for zip code
$("#zip").keyup(zipcheck);
function zipcheck(){
    if($("#payment").val() == "Credit Card"){
        let regparse_zip = /^\d{5}$/;
        let x = regparse_zip.test($("#zip").val());
        if(!x){
            $(".zip-warn").show();
        }else{
            $(".zip-warn").hide();
        }
        return x;
    }
    return true;
};
//warning for cvv
$("#cvv").keyup(cvvcheck);
function cvvcheck(){
    if($("#payment").val() == "Credit Card"){
        let regparse_cvv = /^\d{3}$/;
        let x = regparse_cvv.test($("#cvv").val())
        if(!x){
            $(".cvv-warn").show();
        }else{
            $(".cvv-warn").hide();
        }
        return x;
    }
    return true;
}
//warning for email
emaili.keyup(echeck);
function echeck(){
    let regparse_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let x = regparse_email.test(emaili.val());
    if(!x){
        $(".email-warn").show();
    }else{
        $(".email-warn").hide();
    }
    return x;
};
//checks if all inputs are correct and then confirms form submittion
$("#subbut").click(function(){
    console.log(cccheck());
    if(ncheck()&&cccheck()&&zipcheck()&&cvvcheck()&&echeck()&&checkChecked()){
        window.location.replace("https://rlv.zcache.com/big_smile_happy_face_drawer_knob_srf-r95f84f7818be4b3aa45a36488e23c00d_zp2d5_540.jpg?rlvnet=1");
    }
});

//Shirt options
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

//other job input
$("#other-title").hide();
jobs.change(()=>{
    if(jobs.val() == "other"){
        $("#other-title").show();
    }else{
        $("#other-title").hide();
    }
});

//activities checkboxes
$(".cost").hide();
let activities = $(".activities :input");
let lastchecked;
activities.click(()=>{
    activities.each(function(index, e){
        activities.each(function(index, x){
            //checks if one is checked then disables the other
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
    getCost();
    checkChecked();
});

//checks to make sure an activity has been selected
function checkChecked(){
    let checked = false;
    activities.each(function(index,e){
        if($(e).is(":checked")){
            checked = true;
        }
    });
    if(checked){
        $(".cbox-warn").hide();
    }else{
        $(".cbox-warn").show();
    }
    return checked;
}
//adds up cost
function getCost(){
    let sum = 0;
    activities.each(function(index, e){
        if($(e).is(":checked")){
            sum+= parseInt($(e).attr("data-cost").substring(1));
        }
    });
    $(".cost").html("Total Cost: $" + sum);
    $(".cost").show();
    console.log(sum);
}

//hides payment info that is not selected
$("#credit-card").show();
$("#payment").val("Credit Card");
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