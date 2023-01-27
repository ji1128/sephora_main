$(document).ready(function () {

    // bxslider
    $('.slider').bxSlider({
        //슬라이드종류
        mode: 'horizontal',
        //자동으로 슬라이드
        auto: true,
        //prev, next 버튼 활성화
        controls: true,
        //닷 버튼
        pager: true,
        captions: true,
        //재생,정지버튼
        autoControls: false,
        autoStart: true,
        //슬라이드 스피드
        speed: 800,
        //마지막 사진에서 첫번 째 사진으로 무한반복
        infiniteLoop: true,
        //마우스 호버시 애니메이션 정지됨
        autoHover: false,
        //웹 브라우저 실행되면 자동으로 재생되게 함
        autoStart: true,
    });



})