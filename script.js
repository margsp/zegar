//**CONFIGURATION AREA**
//set both values to 0 if your device's local time is OK
var hrOffset = 1;
var minOffset = 0;
//END OF CONFIGURATION

setClock();

setInterval(function()
{ 
  setClock();
}, 60000);

function setClock()
{
  var time = getHours() + ":" + getMinutes();
  document.getElementById("time").innerHTML = time;
}

function getHours()
{
	var hours = new Date().getHours();
	if(hrOffset > 0)
	{
		if((hours + hrOffset) > 23) //make sure the clock is never like 24:30
		{
			hours =  0 + ((hours + hrOffset) - 24);
		}
		else
		{
			hours = hours + hrOffset;
		}
	}
	return hours;
}

function getMinutes()
{
	var mins = new Date().getMinutes();
	mins = mins + minOffset;
	var minsL = mins < 10 ? '0' : '';
	return minsL + mins;
}
