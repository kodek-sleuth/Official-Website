var btn = document.getElementById('closeIcon');
btn.style.display = 'none';

var btn2 = document.getElementById('navItems');
btn2.style.display = 'none';

var btn3 = document.getElementById('galleryMenuIcon2');
btn3.addEventListener('click', runEvent);

function runEvent()
{
    $(function()
        {
            $("#galleryMenuIcon2").hide(700);
            $(".images").hide(800);
            $("#closeIcon").slideDown(1000);
            $("#navItems").show(1200);
            $("#navItems").animate({
                height: '800px'
            })
        }
    );
}

var btn4 = document.getElementById('closeIcon');
btn4.addEventListener('click', runEvent2);

function runEvent2()
{
    $(function()
        {
            $("#galleryMenuIcon2").show(700);
            $(".images").slideDown(800);
            $("#closeIcon").slideUp(900);
            $("#navItems").slideUp(1000);
        }
    );
}
