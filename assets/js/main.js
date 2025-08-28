(function ($) {
"use strict";



// skill

$(".skill-per").each(function() {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});
    




// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});

// RESPONSIVE MENU
$('.responsive').on('click', function (e) {
	$('#mobile-menu').slideToggle();
});

// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})

// offcanvas menu
$(".menu-tigger").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").addClass("active");
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".offcanvas-menu,.offcanvas-overly").removeClass("active");
});
    


// menu toggle
$(".main-menu li a").on('click', function () {
	if ($(window).width() < 700) {
		$("#mobile-menu").slideUp();
	}
});

// smoth scroll
$(function () {
	$('a.smoth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 100
		}, 1000);
		event.preventDefault();
	});
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-down"></i></button>',
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// services-active
$('.services-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    
   // video-active
$('.video-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});  
       // video-active
$('.video-active2').slick({
	dots: false,
	infinite: true,
	arrows: false,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});  
    
    $('.macthe-active').slick({
	dots: true,
	infinite: true,
	arrows: false,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});  
    
    // team-active
$('.team-active').slick({
	dots: true,
	infinite: true,
	arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon dripicons-arrow-thin-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon dripicons-arrow-thin-right"></i></button>',
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// portfolio-active
$('.portfolio-active').slick({
	dots: false,
	infinite: true,
    arrows: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
	speed: 1000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// brand-active
$('.brand-active').slick({
	dots: false,
	infinite: true,
    autoplay:true,
  autoplaySpeed:500,
	arrows: false,
	speed: 1000,
	slidesToShow:4,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// testimonial-active
$('.testimonial-active').slick({
	dots: false,
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
    // testimonial-active
$('.testimonial-active2').slick({
	dots: false,
    autoplay:true,
  autoplaySpeed:1500,
	infinite: true,
	arrows: true,
     prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// testimonial-active2

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots:false,
  arrows:true,
  centerMode: true,
  focusOnSelect: true, 
  variableWidth:true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
});
// home-blog-active
$('.home-blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
     prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});



    
// blog
$('.blog-active').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
});


    

// counterUp

$('.count').counterUp({
	delay: 100,
	time: 1000
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// paroller
if ($('.paroller').length) {
	$('.paroller').paroller();
}

//* Parallaxmouse js
function parallaxMouse() {
	if ($('#parallax').length) {
		var scene = document.getElementById('parallax');
		var parallax = new Parallax(scene);
	};
};
parallaxMouse();

// service active
$('.s-single-services').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.s-single-services').removeClass('active');
})

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<b>⇑</b>',
	activeOverlay: false,
});


// isotop
	$('.grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});

	// filter items on button click
	$('.button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });		
	});

});
// isotop
$(".element").each(function() {
    var a = $(this);
    a.typed({
        strings: a.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}),
//for menu active class
$('.button-group > button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// WOW active
new WOW().init();
    
//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}
    
//pricing-tab-switcher

        $('.pricing-tab-switcher').on('click', function () {
            $(this).toggleClass('active');

            $('.pricing-amount').toggleClass('change-subs-duration');
        });


})(jQuery);

let progress = 0;
const interval = 50;
const duration = 1000;
const step = 100 / (duration/interval);

const timer = setInterval(() => {
	progress += step;
	if(progress >= 100) {
		progress = 100;
		clearInterval(timer);
	}
	document.getElementById('loading-s1').textContent = Math.round(progress);
}, interval);
setTimeout(function() {
	// 移除加载动画效果
	$('#loading-box').attr('class', 'loaded');
	$('#bg').css(
		'cssText',
		'transform: scale(1); filter: blur(0px); transition: ease 1s;'
	);
	$('.cover').css('cssText', 'opacity: 1; transition: ease 1s;');
	$('#section').css(
		'cssText',
		'transform: scale(1) !important; opacity: 1 !important; filter: blur(0px) !important'
	);
}, 1500);

//  autoclick 进入页面立即触发
(()=>{
	//  兼容IE
	if(document.all) {
		document.getElementById("aid").click();
	}
	//  兼容其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById("aid").dispatchEvent(e);
	}
})();
//  三秒后模拟点击
setTimeout(function() {
	//  IE浏览器
	if(document.all) {
		document.getElementById("aid").click();
	}
	//  其它浏览器
	else {
		var e = document.createEvent("MouseEvents");
		e.initEvent("click", true, true);
		document.getElementById("aid").dispatchEvent(e);
	}
}, 1000);

// sitetime
function siteTime(){
	window.setTimeout("siteTime()", 1000);
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth()+1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	/* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
    year - 作为date对象的年份，为4位年份值
    month - 0-11之间的整数，做为date对象的月份
    day - 1-31之间的整数，做为date对象的天数
    hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
    minutes - 0-59之间的整数，做为date对象的分钟数
    seconds - 0-59之间的整数，做为date对象的秒数
    microseconds - 0-999之间的整数，做为date对象的毫秒数 */
	var t1 = Date.UTC(2022,07,14,10,20,00); //创建网站的时间
	var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
	var diff = t2-t1;
	var diffYears = Math.floor(diff/years);
	var diffDays = Math.floor((diff/days)-diffYears*365);
	var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
	var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
	var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
	document.getElementById("sitetime").innerHTML=+diffYears+"年"+diffDays+"天"+diffHours+"时"+diffMinutes+"分"+diffSeconds+"秒";
}
siteTime();

// hitokoto
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn/');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var data = JSON.parse(xhr.responseText);
		var poem = document.getElementById('poem');
		poem.innerText = data.hitokoto;
		info.innerText = data.from_who + '《' + data.from + '》';
		poemmp.innerText = data.hitokoto;
		infomp.innerText = data.from_who + '《' + data.from + '》';
	}
};
xhr.send();
