$(document).ready(function() {
	var sudoSlider = $("#slide-contain").sudoSlider({
        continuous: true,
		history: true,
		controlsFade: false,
		prevHtml: '<span id="button-left"></span>',
		nextHtml: '<span id="button-right"></span>',
		numeric: true
	});
})