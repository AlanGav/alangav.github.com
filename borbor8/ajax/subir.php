<?php 


	$ruta = "../subidas/";




foreach ($_FILES as $key ) {
		if($key['error'] == UPLOAD_ERR_OK){
			$nombre = $key['name'];
			$tipo = $key['type'];
			$temporal = $key['tmp_name'];
			$tamano = ($key['size']/1000)."kb";
			$rutaArchivo = $ruta.$nombre;
			move_uploaded_file($temporal,$ruta.$nombre);
			echo $nombre;
		}
}
			
			
	
 ?>