$( document ).ready(function() {
    
    // Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
    
    function main2() {
        let mylist = $('.smember-wr').children();
        
        
        for (const key in mylist) {
            if (Object.hasOwnProperty.call(mylist, key)) {
                const el = mylist[key];
                el.style.backgroundImage = `url(`+el.firstElementChild.getAttribute('src')+`)`;
                const elw=el.offsetWidth *0.8389261745
                el.style.height =elw+`px`; 
                
            }
        }
        
    }
    
    function main() {

        
        $('.wa').scrollLeft(-100,20);
        let a=$('.intro').height();
        // let a2=$('.title').height();
        let a2Parent=$('.title').parent('.container').width();
        let a3=$('.title').width();
        let a2Rest =( a2Parent - a3)/2;
        $('.title').css({
            "right":a2Rest
        });
        $('.spacer').css({
            "padding-top":a
        });
        let sp2 = $('.spacer-2');
        let ray_section_h = $('section.ray').height();
        let ray_section_body_h=$('.swiper-w.d-flex').height();
        sp2.css({
            "padding-top":ray_section_h
        });
        let www123 = $('.swiper-slide.img5').width();
        $('.swiper-slide.img5 img').css({
            "width":www123-90
        });
        $('.warper.wa').scrollLeft(50);

        
        
    }    
    window.onresize = main;
    window.onresize = main2;
    $(window).on('load',main()) ;
    $(window).on('load',main2()) ;


    $(function(){
        $("#typed-strings").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });
    
    // document.addEventListener("DOMContentLoaded", function(){
    //     Typed.new(".typed", {
    //         stringsElement: document.getElementById('typed-strings'),
    //         typeSpeed: 1
    //     });
    // });










    // const swi = new Swiper('.members-sldr.cub', {

    //     effect: "cube",
    //     grabCursor: true,
    //     cubeEffect: {
    //         shadow: true,
    //         slideShadows: true,
    //         shadowOffset: 20,
    //         shadowScale: 0.94,
    //     },
    //     loop: true,
    //     autoplay: {
    //         delay: 3000,
    //     },
    // });
    // const swiper = new Swiper('.members-sldr.w3', {
    //     loop: true,
    //     autoplay: {
    //         delay: 2000,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         prevEl : ".swiper-button-prev",
    //         nextEl : ".swiper-button-next"
    //     },
    //     breakpoints: {
    //         300:{
    //             slidesPerView: 1,
    //             // slidesPerColumn: 2,
    //             spaceBetween: 1,

    //         },
    //         1201: {
    //             slidesPerView: 4,
    //             slidesPerColumn: 2,
    //             spaceBetween: 15,
    //         },
    //         1300: {
    //             slidesPerView: 4,
    //             // slidesPerColumn: 2,
    //             spaceBetween: 15,
    //         },
    //     },
    // });
    


    $('.whats-call').fadeIn(600);


    // console.log(w);
    // console.log($('.swiper-slide.img5').width());
    
    // $('body').scrollbar();





























});