$(function()
    {
        $("#navItemsforNavigation").hide();
    }
);

var btn = document.getElementById("iconMenu");
btn.addEventListener('click', runEventOne);

function runEventOne()
{
    $(function()
        {

            $("#navigation").slideToggle(1000);
            $("#navItemsforNavigation").slideDown(1000);
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

            $("#navItemsforNavigation").slideUp(1000);
            $("#navigation").show(1000);

        }
    );
}

