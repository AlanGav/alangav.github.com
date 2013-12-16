function seleccionado(){
var archivos = document.getElementById('archivos')
var archivo = archivos.files
var data = new FormData()
for (var i = 0; i < archivo.length; i++) {
	data.append('archivo'+i,archivo[i])
};
	$.ajax({
		url:'../borbor/ajax/subir.php',
		type:'post',
		contentType:false,
		data:data,
		processData:false,
		cache:false,
	}).done(function(msg){
			alert(msg)
		
	})

}