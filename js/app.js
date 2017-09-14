(function ($) {

  $('.btn').hover(function(){

    $(this).addClass("btn-highlight");
  }, function() {
    $(this).removeClass("btn-highlight");
  });

  $('.btn').click(function(){
    $(this).toggleClass("active");
  });












})(jQuery);
