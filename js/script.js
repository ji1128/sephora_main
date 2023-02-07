$(document).ready(function () {

    // $('header div.gnb-pc nav ul li.item .item__name').hover(function () {
    //     $(this).find('.item__contents').stop().slideDown();
    // }, function () {
    //     $(this).find('.item__contents').stop().slideUp();
    // })

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
        allowTouchMove: true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
        speed: 1000,
        autoplay: { //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        navigation: { // 버튼
            nextEl: ".items-slide .swiper-button-next",
            prevEl: ".items-slide .swiper-button-prev",
        },
        pagination: { // 페이징 설정
            el: '.items-slide .swiper-pagination',
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동
        },
        breakpoints: { //반응형 조건 속성
            1200: {
                slidesPerView: 5, //레이아웃 5열
            },
        }
    });

    //exclusive swiper slider
    new Swiper('.exclusive .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2, //보여질 슬라이드 갯수
        slidesPerGroup: 1, //슬라이드 넘길 때 이동 갯수
        spaceBetween: 0, //슬라이드 사이 여백
        centeredSlides: true, //첫번째로 나오는 1번 슬라이드가 가운데에 보이기
        observer: true, //display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요
        observeParents: true, // display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에
        speed: 1000,
        autoplay: {
            delay: 2000,
            //자동으로 넘어가는 것을 지연시킴 (천천히 넘어가게 함)
            disableOnInteraction: false,
        },
        pagination: {
            //pager
            el: ".exclusive .swiper-pagination",
            clickable: true //페이저 클릭해서 제어 가능 여부
        },
        navigation: {
            prevEl: ".exclusive .swiper-button-prev",
            nextEl: ".exclusive .swiper-button-next"
        },
    });

    // slider에 마우스 hover 시 멈추게 함
    $(".swiper").each(function (elem, target) {
        var swp = target.swiper;
        $(this).hover(function () {
            swp.autoplay.stop();
        }, function () {
            swp.autoplay.start();
        });
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

    // skroll-spy -----------------------------
    //Masgic Scroll---------------------
    const spyEls = document.querySelectorAll("section.scroll-spy");
    //forEach -> 배열함수
    spyEls.forEach(function (spyEl) {
        new ScrollMagic.Scene({
                triggerElement: spyEl, //보여질 부분 감지할 요소 지정
                triggerHook: 0.8, //0.8초 동안 훅이 실행됨
            })
            //토글 할 요소 생성 및 제거
            //.setClassToggle(토글 할 요소, "넣었다 뺐다 할 class 이름 생성")
            .setClassToggle(spyEl, "show")
            .addTo(new ScrollMagic.Controller());
    });


})