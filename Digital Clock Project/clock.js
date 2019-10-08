function digtialClock()
   {
   var date  = new Date();
   var hours = date.getHours() +'';
   var minutes = date.getMinutes()+'';
   var seconds = date.getSeconds()+'';
   var dayNo = date.getDay();
   var day=['mon','tue','wed','thu','fri','sat','sun'];
   
   if(hours.length<2)
        hours ='0'+hours
   if(minutes.length<2)
        minutes='0'+minutes
   if(seconds.length<2)
       seconds='0'+seconds

   var clock= day[dayNo]+" "+hours+":"+minutes+":"+seconds;
   document.getElementById('clock').innerHTML =clock;
  


   }
   digtialClock();

   setInterval(digtialClock,1000);/// Milliseconds 1000ms ==1sec