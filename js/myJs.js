$(document).ready(function () {

	$('#menu li').click(function () {

		if($(this).parent().children().index(this) == 0){
			$('html, body').animate({
			scrollTop: $("#column0").offset().top - 120
			}, 1200);

		}
		else if($(this).parent().children().index(this) == 1){
			$('html, body').animate({
			scrollTop: $("#column1").offset().top -120
			}, 1200);
		}
		else if($(this).parent().children().index(this) == 2){
			$('html, body').animate({
			scrollTop: $("#column2").offset().top - 120
		}, 1200);
		}
		else{
			$('html, body').animate({
			scrollTop: $("#column3").offset().top - 120
		}, 1200); 
			}
		});
//		});

   /* $('html, body').animate({
        scrollTop: $("#joker").offset().top
    }, 2000);*/

});

			
	