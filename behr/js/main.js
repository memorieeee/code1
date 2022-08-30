$(document).ready(function(){
    let winW = $(window).width()
    let docW = $(document).width()
    console.log(winW)
    console.log(docW)
    
    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    // top버튼을 눌렀을 때 상단으로  스크롤 
    $('aside button').on('click', function(){
        console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })

    /* 
        조건1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가 
        조건2 - 스크롤 값이 0이면 header에 fixed 클래스 삭제
    */

    /* 로딩했을 때 맨 처음 */ 
    let scrolling = $(window).scrollTop()
    console.log(scrolling)

    /* 스크롤 할때마다 실행 */
    $(window).scroll(function(){ 
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    })
})

