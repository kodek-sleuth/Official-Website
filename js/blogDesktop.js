$(function()
    {
        $("#navText").hide();
        $("#image2").hide();
    }
);

var btn = document.getElementById("menuIcon");
btn.addEventListener('click', runEventOne);

function runEventOne()
{
    $(function()
        {
            $("#menuIcon").hide(300);
            $("#closeIcon").show(400);
            $("#navText").show(500);
           
        }
    );
}

var btn2 = document.getElementById("iconClose");
btn2.addEventListener('click', runEventTwo);

function runEventTwo()
{
    $(function()
        {
            $("#closeIcon").hide(500);
            $("#navText").hide(600);
            $("#menuIcon").show(700);
        }
    );
}

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