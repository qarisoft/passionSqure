$( document ).ready(function() {
    
    
    $('.wa').scrollLeft(-100,20);
    let a=$('.intro').height();
    let a2=$('.title').height();
    let a2Parent=$('.title').parent('.container').width();
    let a3=$('.title').width();
    let a2Rest =( a2Parent - a3)/2;

    $('.title').css({
        "right":a2Rest
    });
    $('.spacer').css({
        "padding-top":a+a2
    });
    console.log(a2Parent)
    console.log(a2Rest)

    // $('.wa').scrollRight(300)
    
    
    // const swiper = new Swiper('.swiper1 .warper', {
    //     // Optional parameters
    //     // direction: 'horizontal',
    //     loop: true,
    //     autoplay: {
    //         delay: 500,
    //     },
    //     // pagination: {
    //     //     el: ".swiper-pagination",
    //     //     clickable: true,
    //     // },
    //     navigation: {
    //         nextEl: ".swiper-button-prev",
    //         prevEl: ".swiper-button-next"
    //     },
    //     breakpoints: {
    //         300:{
    //             slidesPerView: 2,
    //             slidesPerColumn: 2,
    //             spaceBetween: 40,

    //         },
    //         768: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 2,
    //             spaceBetween: 40,
    //         },
    //         1201: {
    //             slidesPerView: 3,
    //             slidesPerColumn: 2,
    //             spaceBetween: 40,
    //         },
    //         1300: {
    //             slidesPerView: 2.5,
    //             slidesPerColumn: 2,
    //             spaceBetween: 40,
    //         },
    //     },
    // });
    
    // $('body').scrollbar();


































});