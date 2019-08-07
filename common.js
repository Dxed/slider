var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateW = 0;
var slideInterval = 3000;
var navBtnId = 0;
	
$(document).ready(function() {
	var switchInterval = setInterval(nextS, slideInterval);
	$('#viewport').hover(function(){
        clearInterval(switchInterval);
	},function() {
        switchInterval = setInterval(nextS, slideInterval);
	});
    
	$('#next-btn').click(function() {
        nextS();
    });
    $('#prev-btn').click(function() {
       prevSlide();
    });
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
		'-o-': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
});
});


function nextS(){
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
           '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	    '-o-': 'translate(' + translateWidth + 'px, 0)'
       });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	     '-o-': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
	     '-o-': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
