$(document).ready(function(){

	const swiper = new Swiper('.best .cnt', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			640: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 50, 
			},
		},

	});

	const swiper_std = new Swiper('.steady .cnt', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 5,
				spaceBetween: 35,
			},
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.steady .swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},
	});

	const swiper_blg = new Swiper('.blog .cnt', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 4, /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			640: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 40, 
			},
		},
	});

	let winH
	let docH
	let scrolling=0
	let move_scroll
	let bg_name=$('.body_bg img') 

	bg_scroll()
	function bg_scroll(){
		winH = $(window).height()
		docH = $(document).height()
		scrolling = $(window).scrollTop()
		if(scrolling > 100){
			move_scroll = scrolling - 100
		}else{
			move_scroll = 0
		}
		console.log()
		bg_name.height(docH)
		bg_name.css('top',-scrolling +'px')
		// bg_name.animate({
		// 	top: -move_scroll
		// },0)

		// bg_name.animate({
		// 	top: -scrolling
		// },1000)

	}
	$(window).scroll(function(){
		bg_scroll()
		bg_name.addClass('ani')
	})
	$(window).resize(function(){
		bg_scroll()
	})



});//document.ready