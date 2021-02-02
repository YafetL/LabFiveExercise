/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
/*
var href = location.href;
var prot = location.protocol;
var hst = location.host;
var prt = location.port;
var host_name = location.hostname;

var app_name = navigator.appName;
var app_version = navigator.appVersion;
var ptform = navigator.platform;
var lang = navigator.language;
var cookie_enabled = navigator.cookieEnabled;

var hgt = screen.height;
var wdh = screen.width;
var pixel_depth = screen.pixelDepth;

var lgth = history.length;
var stt = history.state;

// Display the BOM Information on the innerHTML of the elements
document.getElementById("href").textContent = href;
document.getElementById("protocol").textContent = prot;
document.getElementById("host").textContent = hst;
document.getElementById("port").textContent = prt;
document.getElementById("hostname").textContent = host_name;
document.getElementById("appname").textContent = app_name;
document.getElementById("appversion").textContent = app_version;
document.getElementById("platform").textContent = ptform;
document.getElementById("language").textContent = lang;
document.getElementById("cookieenabled").textContent = cookie_enabled;
document.getElementById("height").textContent = hgt;
document.getElementById("width").textContent = wdh;
document.getElementById("pixeldepth").textContent = pixel_depth;
document.getElementById("length").textContent = lgth;
document.getElementById("state").textContent = stt;
*/
var href = document.getElementById("href");
var prot = document.getElementById("Protocol");
var hst = document.getElementById("host");
var prt = document.getElementById("port");
var host_name = document.getElementById("hostname");

var app_name = document.getElementById("appname");
var app_version = document.getElementById("appversion");
var ptform = document.getElementById("platform");
var lang = document.getElementById("language");
var cookie_enabled = document.getElementById("cookieenabled");

var hgt = document.getElementById("height");
var wdh = document.getElementById("width");
var pixel_depth = document.getElementById("pixeldepth");

var lgth = document.getElementById("length");
var stt = document.getElementById("state");

href.innerHTML = location.href;
prot.innerHTML = location.protocol;
hst.innerHTML = location.host;
prt.innerHTML = location.port;
host_name.innerHTML = location.hostname;
app_name.innerHTML = navigator.appName;
app_version.innerHTML = navigator.appVersion;
ptform.innerHTML = navigator.platform;
lang.innerHTML = navigator.language;
cookie_enabled.innerHTML = navigator.cookieEnabled;
hgt.innerHTML = screen.height;
wdh.innerHTML = screen.width;
pixel_depth.innerHTML = screen.pixelDepth;
lgth.innerHTML = history.length;
stt.innerHTML = history.state;
