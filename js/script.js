//mobile-menu
$('.menuBtn').on('click', function(){
    $('.mobile-menu').css('left',0);
});
$('.mobile-menu .menu-header .close').click(function(){
    $('.mobile-menu').css('left','100%');
});

$('.mobile-menu-sub').hide();
$('.mobile-menu-list li span img').hide();

$('.mobile-menu-list>li>span').on('click focus', function(){
    $('.mobile-menu-sub').stop().slideUp(); //자연스러운 슬라이드를 위해 stop()
    $('.mobile-menu-list>li>span').css('color','#222');
    $('.mobile-menu-list li span img').hide();
    $(this).next('.mobile-menu-sub').stop().slideDown(); 
    $(this).css('color','#DA281F');
    $(this).find('img').show();
});

let $window = $(window);
let mobileHeader = $('.header-mobile-wrap');
let headerOffsetTop = mobileHeader.offset().top;
let logoImg = $('.header-mobile-wrap .logo-wrap a img');
let threeLine = $('.header-mobile-wrap .appBtn-wrap .menuBtn img');

$window.scroll(function(){
    if($(this).scrollTop()> headerOffsetTop){
      mobileHeader.css({background:'#fff'});
      logoImg.attr('src','./img/logo_on.png');
      threeLine.attr('src','./img/gnb_on.png');
      $('.sponsorshipBtn').show();
    }else{
      mobileHeader.css({background:'rgba(0,0,0,.5)'});
      logoImg.attr('src','./img/logo.png');
      threeLine.attr('src','./img/gnb.png');
      $('.sponsorshipBtn').hide();
    }
});

//header-menu
const nav = $('.nav');
let header = $('.header-area');

nav.hover(function(){
    $('.menu-list').stop().animate({height:'270px'},300);
    $('.menuBg').stop().animate({height:'290px'},300);
    header.find('h1 img').attr({'src':'./img/logo_on.png'});
    $('.aside div span').addClass('on');
    nav.find('span').addClass('on');
    header.css('background','#fff');
   
},function(){
    $('.menu-list').stop().animate({height:0},0);
    $('.menuBg').stop().animate({height:0},0);
    header.find('h1 img').attr({'src':'./img/logo.png'});
    $('.aside div span').removeClass('on');
    nav.find('span').removeClass('on');
    header.css('background','rgba(0,0,0,.5)');
});

// 전체메뉴
$('.allMenu-wrap').hide();
let openBtn = $('.aside .allMenuBt .all-menuBtn');
let closeBtn = $('.menu-wrap .allMenu-top .close');
openBtn.click(function(){
    $('.allMenu-wrap').show();
});
closeBtn.click(function(){
    $('.allMenu-wrap').hide();
});

// 배너슬라이드
var swiperBanner = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    mousewheel: true,
    keyboard: true,
});


$('.stopBtn .slide-play').hide();
$('.stopBtn .slide-stop').on('click', function(){
  swiperBanner.autoplay.stop();
    $(this).hide()
    $('.stopBtn .slide-play').show();
});
$('.stopBtn .slide-play').on('click', function(){
  swiperBanner.autoplay.start();
    $(this).hide()
    $('.stopBtn .slide-stop').show();
    return false;
});

// 후원하기
$('.choice-support').click(function(){
    $('.choice-support').removeClass('on');    
    $(this).addClass('on');
    return false;
});

// 후원하기 input value 변경
$(window).resize(function() {
	if($(window).width() <= 1000) { 		
        $('.select-input input').attr("value","0원");
    } 
    else{
        $('.select-input input').attr("value","0");
    }
});


// 나눔이야기 슬라이드
var nanumSwiper = new Swiper(".mySwiper-nanum-right", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 1680px 이상일 때
      1680: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30
      },
      // 화면의 넓이가 1440px 이상일 때
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
      900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
      },
      490: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
      }
    }
});
$('.mySwiper-nanum-right').on('mouseover', function(){
  nanumSwiper.autoplay.stop();
});
$('.mySwiper-nanum-right').on('mouseout', function(){
  nanumSwiper.autoplay.start();
});


// 캠패인 슬라이드
var swiper = new Swiper(".mySwiper-campaign", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});
// 캠패인 슬라이드 모바일
var swiperMo = new Swiper(".mySwiper-campaignMobile", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
});

// 유튜브 동영상
const tab = $('.youtube-tab li');
const content = $('#youtubeContent > div');
content.css('display','none');
content.eq(0).css('display','block');
tab.on('click', function(e){
  e.preventDefault();
  let tg = $(this);
  tab.removeClass('on');
  tg.addClass('on');

  let i = tg.index();
  content.css('display','none');
  content.eq(i).css('display','block');
});

// 공지사항 . 소식
resizeWidth();
function resizeWidth(){
  let infoIdx = $('.info li');
  let timer = null;
  let sec = 300;

  $(window).resize(function() {
    
    clearTimeout(timer);
    timer = setTimeout(function(){     
      if($(window).width() >= 1680) { 		
        infoIdx.show();
      }
      if($(window).width() < 1680) { 		
        infoIdx.next('li:nth-child(4)').hide();
      }
      if($(window).width() < 1440){
        infoIdx.next('li:nth-child(4)').hide();
        infoIdx.next('li:nth-child(3)').hide();
      } 
      if($(window).width() >= 1440){
        infoIdx.next('li:nth-child(3)').show();
      }         
       
      if($(window).width()<= 1000){
        $('.info-left h2').html("세이브더칠드런<br>소식이 궁금하세요?");
      }         
      if($(window).width()> 1000){
        $('.info-left h2').html("세이브더칠드런<br>소식이<br>궁금하세요?");
      }         
    },500);
    
  });  
}

// footer
let linkBtn = $('.footer-top .familySite-wrap .linkBtn button');
let  linkList= $('.footer-top .familySite-wrap .linkBtn .link-list');
let  linkArrow= $('.footer-top .familySite-wrap .linkBtn button i');
let familyBtn = $('.footer-top .familySite-wrap .family-site button');
let familyList = $('.footer-top .familySite-wrap .family-site .link-list');
let familyArrow = $('.footer-top .familySite-wrap .family-site button i');

linkBtn.on('click', function(){
  linkList.toggleClass('on');
  linkArrow.toggleClass('on');
});
familyBtn.on('click', function(){
  familyList.toggleClass('on');
  familyArrow.toggleClass('on');
});

// top Btn
let topBtn = $('.topBtn');
topBtn.click(function(){
  $('html, body').animate({scrollTop: 0}, 500);
});

