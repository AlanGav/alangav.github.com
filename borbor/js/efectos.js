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

	$("#progressbar").css('opacity','0')
	$("#porcentaje").css('opacity','0')
	$("#spanish").click(function(){
	$("#efecto_desliz").css('margin-left','75px')
	$("#progressbar").css('opacity','1')
		$("#porcentaje").css('opacity','1')
		loaded = 0
	var load = function(){
			loaded+=10;
			if(loaded<=100){
			$("#porcentaje").html(loaded+"%")
			$("#progressbar").progressbar({
				value:loaded
			})
			$("#progressbar > div").css('background','#000')
			dummyload();	
			}
			else{
				document.location.href="inicio.html"
			}

		};
		var dummyload = setInterval(function(){
			load();
		},250)
	
	})
	$("#english").click(function(){
		$("#efecto_desliz").css('margin-left','-515px')
		$("#progressbar").css('opacity','1')
		$("#porcentaje").css('opacity','1')
		loaded = 0
	var load = function(){
			loaded+=10;
			if(loaded<=100){
			$("#porcentaje").html(loaded+"%")
			$("#progressbar").progressbar({
				value:loaded
			})
			$("#progressbar > div").css('background','#000')
			dummyload();	
			}
		};
		var dummyload = setInterval(function(){
			load();
		},250)
		
	})
	
	
	
})