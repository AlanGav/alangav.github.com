$(document).ready(function  () {
	$('div.demo-acordeon:eq(0)> div').hide();
	$('div.demo-acordeon:eq(0)> h3').click(function(){
		$(this).next().slideToggle('fast')
	})
})