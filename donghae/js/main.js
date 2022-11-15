$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싸는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .btn_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    });

    const swiper_course = new Swiper('.course .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 48, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },

        },
        navigation: {
            nextEl: '.course .btn .right',
            prevEl: '.course .btn .left',
        },
    
    });

    $('.course .menu > ul > li > a').on('click', function(){
        $('.course .menu > ul > li').removeClass('active');
        $(this).parent().addClass('active');
   });


   const swiper_sights = new Swiper('.sights .list', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.sights .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    });
        
    $('header .header_top, header .header_sub').on('mouseenter focusin', function(){
        $('header').addClass('over')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('over')
    })


});//document.ready