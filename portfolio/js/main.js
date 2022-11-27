$(document).ready(function(){

    function scrollChk(){ //함수의 선언 
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        if(scrolling > 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }

});//document.ready 종료