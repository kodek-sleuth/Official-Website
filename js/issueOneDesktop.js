$(function()
    {
        $("#navText").hide()
    }
);

var btn = document.getElementById('menuIcon');
btn.addEventListener('click', runEventOne);

function runEventOne()
{
    $(function()
    {
        $("#menuIcon").hide(300);
        $("#closeIcon").show(500);
        $("#navText").show(600);
    }
    );
}

var btn2 = document.getElementById('iconClose');
btn2.addEventListener('click', runEventTwo);

function runEventTwo()
{
    $(function()
    {
        $("#closeIcon").hide(300);
        $("#navText").hide(500);
        $("#menuIcon").show(600);
    }
    );
}

