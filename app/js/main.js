$(document).ready(function(){

   const slideShow = $('.slide-show');
   const slides = $('.single-slide');
   const prev = $('.slider-nav-prev');
   const next = $('.slider-nav-next');
   const close = $('.slider-close');
   let slideCount = slides.length;
   let slideWidth = 100/slideCount;
   let slideIndex = 0;

   $('.staff-box').click(function(){
      let currentSlideIndex =  $(this).data("index");
      slideIndex = currentSlideIndex;
      slideShow.css('margin-left', currentSlideIndex * (-100) + '%');

      $('.slider-container').show();
      $('.container').hide();
      $('#main-header').hide();
   }); 
   
   close.click(function(){
      $('.slider-container').hide();
      $('.container').show();
      $('#main-header').show();
   });

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
   
});
   