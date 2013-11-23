$(document).ready(function(){
	$("#nosotros_flotante").hide()

	ancho = $("nav ul li:first").width()-50
	$("nav ul").append("<div id=efecto></div>")
	$("#efecto").css({
		height:'2px',
		background:'#fff',
		width:ancho,
		position:'absolute'
	})
	$("#efecto").css("left",$("nav ul li").position().left+25+"px")
	$("#efecto").css('width',$("nav ul li:first").width()-60+"px")
	$("nav ul li a").on('mouseover',function(){
	$("#efecto").css('width',$(this).parent().width()-60+"px")
		$("#efecto").animate({
			left:$(this).parent().position().left+25+"px"
		})
	})
	

	//Situar flotantes
	slider = $('.slider').position()
	$("#nosotros_flotante").css({
		"left":slider.left+50,
		"width":'420px',
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
	$("#inicio").on('click',function () {
		$(".flotante").fadeOut(500)
	})

	$("#nosotros").on('click',function(){
		$("#nosotros_flotante").fadeIn(500)
		$("#info_flotante").load('nosotros.html #qs',function(){
			$(this).hide(0,function(){
				$(this).fadeIn(500)
			})
		})
	})
})