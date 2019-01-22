$(function()
    {
        $("#imgTwo2").hide()
        $("#imgThree2").hide()
        $("#imgFour2").hide()
    }
);


window.onload = function()
{
    $(function()
        {
            $("#targetOne").css({background: '#f46b45'});
        }
    );
    
}

$(function()
    {
        $('#navItemsforNavigation2').hide();
    }
);

var btn = document.getElementById('iconMenu2');
btn.addEventListener('click', showMenu);

function showMenu()
{
    $(function()
    {
        $('#navigation2').fadeOut(600);
        $('.quote2').hide(600);
        $('.smallIntro2').hide(600);
        $('.myWork2').hide(600);
        $('.sampleGallery2').hide(600);
        $('.BusinessSide2').hide(600);
        $('.smallIntro2').hide(600);
        $('.helpBusiness2').hide(600);
        $('.helpEducation2').hide(600);
        $('.Reach2').hide(600);
        $('#footer2').hide(600);
        $('#navItemsforNavigation2').show(600);
        $("#iconClose2").fadeIn(300);

        $('#navItemsforNavigation2').animate({height:'1000px'});
    }
    );
}

var btn2 = document.getElementById('iconClose2');
btn2.addEventListener('click', closeMenu);

function closeMenu()
{
    $(function()
    {
        $("#iconClose2").slideUp(400);
        $("#navItemsforNavigation2").slideUp(1000);
        $('#navigation2').fadeIn(600);
        $('.quote2').show(600);
        $('.smallIntro2').show(600);
        $('.myWork2').show(600);
        $('.sampleGallery2').show(600);
        $('.BusinessSide2').show(600);
        $('.smallIntro2').show(600);
        $('.helpBusiness2').show(600);
        $('.helpEducation2').show(600);
        $('.Reach2').show(600);
        $('#footer2').show(600);

    }
    );
   
}

var btn3 = document.getElementById('targetTwo');
btn3.addEventListener('click', showImage2)

function showImage2()
{
    $(function()
        {
            $('#imgOne2').hide(300);
            $('#imgThree2').hide(300);
            $('#imgFour2').hide(300);


            $("#imgTwo2").show(700);

            $("#targetOne").css({background: 'rgb(255, 255, 255)'});
            $("#targetThree").css({background: 'rgb(255, 255, 255)'});
            $("#targetFour").css({background: 'rgb(255, 255, 255)'});


            $("#targetTwo").css({background: '#f46b45'});
        }
    );
   
}

var btn4 = document.getElementById('targetThree');
btn4.addEventListener('click', showImage3)

function showImage3()
{
    $(function()
        {
            $('#imgOne2').hide();
            $('#imgTwo2').hide();
            $('#imgFour2').hide();

            
            $("#targetTwo").css({background: 'rgb(255, 255, 255)'});
            $("#targetFour").css({background: 'rgb(255, 255, 255)'});
            $("#targetOne").css({background: 'rgb(255, 255, 255)'});
            
            $("#imgThree2").show(700);
            $("#targetThree").css({background: '#f46b45'});
        }
    );
   
}

var btn5 = document.getElementById('targetFour');
btn5.addEventListener('click', showImage4);

function showImage4()
{
    $(function()
        {
            $('#imgOne2').hide();
            $('#imgTwo2').hide();
            $('#imgThree2').hide();
            $('#imgFour2').show(700);

            $("#targetTwo").css({background: 'rgb(255, 255, 255)'});
            $("#targetThree").css({background: 'rgb(255, 255, 255)'});
            $("#targetOne").css({background: 'rgb(255, 255, 255)'});
            
            $("#targetFour").css({background: '#f46b45'});
        }
    );
} 

var btn6 = document.getElementById('targetOne');
btn6.addEventListener('click', showImage1);

function showImage1()
{
    $(function()
        {

            $('#imgTwo2').hide();
            $('#imgThree2').hide();
            $('#imgFour2').hide();

            $("#targetTwo").css({background: 'rgb(255, 255, 255)'});
            $("#targetThree").css({background: 'rgb(255, 255, 255)'});
            $("#targetFour").css({background: 'rgb(255, 255, 255)'});
            
            $('#imgOne2').slideDown(700);
            $("#targetOne").css({background: '#f46b45'});
        }
    );
} 
