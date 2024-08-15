var color_red = "color: #ff0000;";
var color_green = "color: #00ff00;";
var color_blue = "color: #6aaffd;";
var color_yellow = "color: #ffff00;";
var color_orange = "color: #ffa500;";
var color_white = "color: #ffffff;";

function lerror(message)
{
	console.log(`%cERROR\t>> %c${message}`, color_red, color_white);
}
function lwarning(message)
{
	console.log(`%cWARN\t>> %c${message}`, color_orange, color_white);
}
function lsuccess(message)
{
	console.log(`%cSUCCESS\t>> %c${message}`, color_green, color_white);
}
function linfo(message)
{
	console.log(`%cINFO\t>> %c${message}`, color_blue, color_white);
}
function llog(message)
{
	console.log(`%cLOG\t\t>> %c${message}`, color_yellow, color_white);
}

// lerror("Error message here.");
// lwarning("Warning message here.");
// lsuccess("Success message here.");
// linfo("Info message here.");
// llog("Log message here.");

// console.log("   ");