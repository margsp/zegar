//**CONFIGURATION AREA**
//set both values to 0 if your device's local time is OK
var hrOffset = 0;
var minOffset = 0;
//END OF CONFIGURATION

setClock();

setInterval(function()
{ 
  setClock();
}, 60000);

function setClock()
{
  var date = new Date();
  var mins = date.getMinutes() + minOffset;
  if(date.getMinutes() == 59)
  {
    hrOffset++;
    mins = 0;
  }
  var minutesL = mins < 10 ? '0' : '';
  var time = (date.getHours() + hrOffset) + ":" + minutesL + mins;
  document.getElementById("time").innerHTML = time;
}
