$(document).ready(function(){ 
    // 모든 html요소가 로딩된 이후에 jquery를 실행

    /* 
        visual영역의 높이를 브라우저의 높이와 동일하게 설정
        window.height
        > 브라우저가 리사이즈 될 때마다 높이를 다시 설정
        > visual의 문구는 높이의 위아래 가운데 쯤에 배치

    */
    let winH = $(window).height();
    $('.visual .cnt_h').height(winH);  //visual의 높이를 window의 높이로 설정
    console.log('window의 높이'+winH);

    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 실행
        winH = $(window).height();
        $('.visual .cnt_h').height(winH);  //visual의 높이를 window의 높이로 설정
        console.log('window의 높이'+winH);
    })

    /* 
        .header .lang .open 클릭했을 때
        1. ul이 나타남
        2. open 숨김, close 나타남
        --> .header .lang에 lang_open 클래스를 추가 

        .header .lang 에 close 클릭했을 때
        --> .header .lang에  lang_open 클래스를 삭제
    */
    $('.header .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open');
    });
    $('.header .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open');
    });
}); //document.ready 종료