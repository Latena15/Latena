((function(){
	// Code goes here

	$('.js-button').on('click', function(){
		$('js-button').removeClass('active')
		$('this').addClass('active')

		var series = $('this').attr('data-which');

}).call(this);

		$(".heart").click(function() {
	window.location = $(this).find("a").attr("href");
	return false;
});
