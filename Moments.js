var today= new Date("4/8/2021")
 var sp= new Date("4/8/1996");

var y= today.getFullYear()-sp.getFullYear();
var days = today.getTime()-sp.getTime();
    

 var m= y*12;
 var w= y*52;
 var d= y*365;
 var d=  Math.floor(days/(1000 * 60 * 60 * 24));
 var h =d*24;
 var min =h*60;
 var s =min*60;


console.log(" '"+y+ " years' equals to \n -->" +m+ " months \n --> "
+ w+" weeks \n --> "+d+ " days \n--> "+h+ " hours \n --> "
+min+  " minutes\n --> "+s+ " secondes");
 
