// calling jQuery DOM ready	
$(document).ready(function() {

$('#contentLayout tr td').html('&nbsp;'); // debug Mode

var ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click"; //correcting ipad bug, where first click gets treated as a hover

var snd = new Audio("audio/sportscar_startup.wav"); // buffers automatically when created
var snd2 = new Audio("audio/car_horn.wav");
var snd3 = new Audio("audio/sportscar_start_go.wav");
var snd4 = new Audio("audio/car-cigarette-lighter-out-1.wav");
var snd5 = new Audio("audio/car-door-open-1.wav");
var snd6 = new Audio("audio/trunk-unlock-1.wav");
var snd7 = new Audio("audio/trunk-close-1.wav");
var snd8 = new Audio("audio/car-door-close-1.wav");

$('.carStart').click(function() {
	snd.play();
	snd.currentTime=0;
});

$('.carHorn').click(function() {
	snd2.play();
	snd2.currentTime=0;
});

$('.carStartGo').bind(event, function(){
	snd3.play();
});

$('.carLights').bind(event, function(){
	snd4.play();
});

$('.carDoor').bind(event, function(){
	snd5.play();
	snd5.currentTime=0;
});

$('.carTrunk').bind(event, function(){
	snd6.play();
	snd6.currentTime=0;
});
/*
$('.carTrunkClosed').bind(event, function(){
	snd7.play();
});

$('.carDoorClosed').bind(event, function(){
	snd8.play();
});
*/

$('.carLights').bind(event, function() {
	$('#content').toggleClass('carLightsOn');
	if($('.carLightsOn').length <= 0)  {
	snd4.play();
	}
});
/*
$('.carDoor').bind(event, function() {
	$('#content').toggleClass('carDoorClosed');
	if($('.carDoorClosed').length <= 0)  {
	snd8.play();
	}
});
*/

$('.carStartGo').bind(event, function(){
	$('#content').addClass('carMoving');
	setTimeout(function() {
		$("#content").animate({
			marginLeft: '-900px'
		}, 3000,function() {
		$('#content').removeAttr('style');
		$('#content').removeClass('carMoving');
		});
	}, 3600);
});

var ScreenWidth = $(window).width();
var ScreenHeight = $(window).height();

if (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/BlackBerry/) || 
             navigator.userAgent.match(/Windows Phone/i) || 
             navigator.userAgent.match(/ZuneWP7/i)
             )
			 {
                $('#debugMode').html('Mobil mode.<br> Current resolution '+ScreenWidth+' / '+ScreenHeight+' <br> '+navigator.userAgent +'');
				$('#debugMode').css('font-size','12px');
             }
			 else {
				$('#debugMode').html('Screen mode.<br> Current resolution ' +ScreenWidth+' / '+ScreenHeight+' <br> '+navigator.userAgent +'');
			 }

}); // ending jQuery DOM funtion