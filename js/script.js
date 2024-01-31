// Function to update timer on main page
function updateTime() {
    let currentTime = new Date();
    document.getElementById("datetime").textContent = currentTime;
  }
  
updateTime()
setInterval(updateTime, 10);
  




 // Image rotate script
var mouseXY = {};
    $( document ).on( "mousemove", function( event ) {
    mouse.XY.X = event.pageX;
    mouse.XY.Y = event.pageY;
    });
    var iCheat = $("#showcase1");
    var prevXY = {X: null, Y: null};
    var cheatInterval = setInterval(function()
    {

    if (prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {

    var cheatXY = iCheat.position();
    var diffX = cheatXY.left - mouseXY.X;
    var diffY = cheatXY.top - mouseXY.Y;
    var tan = diffY / diffX;

    var atan = Math.atan(tan)* 180 / Math.PI;;
        if(diffY > 0 && diffX > 0) {

        atan += 180;
        }
        else if (diffY < 0 && diffX > 0) {

        atan -= 180;
        }

        prevXY.X = mouseXY.X
        prevXY.Y = mouseXY.Y
        iCheat.css({transform: "rotate(" + atan + "deg)"});
    }
    }, 10);