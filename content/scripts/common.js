$(document).ready(function(){
    slider();
    moModalForm(); //0412 zoe 추가
    modal();

    //floating apply btn
    var floatApplyBtn = $(".float-cta-btn__apply");
    var applyAgreeTop = $(".apply-agree-form").offset().top;
    floatApplyBtn.on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop : applyAgreeTop - 200
        }, 750);
    });

    //floating share btn
    var showShareBtn = $(".float-cta-btn__share");
    showShareBtn.on("click", function(e){
        e.preventDefault();
        $(".float-share-list").toggleClass("active");
    });

    //toggle information
    var tglInfoTit = $(".tgl-info-tit");
    tglInfoTit.on("click", function() {
        $(this).toggleClass("fold");
        $(this).next(".tgl-info-txt").slideToggle(250);
    });
});

//media query matches value
var mqWeb = window.matchMedia("screen and (min-width: 1200px)");
var mqPad = window.matchMedia("screen and (max-width: 991.98px)");
var mqMobile = window.matchMedia("screen and (max-width: 576.98px)");

$(window).scroll(function(){

    var windowST = $(this).scrollTop();

    //floating cta box
    if(windowST > 0) {
        $(".float-cta-box").addClass("scrl-active");
    } else {
        $(".float-cta-box").removeClass("scrl-active");
        $(".float-share-list").removeClass("active");
    }
});

//banner slider
function slider() {
    var bnrSlider = $(".banner-slider");

    bnrSlider.slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        dots: true,
        arrows: false
    });
}

//modal form focus (0412 zoe 추가)
function moModalForm() {
    if(mqMobile.matches) {
        $(".modal-area").each(function(){
            var modalRow = $(this).find(".form-row");

            modalRow.on("click", function(){
                $(".modal-area").animate({
                    scrollTop: 0
                }, 350);
            });
        });
    }
}

//common modal
function modal() {
    var modalArea = $(".modal-area");
    var modalWrap = $("[class^=modal-wrap__]");
    var showModal = $(".show-modal-btn");
    var closeModal = $(".close-modal-btn");

    if(modalArea.is(":visible")) {
        $("body").addClass("full");
    } else {
        $("body").removeClass("full");
    }

    showModal.on("click", function (e) {
        e.preventDefault();
        $("body").addClass("full");
        modalArea.fadeIn(250);
    });

    closeModal.on("click", function (e) {
        e.preventDefault();
        $("body").removeClass("full");
        modalArea.fadeOut(250);
    });
    modalArea.on("click", function(e){
        if (!$(e.target).closest(modalWrap).length) {
            $("body").removeClass("full");
            $(this).fadeOut(150);
        }
    });
}

//onclick modal
function clickModal(odj) {
    var modalArea = $(".modal-area");
    var thisModalData = $(odj).data("modal");
    var thisModal = $("#" + thisModalData)

    $("body").addClass("full");
    modalArea.not(thisModal).fadeOut(250);
    thisModal.fadeIn(250);
}