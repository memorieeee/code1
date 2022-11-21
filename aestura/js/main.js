const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
	breakpoints: {
		640: {  /* 640px 이상이 되면 적용 */
			spaceBetween: 30, 
		},
		1024: {  /* 1024px 이상이 되면 적용 */
			spaceBetween: 40,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});