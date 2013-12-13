$(document).ready(function(){
	$("#nosotros_flotante").hide(0)
	$("#proyectos_flotante").hide(0)
	$("#clientes_flotante").hide(0)
	$("#sliderDos").hide()
	$("nav ul").append("<div id=efecto></div>")
	$("#efecto").css({
		height:'2px',
		background:'#fff',
		position:'absolute'
	})
	$("#efecto").css("left",$("nav ul li a:first").position().left+5+"px")
	$("#efecto").css('width',$("nav ul li a:first").width()+5+"px")
	

	$("nav ul li a").on('mouseover',function(){		
		$("#efecto").animate({
			left:$(this).position().left+5+"px",
			width:$(this).stop().width()+8+"px"
		})
	})
	//Situar flotantes
	slider = $(".slider").position()
	$("#nosotros_flotante").css({
		"left":slider.left+43,
		"width":'420px',
		"height":'330px',
		"position":'absolute',
		"z-index":'100'
	})
	$("#proyectos_flotante").css({
		"left":slider.left+43,
		"width":'690px',
		"height":'310px',
		"position":'absolute',
		"z-index":'100'
	})
	$("#clientes_flotante").css({
		"left":slider.left+420,
		"width":'420px',
		"height":'320px',
		"position":'absolute',
		"z-index":'100'

	})
	$("#menu_flotante ul li:first > a").css('border-bottom','2px solid #fff')
	$("#menu_flotante ul li a").on('click',function(i){
		idClick= $(this).attr('id')
		$("#menu_flotante ul li a").each(function(i){
				if($(this).attr('id')==idClick ){
						$(this).css('border-bottom','2px solid #fff')
						$("#info_flotante").load("nosotros.html #"+idClick,function(){
							$(this).hide(0,function(){
							$(this).fadeIn(500)
						})
					})
				}
				else{
					$(this).css('border-bottom','none')	
				}
		})
		

	})
//Clientes menu
	$("#menu_clientes ul li:first > a").css('border-bottom','2px solid #fff')
	$("#menu_clientes ul li a").on('click',function(i){
		idClick= $(this).attr('id')
		$("#menu_clientes ul li a").each(function(i){
				if($(this).attr('id')==idClick ){
						$(this).css('border-bottom','2px solid #fff')
						$("#info_clientes").load("clientes.html #"+idClick)
				}
				else{
					$(this).css('border-bottom','none')	
				}
		})
		

	})

	//Al dar click en inicio se cierra cualquier flotante abierto
	$("#inicio").on('click',function () {
		$(".flotante").fadeOut(500)
	})
	//Aparecer el flotante de nosotros y cambiar el texto respecto al click
	$("#nosotros").on('click',function(){
		$(".flotante").hide(0,function(){
			$("#nosotros_flotante").fadeIn(500)	
		})
		
		$("#info_flotante").load('nosotros.html #qs',function(){
			$(this).hide(0,function(){
				$(this).fadeIn(500)
			})
		})
	})
	//Aparecer el flotante proyectos
	$("#proyectos").on('click',function(){
		$(".flotante").hide(0,function(){
			$("#proyectos_flotante").stop().fadeIn(500)	
		})
	})
		$("#submenu_proyectos #ret").hide(0)
		$("#submenu_proyectos #viv").hide(0)
		$("#submenu_proyectos #sal").hide(0)
		$("#submenu_proyectos #ofi").hide(0)
		$("#submenu_proyectos #ind").hide(0)
		$("#submenu_proyectos #edu").hide(0)
		$("#submenu_proyectos #dep").hide(0)

	$("#menu_proyectos ul li a").on('click',function(i){
		valor= $(this).attr('id')
		$("#menu_proyectos ul li a").each(function(i){
				if($(this).attr('id')==valor ){
						$(this).css('border-bottom','2px solid #fff')
						$("#submenu_proyectos #"+valor).show()	
				}
				else{
					$(this).css('border-bottom','none')	
					$("#submenu_proyectos #"+$(this).attr('id')).hide(0)
				}
		})
	})

	$("#submenu_proyectos ul li a").on('click',function(i){
		idClick= $(this).attr('id')
		$("#submenu_proyectos ul li a").each(function(i){
				if($(this).attr('id')==idClick ){
						$(this).css('border-bottom','2px solid #fff')
						$("#info_proyectos").load('proyectos.html #'+idClick,function(){
							$(this).hide(0,function(){
								$(this).stop().fadeIn(500)
							})
						})
					
				
				}
				else{
					$(this).css('border-bottom','none')	
				}
		})
		

	})

	//Aparecer el flotante clientes
	$("#clientes").on('click',function(){
		$(".flotante").hide(0,function(){
			$("#clientes_flotante").stop().fadeIn(500)	
		})
		
		
	})
	//Cargar slider aparte (pantalla negra)
	
	$("#nosotrosSlider").on('click',function(){			
			
		$("#sliderDos").fadeIn()
		path = $("#jsCarousel div img:first").attr('src')
		$("#imgPrincipal").html("<img src="+path+" >")
		$('.bx-prev').hide()
		$('.bx-next').hide()
			$("#sliderDos").css({
				position:'absolute',
				top:'0px',
				background:'#000',
				width:window.innerWidth+"px",
				height:$("body").height()+"px",
				"z-index":'200',
				"margin-top":"3em"
			})
			
			$("#cerrar").click(function(){
				$("#sliderDos").fadeOut()
				$('.bx-prev').show()
				$('.bx-next').show()
			})
	})

	$("#cerrar").css({
		position:'absolute',
		left:$("#wrapper").position().left+120+"px"
	})
	//Hacer img grande del thumb
	$("#jsCarousel div img").on('click',function(){
		ruta = $(this).attr('src')
		$("#imgPrincipal").html("<img src="+ruta+">").hide(0,function(){
			$(this).fadeIn(500)
		})
	})
})