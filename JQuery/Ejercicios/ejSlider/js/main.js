$(document).ready(function(){
    'use strict';

    var onSlideAfter = function onSlideAfter($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    };

    var onSlideBefore = function onSlideBefore($slideElement, oldIndex, newIndex){
        console.log($slideElement, oldIndex, newIndex);
    };

  var slider = $('.bxslider').bxSlider({
    'mode' : 'fade',
    'pager' : false,
    'controls' : false,
    'onSlideBefore' : onSlideBefore,
    'onSlideAfter' : onSlideAfter

  });

  $(document).on('click', '#anterior', function(e) {
    console.log('click');
    e.preventDefault();

    var target = this.dataset.target;
    var $target = $(this).data('target');

    slider.goToPrevSlide();
    });

  $(document).on('click', '#siguiente', function(e) {
    console.log('click');
    e.preventDefault();
    slider.goToNextSlide();
    });

$(".fancybox").fancybox();

});