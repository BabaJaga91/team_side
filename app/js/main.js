$(document).ready(function() {
    $('.staff-box').click(function(){
        $('body').css("background-color", "blue");
        $('#slider').show();
        $('.staff-box').hide();
        $('#main-header').hide();

        $('#slide-cap-2').show();
    });
});


// $('#figure1').click(function(){
//    $('#slide2').show();
// });



const slideShow = $('.slide-show');
const slides = $('.single-slide');
const prev = $('.slider-nav-prev');
const next = $('.slider-nav-next');
const close = $('.slider-close');
let slideCount = slides.length;
let slideWidth = 100/slideCount;
let slideIndex = 0;

function slide(newSlideIndex) {
   if(newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
      return;
   }

   let marginLeft = (newSlideIndex * (-100)) + '%';

   slideShow.animate({
      'margin-left': marginLeft
   },1000);

   slideIndex = newSlideIndex;

}


slideShow.css({'width': slideCount + '00%'});

slides.each(function(ind){
   $(this).css({
      'width': slideWidth + '%',
      'margin-left': ind * slideWidth + '%'
   });
});

prev.on('click',function(){
   slide( slideIndex - 1 );
});

next.on('click',function(){
   slide( slideIndex + 1 );
});


close.click(function(){
   $('#slider').hide();
   $('.staff-box').show();
   $('#main-header').show();
   $('body').css("background-color", "#808080");
});

