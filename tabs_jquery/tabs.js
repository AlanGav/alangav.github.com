$(document).on('ready',function(){
	$('.tabs-nav li:first').addClass('active');
	$('.content').hide();
	$('.content:first').show();

	$('.tabs-nav li').click(function(){
		$('.tabs-nav li').removeClass('active');
		$(this).addClass('active');
		$('.content').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn(1000);
	})
})