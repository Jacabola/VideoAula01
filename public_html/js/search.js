'use strict';
$(function () {
    $('.icon-search').click(function () {
        if ($('.inpt-search').css('display') === 'none') {
            $('.inpt-search').show(250);
            $('.inpt-search').focus();
            $('.container-search').animate({
                'width': '100%'
            }, 500);
        }
    });

    $('.inpt-search').focusout(function () {
        if (this.value.trim() === '') {
            $('.container-search').animate({
                'width': '30px'
            }, 500);
            $('.inpt-search').hide();
        }
    });
});