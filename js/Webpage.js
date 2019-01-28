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
                height: '700px'
            })
            $(".quote").hide(500);
            $(".poweredBy").hide(500);
            $(".smallIntro").hide(500);
            $(".sampleGallery").hide(500);
            $(".BusinessSide").hide(500);
            $(".helpBusiness").hide(500);
            $(".helpEducation").hide(500);
            $(".Reach").hide(500);
            $(".footer").hide(500);


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
            $(".quote").show(1000);
            $(".poweredBy").show(1000);
            $(".smallIntro").show(1000);
            $(".sampleGallery").show(1000);
            $(".BusinessSide").show(1000);
            $(".helpBusiness").show(1000);
            $(".helpEducation").show(1000);
            $(".Reach").show(1000);
            $(".footer").show(1000);

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
            $(".quote").css({opacity: '0.5'});
            $(".poweredBy").css({opacity: '0.5'});
            $(".smallIntro").css({opacity: '0.5'});
            $(".sampleGallery").css({opacity: '0.5'});
            $(".BusinessSide").css({opacity: '0.5'});
            $(".helpBusiness").css({opacity: '0.5'});
            $(".helpEducation").css({opacity: '0.5'});
            $(".Reach").css({opacity: '0.5'});
            $(".footer").css({opacity: '0.5'});

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
            $("#blogStories").slideUp(500);
            $(".quote").css({opacity: '10'});
            $(".poweredBy").css({opacity: '10'});
            $(".smallIntro").css({opacity: '10'});
            $(".sampleGallery").css({opacity: '10'});
            $(".BusinessSide").css({opacity: '10'});
            $(".helpBusiness").css({opacity: '10'});
            $(".helpEducation").css({opacity: '10'});
            $(".Reach").css({opacity: '10'});
            $(".footer").css({opacity: '10'});
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
            $(".quote").css({opacity: '0.5'});
            $(".poweredBy").css({opacity: '0.5'});
            $(".smallIntro").css({opacity: '0.5'});
            $(".sampleGallery").css({opacity: '0.5'});
            $(".BusinessSide").css({opacity: '0.5'});
            $(".helpBusiness").css({opacity: '0.5'});
            $(".helpEducation").css({opacity: '0.5'});
            $(".Reach").css({opacity: '0.5'});
            $(".footer").css({opacity: '0.5'});
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
            $(".quote").css({opacity: '10'});
            $(".poweredBy").css({opacity: '10'});
            $(".smallIntro").css({opacity: '10'});
            $(".sampleGallery").css({opacity: '10'});
            $(".BusinessSide").css({opacity: '10'});
            $(".helpBusiness").css({opacity: '10'});
            $(".helpEducation").css({opacity: '10'});
            $(".Reach").css({opacity: '10'});
            $(".footer").css({opacity: '10'});
        }
    );
}

var imgIconRightClick = document.getElementById("imgOneRight");
imgIconRightClick.addEventListener('click', runEventSeven);

function runEventSeven()
{
    $(function()
        {
            $('.imageOne').hide(500);
            $('.imageTwo').show(500);
        }
    );
  
}

var imgIconRightClick2 = document.getElementById("imgTwoRight");
imgIconRightClick2.addEventListener('click', runEventEight);

function runEventEight()
{
    $(function()
        {
            $('.imageTwo').hide(500);
            $('.imageThree').show(500);
        }
    );
   
}

var imgIconRightClick3 = document.getElementById("imgThreeRight");
imgIconRightClick3.addEventListener('click', runEventNine);

function runEventNine()
{
    $(function()
       {
        $('.imageThree').hide(500);
        $('.imageFour').show(500); 
       }
    );
   
}

var imgIconRightClickLast = document.getElementById("imgFourRight");
imgIconRightClickLast.addEventListener('click', runEventLast);

function runEventLast()
{
    $(function()
        {
            $('.imageFour').hide(500);
            $('.imageOne').show(500);
        }
    );
   
}

var imgIconRightClick4 = document.getElementById("imgOneLeft");
imgIconRightClick4.addEventListener('click', runEventTen);

function runEventTen()
{
    $(function()
        {
            $('.imageOne').hide(500);
            $('.imageFour').show(500);
        }
    );
   
}

var imgIconRightClick5 = document.getElementById("imgTwoLeft");
imgIconRightClick5.addEventListener('click', runEventEleven);

function runEventEleven()
{
    $(function()
        {
            $('.imageTwo').hide(500);
            $('.imageOne').show(500);
        }
    );
   
}

var imgIconRightClick6 = document.getElementById("imgThreeLeft");
imgIconRightClick6.addEventListener('click', runEventTwelve);

function runEventTwelve()
{
    $(function()
        {
            $('.imageThree').hide(500);
            $('.imageTwo').show(500);
        }
    );
  
}

var imgIconRightClickLastLeft = document.getElementById("imgFourLeft");
imgIconRightClickLastLeft.addEventListener('click', runEventLastLeft);

function runEventLastLeft()
{
    $(function()
        {
            $('.imageFour').hide(500);
            $('.imageThree').show(500);
        }
    );
   
}

var onMouse1 = document.getElementById("btnFreeCourse");
onMouse1.addEventListener('mouseover', runEvent13);
onMouse1.addEventListener('mouseleave', runEvent14);

function runEvent13()
{
    $(function()
        {
            $('#meetingArrow').fadeOut();
            $('#meetingArrow2').fadeIn();
            $('#meetingArrow2').css({fill: '#fff'})
        }
        );
   
}

function runEvent14()
{
    $(function()
        {
            $('#meetingArrow2').fadeOut();
            $('#meetingArrow').fadeIn();
        }
    );
    
}

var onMouse2 = document.getElementById("viewGalleryBtn");
onMouse2.addEventListener('mouseover', runEvent15);
onMouse2.addEventListener('mouseleave', runEvent16);

function runEvent15()
{
    $(function()
        {
            $('#meetingArrow3').fadeOut();
            $('#meetingArrow4').fadeIn();
            $('#meetingArrow4').css({'fill': '#fff'});
        }
    );
   
}

function runEvent16()
{
    $(function () 
    {  
        $('#meetingArrow4').fadeOut();
        $('#meetingArrow3').fadeIn();
    });
   
}

var BookChange = document.getElementById('bookBtn');
BookChange.addEventListener('mouseover', runEvent1000);
BookChange.addEventListener('mouseout', runEvent2000)

function runEvent1000()
{
    $(function()
        {
            $('#book').hide(300);
            $('#bookOpen').show(300);
        }
    );
   
}

function runEvent2000()
{
    $(function()
        {
            $('#bookOpen').hide(300);
            $('#book').show(300);
        }
    );
   
}