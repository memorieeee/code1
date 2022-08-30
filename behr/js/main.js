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

    /* 로딩했을 때 맨 처음에만 단 한번 실행 */ 
    let scrolling
    headerFixed() //함수의 실행

    /* 스크롤 할때마다 실행 - 스크롤을 안 하면 실행 안 함 */
    $(window).scroll(function(){  
        headerFixed() //함수의 실행
    })

    function headerFixed(){ //함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})

