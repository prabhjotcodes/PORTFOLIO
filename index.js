$(document).ready(function () {
    $('.btn-top').hide();
  
    $("#trans").click(function(){    
      $('#tgl').toggleClass('fa-bars fa-times');
    });
  
    $(window).scroll(function(){
      let startHeight = $('.second-section').height()/2;
      let currentHeight = $(window).scrollTop();
      
      if(currentHeight > startHeight){
        $('.btn-top').show();
      }
      else{
        $('.btn-top').hide();
      }
    })
  });

  $(document).ready(function () {
  $("#trans").click(function(){
    $("#nav-collapse").toggle();
  });
});

function animateProgressBars() {
    $('.progress-fill').each(function () {
      const rect = this.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      const targetWidth = $(this).attr('data-width');

      if (inView) {
        $(this).css('width', targetWidth);
      } else {
        // Reset when out of view so animation can happen again
        $(this).css('width', '0');
      }
    });
  }

  $(document).ready(function () {
    animateProgressBars(); // initial run
    $(window).on('scroll', animateProgressBars); // on scroll
  });
