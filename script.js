$('.owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:10,
    nav:false,
    autoply: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})