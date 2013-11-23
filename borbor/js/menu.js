$(document).ready(function(){
			ancho = $("nav ul li").width()-50
	$("nav ul").append("<div id=efecto></div>")
	$("#efecto").css({
		height:'2px',
		background:'#fff',
		width:ancho,
		position:'absolute'
	})
	$("#efecto").css("left",$("nav ul li").position().left+25+"px")
	$("#efecto").css('width',$("nav ul li:first").width()-60+"px")
	$("nav ul li a").click(function(){
		//$("#efecto").css("left",$(this).parent().position().left+"px")
		$("#efecto").css('width',$(this).parent().width()-60+"px")
		$("#efecto").animate({
			left:$(this).parent().position().left+25+"px"
		})
	})
})