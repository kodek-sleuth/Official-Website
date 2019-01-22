window.onload = function()
{
    $(function()
        {
            $('#navItemsCollection').hide();
            $('#realSlideShow').hide();
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();
        }
    );
}



var btn1 = document.getElementById('galleryMenuIcon');
btn1.addEventListener('click', runEventOne);

function runEventOne()
{
    $(function()
        {
            $('#navItemsCollection').show(1000);
            $('#galleryShow').hide(600);
            $('#GalleryNavBar').hide(700);
            $('.openingText').hide(700);
            $('#navItemsCollection').animate({
                height: '680px'
            });
        }
    );
    
}


var btn2 = document.getElementById('galleryCloseIcon');
btn2.addEventListener('click', runEventTwo);

function runEventTwo()
{
    $(function()
        {
        
            $('#galleryShow').show(2000);
            $('#GalleryNavBar').show(1500);
            $('.openingText').show(2000);
            $('#navItemsCollection').hide(700);
        }
    );
    
}

var btn3 = document.getElementById('imgOne');
btn3.addEventListener('click', runEventThree);
btn3.addEventListener('mouseout', runEventFour);
btn3.addEventListener('dblclick', slideShower);

function slideShower()
{
    $(function()
        {
            $('.openingText').hide(900);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideOne').show(900);
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}


function runEventThree()
{
    $(function()
        {
        
            $('#One').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgTwo').hide(1000);
            $('#imgThree').hide(1000);
            $('#imgFour').hide(1000);
            $('#imgFive').hide(1000);
            $('#imgSix').hide(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEventFour()
{
    $(function()
        {
        
            $('#One').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgTwo').show(1000);
            $('#imgThree').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn4 = document.getElementById('imgTwo');
btn4.addEventListener('click', runEventFive);
btn4.addEventListener('mouseout', runEventSix);
btn4.addEventListener('dblclick', slideShower2);

function slideShower2()
{
    $(function()
        {
            $('.openingText').hide(900);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideTwo').show(900);
            $('#slideOne').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}

function runEventFive()
{
    $(function()
        {
        
            $('#Two').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgOne').show(1000);
            $('#imgThree').hide(1000);
            $('#imgFour').hide(1000);
            $('#imgFive').hide(1000);
            $('#imgSix').hide(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEventSix()
{
    $(function()
        {
        
            $('#Two').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgThree').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}


var btn5 = document.getElementById('imgThree');
btn5.addEventListener('click', runEventSeven);
btn5.addEventListener('mouseout', runEventEight);
btn5.addEventListener('dblclick', slideShower3);

function slideShower3()
{
    $(function()
        {
            $('.openingText').hide(700);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideThree').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}

function runEventSeven()
{
    $(function()
        {
        
            $('#Three').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').hide(1000);
            $('#imgFive').hide(1000);
            $('#imgSix').hide(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEventEight()
{
    $(function()
        {
        
            $('#Three').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn6 = document.getElementById('imgFour');
btn6.addEventListener('click', runEvent9);
btn6.addEventListener('mouseout', runEvent10);
btn6.addEventListener('dblclick', slideShower4);

function slideShower4()
{
    $(function()
        {
            $('.openingText').hide(700);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideFour').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}

function runEvent9()
{
    $(function()
        {
        
            $('#Four').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgThree').show(1000);
            $('#imgFive').hide(1000);
            $('#imgSix').hide(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEvent10()
{
    $(function()
        {
        
            $('#Four').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn7 = document.getElementById('imgFive');
btn7.addEventListener('click', runEvent11);
btn7.addEventListener('mouseout', runEvent12);
btn7.addEventListener('dblclick', slideShower5);

function slideShower5()
{
    $(function()
        {
            $('.openingText').hide(700);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideFive').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}

function runEvent11()
{
    $(function()
        {
        
            $('#Five').animate({
                width: '270px',
                height: '275px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgSix').hide(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEvent12()
{
    $(function()
        {
        
            $('#Five').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn8 = document.getElementById('imgSix');
btn8.addEventListener('click', runEvent13);
btn8.addEventListener('mouseout', runEvent14);
btn8.addEventListener('dblclick', slideShower6);

function slideShower6()
{
    $(function()
        {
            $('.openingText').hide(900);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideSix').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSeven').hide();
            $('#slideEight').hide();

        }
    );
}

function runEvent13()
{
    $(function()
        {
        
            $('#Six').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgSeven').hide(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEvent14()
{
    $(function()
        {
        
            $('#Six').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn9 = document.getElementById('imgSeven');
btn9.addEventListener('click', runEvent15);
btn9.addEventListener('mouseout', runEvent16);
btn9.addEventListener('dblclick', slideShower7);

function slideShower7()
{
    $(function()
        {
            $('.openingText').hide(900);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideSeven').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideEight').hide();

        }
    );
}


function runEvent15()
{
    $(function()
        {
        
            $('#Seven').animate({
                width: '270px',
                height: '270px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgEight').hide(1000);
        }
    );
    
}

function runEvent16()
{
    $(function()
        {
        
            $('#Seven').animate({
                width: '170px',
                height: '170px'
            });

            $('#imgOne').show(1000);
            $('#imgTwo').show(1000);
            $('#imgFour').show(1000);
            $('#imgFive').show(1000);
            $('#imgSix').show(1000);
            $('#imgSeven').show(1000);
            $('#imgEight').show(1000);
        }
    );
    
}

var btn10 = document.getElementById('imgEight');
btn10.addEventListener('dblclick', slideShower8)

function slideShower8()
{
    $(function()
        {
            $('.openingText').hide(900);
            $('#GalleryNavBar').hide(900);
            $('#galleryShow').hide(900);
            $('#realSlideShow').show(900);
            $('#slideEight').show(900);
            $('#slideOne').hide();
            $('#slideTwo').hide();
            $('#slideThree').hide();
            $('#slideFour').hide();
            $('#slideFive').hide();
            $('#slideSix').hide();
            $('#slideSeven').hide();
        }
    );
}

var press1 = document.getElementById('OneLeft');
press1.addEventListener('click', slideBack1);

function slideBack1()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideOne").hide(1000);
            $("#slideEight").slideDown(1000);
        }
    );
}

var press2 = document.getElementById('TwoLeft');
press2.addEventListener('click', slideBack2);

function slideBack2()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideOne").slideDown(1000);
            $("#slideTwo").hide(1000);
        }
    );
}

var press3 = document.getElementById('ThreeLeft');
press3.addEventListener('click', slideBack3);

function slideBack3()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideTwo").slideDown(1000);
            $("#slideThree").slideUp(1000);
        }
    );
}

var press4 = document.getElementById('FourLeft');
press4.addEventListener('click', slideBack4);

function slideBack4()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideFour").slideUp(1000);
            $("#slideThree").slideDown(1000);
        }
    );
}

var press5 = document.getElementById('FiveLeft');
press5.addEventListener('click', slideBack5);

function slideBack5()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideFour").slideDown(1000);
            $("#slideFive").slideUp(1000);
        }
    );
}

var press6 = document.getElementById('SixLeft');
press6.addEventListener('click', slideBack6);

function slideBack6()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideFive").slideDown(1000);
            $("#slideSix").slideUp(1000);
        }
    );
}

var press7 = document.getElementById('SevenLeft');
press7.addEventListener('click', slideBack7);

function slideBack7()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideSix").slideDown(1000);
            $("#slideSeven").slideUp(1000);
        }
    );
}

var press8 = document.getElementById('EightLeft');
press8.addEventListener('click', slideBack8);

function slideBack8()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideSeven").slideDown(1000);
            $("#slideEight").slideUp(1000);
        }
    );
}


var press11 = document.getElementById('OneRight');
press11.addEventListener('click', slideBack11);

function slideBack11()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideOne").slideUp(1000);
            $("#slideTwo").slideDown(1000);
        }
    );
}

var press12 = document.getElementById('TwoRight');
press12.addEventListener('click', slideBack12);

function slideBack12()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideThree").slideDown(1000);
            $("#slideTwo").slideUp(1000);
        }
    );
}

var press13 = document.getElementById('ThreeRight');
press13.addEventListener('click', slideBack13);

function slideBack13()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideFour").slideDown(1000);
            $("#slideThree").slideUp(1000);
        }
    );
}

var press14 = document.getElementById('FourRight');
press14.addEventListener('click', slideBack14);

function slideBack14()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideFour").slideUp(1000);
            $("#slideFive").slideDown(1000);
        }
    );
}

var press15 = document.getElementById('FiveRight');
press15.addEventListener('click', slideBack15);

function slideBack15()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideSix").slideDown(1000);
            $("#slideFive").slideUp(1000);
        }
    );
}

var press16 = document.getElementById('SixRight');
press16.addEventListener('click', slideBack16);

function slideBack16()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideSeven").slideDown(1000);
            $("#slideSix").slideUp(1000);
        }
    );
}

var press17 = document.getElementById('SevenRight');
press17.addEventListener('click', slideBack17);

function slideBack17()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideEight").slideDown(1000);
            $("#slideSeven").slideUp(1000);
        }
    );
}

var press18 = document.getElementById('EightRight');
press18.addEventListener('click', slideBack18);

function slideBack18()
{
    $(function()
        {

            $('#realSlideShow').show()
            $("#slideOne").slideDown(1000);
            $("#slideEight").slideUp(1000);
        }
    );
}


var closeClick = document.getElementById('closeSlide');
closeClick.addEventListener('click', closeSlideShow);

function closeSlideShow()
{
    $(function()
        {
            $('#realSlideShow').hide(1000);
            $('#GalleryNavBar').show(1000);
            $('#galleryShow').show(2000);
            $('.openingText').show(3000);
        }
    );
}






