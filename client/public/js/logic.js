$(document).ready(function() {
    $('.homeCarousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        mobileFirst: true,
        swipe: true,
    })
})

$(document).ready(function() {
    $('.userHeader').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
})

// $(document).ready(function(){
//   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
//   $('.modal').modal({
//     startingTop: '4%',
//     endingTop: '4%'
//   });
// });

$(document).ready(function() {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 70,
        gutter: 10,
    });
})

