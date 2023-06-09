$('.rating__circle').click(function() {
    $(this).addClass('active');
    $('.rating__circle').not(this).removeClass('active');
});

$('.submit').click(function() {
    $('.main-wrapper').css('display', 'none');
    $('.state-wrapper').css('display', 'flex');

   if($('.rating__circle').hasClass('active')) {
        let ratingValue = $('.rating__circle.active').prop("checked", true).val();
            $('.state-selected-info').text('You selected ' + ratingValue + ' out of 5');
   } else {
        $('.state-selected-info').text('You selected 0 out of 5');
   }
});

$('.reset').click(function() {
    $('.main-wrapper').css('display', 'flex');
    $('.state-wrapper').css('display', 'none');
    if($('.rating__circle').hasClass('active')) {
        $('.rating__circle').removeClass('active');
    };
});