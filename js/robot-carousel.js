var showImage = 7,
	activeScale = 1.2,
	thumbGap = 0.3,
	active = 0,
	transform = 0,
	thumbTrans = 0,
	w;

function activeChange(){

	// HEIGHT AND WIDTH OF SINGLE THUMBS

	var thumbsWidth = $('.robot-thumbs-show').width(),
		activeWidth = (activeScale * thumbsWidth)/ showImage,
		length = 0;

	$('.single-thumbs').css('width', Math.round((thumbsWidth - activeWidth) / (showImage - 1) ) + 'px');
	$('.single-thumbs.active').css('width', Math.round(activeWidth) + 'px');
	
	$('.single-thumbs').each(function(){
		length += $(this).width();
	});
	$('.robot-thumbs').css( 'width', length + 'px');

	// HEIGHT AND WIDTH OF COVER IMAGE INSIDE SINGLE THUMBS

	$('.single-thumbs .cover-image').each(function(i){
		$(this).css('width', $('.single-thumbs').eq(i).width() - w*thumbGap + 'px');
		$(this).css('height', $(this).width());
	});
}

$(document).ready(function(){
	var totalSlides = $('.single-slide').length,
		totalImage = $('.single-thumbs').length,
		thumbsWidth = $('.robot-thumbs-show').width(),
		activeWidth = (activeScale * thumbsWidth)/ showImage;


	$('.robot-slides').width(totalSlides*100 + '%');
	$('.robot-slides .single-slide').width(100/totalSlides + '%');

	$('.single-thumbs').css('width', Math.round((thumbsWidth - activeWidth) / (showImage - 1) ) + 'px');
	
	w = $('.single-thumbs').eq(1).width();

	activeChange();

	$('.single-thumbs').css('height', $('.single-thumbs.active .cover-image').width() + 'px');
	$('.arrow').css('height', $('.single-thumbs.active .cover-image').height());

	$('.robot-slides').css('transform', 'translateX(0)');
	$('.robot-thumbs').css('transform', 'translateX(0)');


	$('.robot-arrow-left').on('click', function(){
		if(active > 0){
			active--;
			$('.robot-slides').css('transform', 'translateX(-' + (active*100/totalSlides) + '%)');
			$('.single-thumbs').removeClass('active');
			$('.single-thumbs').eq(active).addClass('active');
			activeChange();
			if(active * (100/showImage) + transform < 0){
				transform += (100/showImage);
				thumbTrans += w;
				$('.robot-thumbs').css('transform', 'translateX(' + thumbTrans + 'px)');
			}

		}
	});
	$('.robot-arrow-right').on('click', function(){
		if(active < totalSlides - 1){
			console.log('jitu');
			active++;
			$('.robot-slides').css('transform', 'translateX(-' + (active*100/totalSlides) + '%)');
			$('.single-thumbs').removeClass('active');
			$('.single-thumbs').eq(active).addClass('active');
			activeChange();
			if(active * (100/showImage) + transform >= 100){
				console.log(active);
				transform -= (100/showImage);
				thumbTrans -= w;
				$('.robot-thumbs').css('transform', 'translateX(' + thumbTrans + 'px)');
			}
		}
	});

	$('.single-thumbs').on('click', function(){
		$('.single-thumbs').removeClass('active');
		$(this).addClass('active');
		activeChange();
		active = $(this).index();
		$('.robot-slides').css('transform', 'translateX(-' + (active*100/totalSlides) + '%)');
	});
});