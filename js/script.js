$(document).ready(function () {


    $('.bxslider').bxSlider({
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
        speed: 900,

        //마지막 사진에서 첫번 째 사진으로 무한반복
        infiniteLoop: true,

        //마우스 호버시 애니메이션 정지됨
        autoHover: false,
        //웹 브라우저 실행되면 자동으로 재생되게 함
        autoStart: true,

    });

    $('.most-box').slick({
        slide: 'div',
        infinite: true, //무한 반복 옵션
        adaptiveHeight: false,

        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true, //자동재생
        autoplaySpeed: 3000, //자동스크롤 넘어가데 걸리는 시간
        speed: 1500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        pauseOnHover: false, //마우스 호버시 자동재생 일시정지

        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정

        dots: true,
        draggable: true,
        // dot: true,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.pick-box, .only-box').slick({
        slide: 'div',
        infinite: true, //무한 반복 옵션
        adaptiveHeight: false,

        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true, //자동재생
        autoplaySpeed: 5000, //자동스크롤 넘어가데 걸리는 시간
        speed: 1500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        pauseOnHover: false, //마우스 호버시 자동재생 일시정지

        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정

        draggable: true,
        dot: true,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            }
        ]

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


        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            }
        ]

    });
    
    //setTimeout() : 일정시간 후에 실행시키고 싶을 때
    //setTimeout(실행할 함수, 지연시간);

    let cont = $('#section-wrap > section');
    $(window).scroll(function(){
        if($(document).scrollTop() > cont.eq(3).offset().top){
            $("#block-slide .block-box a").each(function(eq){
                let icon = $(this);
                setTimeout(function(){
                    icon.addClass('move');
                }, eq * 200)
            });
        }

        if($(window).scrollTop() <= cont.eq(2).offset().top){
            $("#block-slide .block-box a").removeClass('move');
        }
    })





})