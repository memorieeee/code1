/* 
    언제 : 스크롤을 내렸을 때 
    누구를 : header $('header')
    어떻게 : fixed 클래스를 추가 : addClass() - 클래스를 추가하는 명령
    
    --> 
    다시 맨 위로 올라갔을 떄 fixed클래스를 삭제해야함.
    $(window).scrollTop(); - 얼만큼 스크롤 되었는지 계산해주는 값

    스크롤값을 계산해서 
    스크롤을 100보다 많이 하면 fixed클래스를 추가하고
    100이하면 fixed클래스를 삭제.
*/

let scrolling = $(window).scrollTop()

$(window).scroll(function(){
    scrolling = $(window).scrollTop()
    // console.log(scrolling)

    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
});
