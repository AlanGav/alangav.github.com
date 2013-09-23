$(document).ready(function(){
	$("#slider1").responsiveSlides({
        maxwidth: 800,
        speed: 800
      });
	$("#link_menu").on('click',function(e){
		e.preventDefault()
		$(this).next().slideToggle();
	})
})