The simplest clock ever to allow to display time on an old e-ink reader
https://margsp.github.io/zegar/

Note: I'm tweaking the time to fix my device's local time and save battery so now it doesn't work like a typical clock.
Set your own values in CONFIGURATION AREA section in JS.
Typically the normal configuration would be:  
var hrOffset = 0;  
var minOffset = 0;  
var interval = 60000;  
