$(function()
    {
        $("#image2").hide();
    }
);



var btn3 = document.getElementById("Down");
btn3.addEventListener('click', runEventThree);

function runEventThree()
{
    $("#image1").hide(1000);
    $("#image2").show(1500);
}

var btn4 = document.getElementById("Up");
btn4.addEventListener('click', runEventFour);

function runEventFour()
{
    $("#image1").hide(1000);
    $("#image2").show(1500);
}

var btn5 = document.getElementById("pyDown");
btn5.addEventListener('click', runEventFive);

function runEventFive()
{
    $("#image2").hide(1000);
    $("#image1").show(1500);
}

var btn6 = document.getElementById("pyUp");
btn6.addEventListener('click', runEventSix);

function runEventSix()
{
    $("#image2").hide(1000);
    $("#image1").show(1500);
}