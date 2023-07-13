$( document ).ready(function() {

    
    
    function main() {



        
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
        let sp2 = $('.spacer-2');
        let ray_section_h = $('section.ray').height();
        let ray_section_body_h=$('.swiper-w.d-flex').height();
        sp2.css({
            "padding-top":ray_section_h+ray_section_body_h
        });
        let www123 = $('.swiper-slide.img5').width();
        $('.swiper-slide.img5 img').css({
            "width":www123-90
        });
        $('.warper.wa').scrollLeft(50);



        if($(window).width() < 767)
        {
            if ($('#member-sldr').hasClass('w3')) {
                $('#member-sldr').removeClass('w3').addClass('cub');
                $('.member-wr .swiper-slide img').css({"border-radius":"5%"});
                $('.swiper-button-prev').css({"display":"none"});
                $('.swiper-button-next').css({"display":"none"});
                
            }else{
                if (! $('#member-sldr').hasClass('cub')) {
                    $('#member-sldr').addClass('cub');
                    $('.member-wr .swiper-slide img').css({"border-radius":"5%"});
                    $('.swiper-button-prev').css({"display":"none"});
                    $('.swiper-button-next').css({"display":"none"});
                    // $('.swiper-button-next')
                }
            }
            
        } else {
            if ($('#member-sldr').hasClass('cub')) {
                $('#member-sldr').removeClass('cub').addClass('w3');
                $('.member-wr .swiper-slide img').css({"border-radius":"50%"});
                $('.swiper-button-prev').css({"display":"block"});
                $('.swiper-button-next').css({"display":"block"});
                
            }else{
                if (! $('#member-sldr').hasClass('w3')) {
                    $('#member-sldr').addClass('w3');
                    $('.member-wr .swiper-slide img').css({"border-radius":"50%"});
                    $('.swiper-button-prev').css({"display":"block"});
                    $('.swiper-button-next').css({"display":"block"});
                }
            }
        }
        
    }    
    $(window).on('load',main()) ;
    $( window ).on( "resize", function() {
        // console.log('12312313123132123123132');
        location.reload();
      } );
    const swi = new Swiper('.members-sldr.cub', {

        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });
    const swiper = new Swiper('.members-sldr.w3', {
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl : ".swiper-button-prev",
            nextEl : ".swiper-button-next"
        },
        breakpoints: {
            300:{
                slidesPerView: 1,
                // slidesPerColumn: 2,
                spaceBetween: 1,

            },
            1201: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 15,
            },
            1300: {
                slidesPerView: 4,
                // slidesPerColumn: 2,
                spaceBetween: 15,
            },
        },
    });
    


    $('.whats-call').fadeIn(600);


    // console.log(w);
    // console.log($('.swiper-slide.img5').width());
    
    // $('body').scrollbar();


































});