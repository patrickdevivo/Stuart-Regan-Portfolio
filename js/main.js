$(document).ready(function() {
	$('#slider a:first').addClass('active');
	
	var numberImages = $('#slider a').length;
	
	
	$('#slider a').each(function(index, value) {
		$('#counter').append("<span id='bubble-" + index + "' class='bubble'></span>");
		$(this).attr('id', 'slide-' + index + '')
	})
	
	$('#slider .bubble').mouseover(function() {
		$(this).addClass('active');
	}).mouseout(function() {
		$(this).removeClass('active');
	})

	
	function slideLeft() {
		
	}
	
	function slideRight() {
		var active = $('#slider a.active');
		var next = active.next('a');
		
		if(next.length !== 0) {
			active.animate({
				left: '-580px'
			}, function(){
				$(this).removeClass('active').css('left', '0px');
			});
			
			next.css('right', '-580px').addClass('active').animate({
				right: '0px'
			});
		}
		else {
			//next = $('#slider a:first');
			
		}
		

		

	}
	
	$('#button-right').click(function() {
		slideRight();
	});
})