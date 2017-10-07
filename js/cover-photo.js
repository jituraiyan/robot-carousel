


function setImage(){

	var image;

	$('.cover-image').each(function(i){
		image = new Image();
		image.src = $(this).find('img').attr("src");

		thisContainer = $(this);

		$(image).on('load', function(){
			
			containerRatio = $('.cover-image').eq(i).width()/$('.cover-image').eq(i).height()
			imageRatio = this.width/this.height;

			if(imageRatio > containerRatio){

				$('.cover-image').eq(i).find('img').css({
					'height': '100%',
					'width': 'auto'
				});
				$('.cover-image').eq(i).find('img').css({
					'left': -($('.cover-image').eq(i).find('img').width() - $('.cover-image').eq(i).width())/2 + 'px',
					'top': 0
				});
			}else{
				$('.cover-image').eq(i).find('img').css({
					'height': 'auto',
					'width': '100%'
				});
				$('.cover-image').eq(i).find('img').css({
					'left': 0,
					'top': -($('.cover-image').eq(i).find('img').height() - $('.cover-image').eq(i).height())/2 + 'px'
				});
			}
		});
	});
}

$(window).on('load resize', function(){
	setImage();
});
$('.arrow').on('click', function(){
	setImage();
});

