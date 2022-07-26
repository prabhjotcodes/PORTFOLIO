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
  