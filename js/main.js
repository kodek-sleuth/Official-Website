$(function() 
{
    $("#changethewords").changeWords(
        {
            time: 2000,
            animate: "tada",
            selector: "span",
            repeat: true
        }
    );
    }
)


var mouse = document.getElementById('text');
mouse.addEventListener('mouseup', runEvent);

function runEvent()
{
    $(function()
    {
        $("#text").fadeOut(1000).slideToggle(1000).fadeIn(1000);
    });
}
