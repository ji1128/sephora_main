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


    // swiper slider
    new Swiper('.items-slide .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, //슬라이드 반복 여부
        autoplay: true, //자동재생
        slidesPerView: 5, //한 번에 보여줄 슬라이드 개수
        slidesPerGroup: 5, //슬라이드 넘길 때 이동 갯수
        spaceBetween: 20, //슬라이드와 슬라이드 사이 간격
        allowTouchMove: false, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
        speed: 900,
        autoplay: { //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        navigation: { // 버튼
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: { // 페이징 설정
            el: '.swiper-pagination',
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동
        },
        breakpoints: { //반응형 조건 속성
            1200: {
                slidesPerView: 5, //레이아웃 5열
            },
        }
    });

    $('.sns-box').slick({
        slide: 'div',
        infinite: true, //무한 반복 옵션
        adaptiveHeight: false,

        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, //자동재생
        autoplaySpeed: 2500, //자동스크롤 넘어가데 걸리는 시간
        speed: 900, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        pauseOnHover: false, //마우스 호버시 자동재생 일시정지

        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정

        draggable: false,



    });

})