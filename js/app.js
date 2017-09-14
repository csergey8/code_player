(function ($) {

  function update() {
    $('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $('#htmlPanel').val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($('#javascriptPanel').val());


  };

  $('.btn').hover(function () {

    $(this).addClass("btn-highlight");
  }, function () {
    $(this).removeClass("btn-highlight");
  });

  $('.btn').click(function () {
    $(this).toggleClass("active");

    var panelId = $(this).attr('id') + 'Panel';

    $('#' + panelId).toggleClass('hidden');

    var panels = 4 - $('.hidden').length;

    $('textarea').width(($(window).width() / panels) - 100);

    update();

  });



  $('textarea').on('change keyup paste', function () {
    update();
  });









})(jQuery);
