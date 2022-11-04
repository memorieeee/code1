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

});//document.ready