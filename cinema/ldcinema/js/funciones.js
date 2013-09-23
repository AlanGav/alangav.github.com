$(document).ready(function(){
	//Slider
	$("#slider").responsiveSlides({
        maxwidth: 800,
        speed: 800
    });

    // Menu slider
    if (matchMedia('only screen and (max-width: 480px)').matches) {
		// crear un elemento que muestr/oculte el menu
		$("#link_menu").on("click",(function(e){
			e.preventDefault();
			$("nav ul").slideToggle();
		}));

	}

	// Mensaje
	$("#cerrar_mensaje").on('click', function(){
		$("#mensaje").fadeOut('slow');
	});

});
