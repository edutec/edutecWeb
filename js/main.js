var switchImage = false;

function slideTo(cssClass) {
	$('html, body').animate({ scrollTop: $(cssClass).offset().top - 46 }, 250);
};

function moveCat() {
	
	if (switchImage) {
		$('.main-container').css({ "background-image": 'url("../img/turtlecat2.png")' })
	} else {
		$('.main-container').css({ "background-image": 'url("../img/turtlecat.png")' })
	}

	var currentTop = parseInt($('.main-container').css("background-position").split(" ")[1]);
	
	if (currentTop <= -100) {
		$('.main-container').css({ "background-position": "100% " + ($(window).height() + 400) + "px" })
	} else {
		$('.main-container').css({ "background-position": "100% " + (currentTop - 10) + "px" })
	}

	switchImage = !switchImage;
	
};

setInterval(moveCat,250);
