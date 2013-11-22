$(document).ready(function(){
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
		},100)
	
})
