var today= new Date();
 var dob= new Date("11/10/1997");
var a= function year(today,dob){
    var y= today.getFullYear()-dob.getFullYear();
    var m= today.getMonth()-dob.getMonth();
    var d= today.getDate()-dob.getDate();
    if(m<0 || (m === 0 && today.getDate() < dob.getDate())){
        y--;
    }
   return y

}
var b= function month(today,dob){
    var m= today.getMonth()-dob.getMonth();
    var d= today.getDate()-dob.getDate();

    

 if( today.getDate() < dob.getDate() && m<0){
        var mm=12+m;
        mm--;
        return mm;
      }
      else if(today.getDate() < dob.getDate() && m>0){
     
     var mm=m-1;
     
      return mm;
    }
      else if(m<0){
        var mon=12+m;
        
     return mon;
     }
      
    return m;
}



var c=function day(today,dob){
    var m= today.getMonth()-dob.getMonth();
    var d= today.getDate()-dob.getDate();
    
    if(d<0 && today.getMonth()==0 ){
         var dd=31+d ;
   return dd;
   }
   else if(d<0 && today.getMonth()==2 ){
    var dd=28+d ;
return dd;
}
   else if(d<0){
        var dd=30+d ;
        return dd;
    }
    else
         return d;

}
 
console.log("Age: "+a(today,dob) + " years " +b(today,dob)+" months " +c(today,dob) +" days");


  
