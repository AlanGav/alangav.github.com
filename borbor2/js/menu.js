$(document).ready(function(){
	$("#nosotros_flotante").hide(0)
	$("#proyectos_flotante").hide(0)
	$("#sliderDos").hide()
	ancho = $("nav ul li:first").width()-50
	$("nav ul").append("<div id=efecto></div>")
	$("#efecto").css({
		height:'2px',
		background:'#fff',
		width:ancho,
		position:'absolute'
	})
	$("#efecto").css("left",$("nav ul li a:first").position().left-5+"px")
	$("#efecto").css('width',$("nav ul li a:first").width()+8+"px")
	$("#efecto").hide(0,function(){
		$(this).show(800)
	})

	$("nav ul li a").on('mouseover',function(){
	$("#efecto").css('width',$(this).width()+8+"px")
		$("#efecto").animate({
			left:$(this).position().left+"px"
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
		"width":'440px',
		"height":'310px',
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
	//Al dar click en inicio se cierra cualquier flotante abierto
	$("#inicio").on('click',function () {
		$(".flotante").fadeOut(500)
	})
	//Aparecer el flotante de nosotros y cambiar el texto respecto al click
	$("#nosotros").on('click',function(){
		$("#proyectos_flotante").hide(0)
		$("#nosotros_flotante").fadeIn(500)
		$("#info_flotante").load('nosotros.html #qs',function(){
			$(this).hide(0,function(){
				$(this).fadeIn(500)
			})
		})
	})
	//Aparecer el flotante proyectos
	$("#proyectos").on('click',function(){
		$(".flotante").hide(0,function(){
			$("#proyectos_flotante").fadeIn(500)	
		})
		
		
	})
	//Aparecer el flotante clientes
	$("#clientes").on('click',function(){
		$(".flotante").hide(0,function(){
			$("#clientes_flotante").fadeIn(500)	
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

	//Hacer img grande del thumb
	$("#jsCarousel div img").on('click',function(){
		ruta = $(this).attr('src')
		$("#imgPrincipal").html("<img src="+ruta+">").hide(0,function(){
			$(this).fadeIn(500)
		})
	})
})