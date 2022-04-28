var countDownDate = new Date("nov 10, 2021 00:00:00").getTime();

var Timer= setInterval(function () 
{

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
   
    var d = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var h = Math.floor(( timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeleft % (1000 * 60)) / 1000);
        
  
   console.log( d + "D " + h + "H " + m + "M " + s + "S");
    
  if (timeleft < 0) 
    {
       clearInterval(Timer);
       console.log( "END");
    }

    
},1000);
