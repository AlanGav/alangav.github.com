$(document).ready(function(){


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
