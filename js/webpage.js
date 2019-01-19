window.onload = function()
{
    $(function()
    {
        $("#navItemsforNavigation").hide();
        $("#blogStories").hide();
        $("#information").hide()
        $("#iconLeft").hide();
        $("#iconLeft2").hide();
    });

    var itemsNav = document.getElementById("navItemsforNavigation");
    itemsNav.style.display="none";

}

$(function()
    {
        $("#navItemsforNavigation").hide();
        $("#blogStories").hide();
        $("#information").hide()
        $("#iconLeft").hide();
        $("#iconLeft2").hide();
        $(".imageTwo").hide()
        $(".imageThree").hide()
        $(".imageFour").hide()

    }
);

var btn = document.getElementById("iconMenu");
btn.addEventListener('click', runEventOne);

function runEventOne()
{
    $(function()
        {
            $("#iconMenu").slideToggle(400);
            $("#navigation").slideToggle(1000);
            $("#navItemsforNavigation").slideDown(1000);
            $("#iconClose").fadeIn(400);
            $("#navItemsforNavigation").animate({
                height: '630px'
            })

        }
    );
}

var btn2 = document.getElementById("iconClose");
btn2.addEventListener('click', runEventTwo)

function runEventTwo()
{
    $(function()
        {
            $("#iconClose").hide(400);
            $("#navItemsforNavigation").slideUp(1000);
            $("#iconMenu").toggle(400);
            $("#navigation").show(1000);

        }
    );
}

var iconClick = document.getElementById("iconRight");
iconClick.addEventListener('click', runEventThree)

function runEventThree()
{
    $(function()
        {
            $("#iconRight").hide(100);
            $("#iconLeft").show(400);
            $("#blogStories").slideDown(500);

        }
    );
}

var iconClick2 = document.getElementById("iconLeft");
iconClick2.addEventListener('click', runEventFour)

function runEventFour()
{
    $(function()
        {
            $("#iconLeft").hide(100);
            $("#iconRight").show(400);
            $("#blogStories").slideUp(300);
        }
    );
}

var iconClick3 = document.getElementById("iconRight2");
iconClick3.addEventListener('click', runEventFive)

function runEventFive()
{
    $(function()
        {
            $("#iconRight2").hide(100);
            $("#iconLeft2").show(400);
            $("#information").slideDown(300);
        }
    );
}

var iconClick4 = document.getElementById("iconLeft2");
iconClick4.addEventListener('click', runEventSix)

function runEventSix()
{
    $(function()
        {
            $("#iconLeft2").hide(100);
            $("#iconRight2").show(400);
            $("#information").slideUp(300);
        }
    );
}

var imgIconRightClick = document.getElementById("imgOneRight");
imgIconRightClick.addEventListener('click', runEventSeven);

function runEventSeven()
{
    $('.imageOne').hide(500);
    $('.imageTwo').show(500);
}

var imgIconRightClick2 = document.getElementById("imgTwoRight");
imgIconRightClick2.addEventListener('click', runEventEight);

function runEventEight()
{
    $('.imageTwo').hide(500);
    $('.imageThree').show(500);
}

var imgIconRightClick3 = document.getElementById("imgThreeRight");
imgIconRightClick3.addEventListener('click', runEventNine);

function runEventNine()
{
    $('.imageThree').hide(500);
    $('.imageFour').show(500);
}

var imgIconRightClickLast = document.getElementById("imgFourRight");
imgIconRightClickLast.addEventListener('click', runEventLast);

function runEventLast()
{
    $('.imageFour').hide(500);
    $('.imageOne').show(500);
}

var imgIconRightClick4 = document.getElementById("imgOneLeft");
imgIconRightClick4.addEventListener('click', runEventTen);

function runEventTen()
{
    $('.imageOne').hide(500);
    $('.imageFour').show(500);
}

var imgIconRightClick5 = document.getElementById("imgTwoLeft");
imgIconRightClick5.addEventListener('click', runEventEleven);

function runEventEleven()
{
    $('.imageTwo').hide(500);
    $('.imageOne').show(500);
}

var imgIconRightClick6 = document.getElementById("imgThreeLeft");
imgIconRightClick6.addEventListener('click', runEventTwelve);

function runEventTwelve()
{
    $('.imageThree').hide(500);
    $('.imageTwo').show(500);
}

var imgIconRightClickLastLeft = document.getElementById("imgFourLeft");
imgIconRightClickLastLeft.addEventListener('click', runEventLastLeft);

function runEventLastLeft()
{
    $('.imageFour').hide(500);
    $('.imageThree').show(500);
}


