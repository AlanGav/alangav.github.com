$(document).ready(function(){
	$('.galeria img').click(function(){
		var img = $(this).attr('src')
		$('.galeria img').each(function(index){
			if($(this).attr('src') == img){
					$(this).animate({'opacity':'.5'},500)
			}
			else{
				$(this).animate({'opacity':'1'},500)
			}
		})
		$('.imagen').css('opacity','0')
		$('.imagen').html("<img src='"+img+"'/>").animate({
			'opacity':'1'
		},1000)
		$('.imagen img').css('box-shadow','0px 6px 8px #ddd')

	})
})