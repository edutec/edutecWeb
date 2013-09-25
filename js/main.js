function slideTo(cssClass) {
	$('html, body').animate({ scrollTop: $(cssClass).offset().top - 46 }, 250);
};

function moveCat() {
	var currentTop = parseInt($('.main-container').css("background-position").split(" ")[1]);

	if (currentTop <= 0) {
		$('.main-container').css({ "background-position": "100% " + $(window).height() + "px" })
	} else {
		$('.main-container').css({ "background-position": "100% " + (currentTop - 10) + "px" })
	}
};

setInterval(moveCat,100);
