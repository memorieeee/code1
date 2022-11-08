$(document).ready(function(){

    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .btn_wrap .btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    });

    $('.visual .popup .btn_stop').on('click', function(){
		let popStatus = $(this).hasClass('play'); //true면 play - 재생기능. false면 stop - 정지기능
		if(popStatus == true){ //버튼 상태가 play모양 - 현재 정지상태 - 재생기능을 실행
			swiper.autoplay.start();
			$(this).removeClass('play');
			$(this).text('일시정지');
		}else{ //버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능 실행 
			swiper.autoplay.stop(); 
			$(this).addClass('play');
			$(this).text('재생');
		}
	}); // visual stop

    const swiper_menu = new Swiper('.menu .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 20, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 26, 
            },
            800: {  /* 800px 이상이 되면 적용 */
                spaceBetween: 30, 
            },
            1200: {  /* 1200px 이상이 되면 적용 */
                spaceBetween: 38, 
            },
        },
    });

    const swiper_news = new Swiper('.news .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.news .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
    	},
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 26,
            },
            800: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 30,
            },
     
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.news .btn .right',  /* 다음 버튼의 클래스명 */
            prevEl: '.news .btn .left',  
    	},

    });

});//document.ready