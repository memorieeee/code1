$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싼는 요소의 class명 */

	effect: "fade", /* fade 효과 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 3000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.btn_paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},


	});//visual swiper

	/* visual popup의 정지/재생 버튼 
		하나의 버튼에 두가지 기능
		정지/재생 기능 구분하는 값 
		btn_stop버튼에 play클래스가 없으면 일시정지
		play클래스가 있으면 재생 
	*/ 
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
	});//visual stop




	/* fabric 이미지 스크롤 효과 */
	let scrolling;
	let moveTop;
	let objName = $('.fabric .bg img');
	fabScroll(); //로딩 됐을때 한번
	$(window).scroll(function(){ //스크롤 할 때마다 실행
		fabScroll();

	});

	function fabScroll(){ // 스크롤값을 계산해서 fabric 이미지를 움직일 함수 
		/* 스크롤값을 요소의 위치값으로 변경해서 스타일 적용
		(효과를 줄 요소가 화면 하단에 등장하기 시작했을 때부터의 이동값을 적용) */
		scrolling = $(window).scrollTop();
		console.log(scrolling, 'scroll');
		console.log(objName.offset().top, 'top');
		moveTop = scrolling*0.1;
		// objName.css('transform', 'translate(0, -'+moveTop+'px)');
	}


});//document.ready