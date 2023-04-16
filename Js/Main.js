// JavaScript Document

$(document).ready(function()
 {
	
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$('#TopBtn').fadeIn();
		}
		else{
			$('#TopBtn').fadeOut();
		}
	});
	
	$("#TopBtn").click(function(){
		
		$('html ,body').animate({scrollTop : 0},800);
	});
	
});

