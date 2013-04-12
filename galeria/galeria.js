$(document).ready(function(){
	$('.preloader').hide()
	var principal = $('a:first').attr('href')
	$("#grande").html("<img src='"+principal+"' />")

	$('a').click(function(){

		var imagen_seleccionada = $(this).attr('href')
		if(imagen_seleccionada!=principal){
			principal = imagen_seleccionada

			$('a').each(function(){
				if($(this).attr('href')==imagen_seleccionada){
					$(this).animate({'opacity':'.5'})
				}
				else{
					$(this).animate({'opacity':'1'})
				}
			})

			$("#grande").html("<img src='"+imagen_seleccionada+"'/>").animate({'opacity':'0'},0)
			$(".preloader").fadeIn()
			$("#grande img").load(function(){
				$('.preloader').fadeOut(500,function(){
					$("#grande").animate({'opacity':'1'},200)
				})
			})
			return false;
		}
		else{
			return false;
		}
	})
})