$(document).ready(function(){
	$("#nosotros_flotante").hide(0)
	$("#proyectos_flotante").hide(0)
	$("#clientes_flotante").hide(0)
	$("#contacto_flotante").hide(0)
	$("#sliderDos").hide()
	$("nav ul").append("<div id=efecto></div>")
	$("#efecto").css({
		height:'2px',
		background:'#fff',
		position:'absolute'
	})
		$("#efecto").hide(0)
	$("#efecto").fadeIn(1000,function(){
		$("#efecto").css("left",$("nav ul li a:first").position().left+5+"px")
		$("#efecto").css('width',$("nav ul li a:first").width()+5+"px")	
	})

	$("nav ul li a").on('mouseover',function(){		
		$("#efecto").animate({
			left:$(this).position().left+5+"px",
			width:$(this).stop().width()+8+"px"
		})
	})
	//Situar flotantes
	slider = $(".slider").position()
	izquierda= slider.left
	$("#nosotros_flotante").css({
		"left":izquierda+60+"px",
		"width":'420px',
		"height":'310px',
		"position":'absolute',
		"z-index":'100'
	})
	$("#proyectos_flotante").css({
		"left":izquierda+60+"px",
		"width":'690px',
		"height":'290px',
		"position":'absolute',
		"z-index":'100'
	})
	$("#clientes_flotante").css({
		"left":izquierda+420+"px",
		"width":'420px',
		"height":'300px',
		"position":'absolute',
		"z-index":'100'

	})
	$("#contacto_flotante").css({
		"left":izquierda+320+"px",
		"width":'520px',
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
//Clientes menu
	$("#menu_clientes ul li:first > a").css('border-bottom','2px solid #fff')
	$("#info_clientes").load("clientes.html #sodimac")
	$("#menu_clientes ul li a").on('click',function(i){
		idClick= $(this).attr('id')
		$("#menu_clientes ul li a").each(function(i){
				if($(this).attr('id')==idClick ){
						$(this).css('border-bottom','2px solid #fff')
						$("#info_clientes").load("clientes.html #"+idClick).hide(0)
						$("#info_clientes").fadeIn(500)
				}
				else{
					$(this).css('border-bottom','none')	
				}
		})
	})

	//Al dar click en inicio se cierra cualquier flotante abierto
	$("#inicio").on('click',function () {
		$(".flotante").fadeOut(500)
			$(".bxslider").html("")

				for(variable = 1; variable<=15; variable++)
					$(".bxslider").append("<li><a href=img/slider/"+variable+".jpg data-lightbox=main><img src=img/slider/"+variable+".jpg ></a></li>")
				$(".bxslider").hide(0)
			$('.bxslider').bxSlider({
				  	auto:'true',
				    speed:5000,
				    mode:'fade'
		  	});	
		  	$(".bxslider").fadeIn(1000)
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
			$(".flotante").hide()
			$("#proyectos_flotante").stop().fadeIn(500)	
		
	})
		$("#submenu_proyectos #ret").hide(0)
		$("#submenu_proyectos #viv").hide(0)
		$("#submenu_proyectos #sal").hide(0)
		$("#submenu_proyectos #ofi").hide(0)
		$("#submenu_proyectos #ind").hide(0)
		$("#submenu_proyectos #edu").hide(0)
		$("#submenu_proyectos #dep").hide(0)
		$("#menu_proyectos ul li a:first").css('border-bottom','2px solid #fff')
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
		$(".flotante").hide()
		$("#clientes_flotante").stop().fadeIn(500)	
	})
	//Aparecer el flotante contacto
	$("#contacto").on('click',function(){
		$(".flotante").hide()
		$("#contacto_flotante").fadeIn(500)
	})
	//Menu contacto
//	$("#menu_contacto ul li a:first > span ").css('border-bottom','2px solid #fff')
$("#info_contacto").load('contacto.html #servicios')
$("#servicios1").css('border-bottom','2px solid #fff')
	$("#menu_contacto ul li a").on('click',function(i){
		idClick= $(this).attr('id')
		$("#menu_contacto ul li a").each(function(i){
				if($(this).attr('id')==idClick ){

						$("#"+idClick+"1").css('border-bottom','2px solid #fff')
						
						$("#info_contacto").load('contacto.html #'+idClick).hide(0,function(){
							$(this).fadeIn(500)
						})
				}
				else{
					$("#"+$(this).attr('id')+"1").css('border-bottom','none')

				}
		})
	})
	//cantidad de fotos por carpeta
	bf = 13
	cotton = 5
	oh = 7
$("#submenu_proyectos ul li a").on('click',function(){
		carpeta = $(this).attr('id').toUpperCase()
		if(carpeta == "BF"){
			$(".bxslider").html("")

				for(variable = 0; variable<13; variable++)
					$(".bxslider").append("<li><a href=img/proyectos/BF/"+variable+".jpg data-lightbox=BF><img src=img/proyectos/BF/"+variable+".jpg ></a></li>")
				$(".bxslider").hide(0)
			$('.bxslider').bxSlider({
				  	auto:'true',
				    speed:5000,
				    mode:'fade'
		  	});	
		  	$(".bxslider").fadeIn(1000)
		}
		else if(carpeta=="OH"){
			$(".bxslider").html("")
			
				for(variable = 0; variable<7; variable++)
					$(".bxslider").append("<li><a href=img/proyectos/OH/"+variable+".jpg data-lightbox=OH><img src=img/proyectos/OH/"+variable+".jpg ></a></li>")
				$(".bxslider").hide(0)

			$('.bxslider').bxSlider({
				  	auto:'true',
				    speed:5000,
				    mode:'fade'
		  	});	
		  	$(".bxslider").fadeIn(1000)
		}
		else if(carpeta=="COTTON"){
			$(".bxslider").html("")
	
				for(variable = 0; variable<5; variable++)
					$(".bxslider").append("<li><a href=img/proyectos/"+carpeta+"/"+variable+".jpg data-lightbox=COTTON><img src=img/proyectos/"+carpeta+"/"+variable+".jpg ></a></li>")
				$(".bxslider").hide(0)
			
			$('.bxslider').bxSlider({
				  	auto:'true',
				    speed:5000,
				    mode:'fade'
		  	});	
		  	$(".bxslider").fadeIn(1000)
		}

	})
})

