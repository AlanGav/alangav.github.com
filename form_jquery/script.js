$(document).ready(function(){
	$('#mostrar-login').click(function(){

		$('#login-panel').slideToggle('slow',function(){
			$('#triangle_down').toggle();
			$('#triangle_up').toggle();
		})

	})
})