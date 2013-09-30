var switchImage = false;

function slideTo(cssClass) {
	$('html, body').animate({ scrollTop: $(cssClass).offset().top - 46 }, 250);
};

function moveCat() {
	
	if (switchImage) {
		$('.main-container').css({ "background-image": 'url("img/turtlecat2.png")' })
	} else {
		$('.main-container').css({ "background-image": 'url("img/turtlecat.png")' })
	}

	var currentTop = parseInt($('.main-container').css("background-position").split(" ")[1]);
	
	if (currentTop <= -1800) {
		$('.main-container').css({ "background-position": "100% " + ($(window).height() + 400) + "px" })
	} else {
		$('.main-container').css({ "background-position": "100% " + (currentTop - 10) + "px" })
	}

	switchImage = !switchImage;
	
};

function pixelate(selector) {
	if (selector.attr("src").match("pix")) {
		selector.attr("src", selector.attr("src").replace("-pix",""))
	} else {
		selector.attr("src", selector.attr("src").replace(".png","-pix.png"))
	}
}

setInterval(moveCat,250);

$(".avatar").hover( function() { pixelate($(this)) });
