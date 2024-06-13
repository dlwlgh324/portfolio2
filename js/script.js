window.onload = function () {
    AOS.init();
};

$(document).ready(function () {
    //모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    // modal_close클릭 시 modal 사라지기
    modal_close.click(function () {
        modal.fadeOut();
    });

    //modal클릭 시 modal사라지기
    modal.click(function () {
        modal.fadeOut();
    });

    //.modal-cont 를 마우스로 클릭하면 사라지지않기
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    //modal-show href막기 & 사라지게하기
    modal_show.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
    });

    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $('.gotop').addClass('gotop-show');
        } else {
            $('.gotop').removeClass('gotop-show');
        }
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });
    //주메뉴
    let header = $('.header');

    $(window).scroll(function () {
        let scroll_bar = $(window).scrollTop();
        if (scroll_bar > 0) {
            header.addClass('header-active')
        } else {
            header.removeClass('header-active')
        };
    });

    //퍼블리싱 슬라이드
    let swiper = new Swiper('.sw-work', {
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".sw-work-next",
            prevEl: ".sw-work-prev",
        },
        pagination: {
            el: ".sw-work-pg",
            type: "fraction",
        },
    });
});