var btn = document.getElementById('image22');
btn.style.display = 'none';

var btnClick = document.getElementById('Left');
btnClick.addEventListener('click', runEvent);

function runEvent()
{
    $(function()
        {
            $("#image12").hide(1000);
            $("#image22").show(1200);
        }
    );
   
}

var btnClick2 = document.getElementById('Right');
btnClick2.addEventListener('click', runEvent2);

function runEvent2()
{
    $(function()
        {
            $("#image22").hide(1000);
            $("#image12").show(1200);
        }
    );
   
}