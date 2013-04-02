$(document).ready(function(){
	$('.galeria img').click(function(){
		var img = $(this).attr('src')
		$('.galeria img').each(function(index){
			if($(this).attr('src') == img){
					$(this).animate({'opacity':'.5'},250)
			}
			else{
				$(this).animate({'opacity':'1'},250)
			}
		})
		$('.imagen').css('opacity','0')
		$('.imagen').html("<img src='"+img+"'/>").animate({
			'opacity':'1'
		},1000)
		$('.imagen img').css('box-shadow','0px 6px 8px #ddd')

	})
})