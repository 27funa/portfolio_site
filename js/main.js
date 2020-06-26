$(function(){
    $('.hero-container').each(function(){
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 7000);

        function showNextSlide(){
            var nextIndex = (currentIndex + 1) % slideCount;

            $slides.eq(currentIndex).fadeOut(1000);

            $slides.eq(nextIndex).fadeIn(1000);

            currentIndex = nextIndex;
        }
    });
});