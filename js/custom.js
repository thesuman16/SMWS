/*------------------------------------------------------------------
 * Theme Name: emyUI - Multipurpose UI Kit for Web Hosting providers with WHMCS Template
 * Author: coodiv (nedjai mohamed) (nbames.mohamed@gmail.com)
 * Author URI: https://hostgenics.com/
 * Author URI: https://themeforest.net/user/coodiv
 * Js file Version: 1.7
 * Js file Last Update: 20/12/2022
 -------------------------------------------------------------------*/

 "use strict";
 document.addEventListener('DOMContentLoaded', function() {
     if(jQuery("#languagesystem").length > 0) {translate();}
     extrafilesloader();
     if(jQuery("#dinamic-filter-list").length > 0) {FilterListSection();}
 });
 
 $(function () {
   $('[data-toggle="tooltip"]').tooltip()
 })
 
     
     
 //----------------------------------------------------/
 // typed texts 
 //----------------------------------------------------/	
 if(jQuery("#typed").length > 0) {
     var typed = new Typed('#typed', {
         strings: ['for your web hosting company', 'for your domains business', 'for your resellers hosting company', 'and more....'],
         typeSpeed: 120,
         backSpeed: 50,
         smartBackspace: true,
         loop: true
     });
 }
 
 //----------------------------------------------------/
 // theme Preview slider
 //----------------------------------------------------/	
 $('.whmcstabPreview').slick({
   centerMode: true,
   arrows: false,
   fade: false,
   dots: true,
   infinite: true,
   speed: 300,
   autoplay: true,
   autoplaySpeed: 3000,
   centerPadding: '250px',
   slidesToShow: 1,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
 });
 
 
 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
   $('.themepreview').slick('setPosition');
 })
 
 //----------------------------------------------------/
 // Filter language List
 //----------------------------------------------------/
 function FilterLanguageHeader() {
     var input, filter, ul, li, a, i;
     input = document.getElementById('lang-search-input');
     filter = input.value.toUpperCase();
     ul = document.getElementById("lang-box-ul");
     li = ul.getElementsByTagName('li');
     for(i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
             li[i].classList.remove("disabled");
         } else {
             li[i].classList.add("disabled");
         }
     }
 };
 
 
 //----------------------------------------------------/
 // Filter FAQ List
 //----------------------------------------------------/
 
 function FilterListSection() {
     var input, filter, ul, li, a, i;
     input = document.getElementById('dinamic-filter-input');
     filter = input.value.toUpperCase();
     ul = document.getElementById("dinamic-filter-list");
     li = ul.getElementsByTagName('li');
     for(i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "";
         } else {
             li[i].style.display = "none";
         }
     }
 };
 
 
 //----------------------------------------------------/
 // Dinamic filter system links
 //----------------------------------------------------/
 jQuery('#dinamic-filter-list li a').on('click', function() {
     $(this).addClass("filter-item-open");
     $('.dinamic-filter-list-container').addClass("dinamic-filter-min-height");
     $('#' + this.id + '-content').delay(200).fadeIn(300);
 });
 jQuery('.filter-content-close').on('click', function() {
     $(this).addClass("filter-item-open");
     $('.dinamic-filter-list-container').removeClass("dinamic-filter-min-height");
     $('.filter-content-box').delay(200).fadeOut(300);
 });
 
 
 //----------------------------------------------------/
 // i18next translate
 //----------------------------------------------------/
 function translate() {
     var language = localStorage.getItem('lng');
     if(!language) {
         localStorage.setItem('lng', 'en');
         language = 'en';
     }
     i18next.use(i18nextXHRBackend).init({
         lng: language,
         fallbackLng: 'en',
         backend: {
             loadPath: 'lang/{{lng}}/lang.json'
         }
     }, function(err, t) {
         jqueryI18next.init(i18next, $, {
             tName: 't',
             i18nName: 'i18n',
             handleName: 'localize',
             selectorAttr: 'data-i18n',
             targetAttr: 'i18n-target',
             optionsAttr: 'i18n-options',
             useOptionsAttr: false,
             parseDefaultValueFromContent: true
         });
         $(document).localize();
     });
 }
 
 
 //----------------------------------------------------/
 // template parts loader
 //----------------------------------------------------/
 function extrafilesloader() {
     $("#languagesystem-slector").load("template-part/languages.html", function() {
         $('#languagesystem-slector [data-lng="' + localStorage.getItem('lng') + '"]').addClass('current-lang active');
         $('#languagesystem-slector .lang-box-item').click(function(e) {
             e.preventDefault();
             localStorage.setItem('lng', $(this).attr('data-lng'));
             setTimeout(function() {
                 location.reload()
             }, 120);
         });
     });
     $("#header-navbar-links").load("template-part/header-navbar.html");
     $("#header-navbar-links-vpn").load("template-part/header-navbar-vpn.html");
     $("#header-navbar-links-aws").load("template-part/header-navbar-aws.html");
     $("#header-navbar-links-aws-pro").load("template-part/header-navbar-aws-pro.html");
     $("#footer-wrap-links").load("template-part/footer.html");
     $("#footer-aws-wrap-links").load("template-part/footer-aws.html");
 }
 
 
 
 
 $(document).ready(function() {
 
 //----------------------------------------------------/
 // Countdown Timer
 //----------------------------------------------------/
 if(jQuery(".hero-countdown").length > 0) {
 (function() {
     var countDownDate = new Date("April 15, 2024 15:37:25").getTime();
     var countdaysoutput = document.getElementById("countdays-output");
     var counthoursoutput = document.getElementById("counthours-output");
     var countminutesoutput = document.getElementById("countminutes-output");
     var countsecondsoutput = document.getElementById("countseconds-output");
     var x = setInterval(function() {
     var now = new Date().getTime();
     var distance = countDownDate - now;
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
     countdaysoutput.innerHTML = days;
     counthoursoutput.innerHTML = hours;
     countminutesoutput.innerHTML = minutes;
     countsecondsoutput.innerHTML = seconds;
     if (distance < 0) {
     clearInterval(x);
     document.getElementById("count-number").innerHTML = "if Shows EXPIRED- Clear Browser Cache";
     }
     }, 1000);
     })();
 }
 
 
 //----------------------------------------------------/
 // hero services slider
 //----------------------------------------------------/
 if(jQuery(".hero-slider-services").length > 0) {
 $('.hero-slider-services').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       dots: false,
       fade: true,
       swipe: false,
       asNavFor: '.hero-slider-services-nav'
 });
 $('.hero-slider-services-nav').slick({
       slidesToShow: 2,
       slidesToScroll: 1,
       asNavFor: '.hero-slider-services',
       arrows: false,
       swipe: false,
       dots: false,
       centerMode: true,
       focusOnSelect: true
 });
 }
     
 //----------------------------------------------------/
 // gallery filter isotope.js
 //----------------------------------------------------/
     if(jQuery("#gallery-filter-group").length > 0) {
     var $grid = $('.grid').isotope({});
     $('.filter-button-group').on( 'click', 'button', function() {
       $(".filter-button-group button").removeClass("active");
       $(this).addClass("active");
       var filterValue = $(this).attr('data-filter');
       $grid.isotope({ filter: filterValue });
     });
     }
 
 
 //----------------------------------------------------/
 // search toggle
 //----------------------------------------------------/
     $('.searchtoggle').on('click', function(e) {
         if(!$('.search-box-topics-sidebar').hasClass('show')) {
             $('.search-box-topics-sidebar').addClass("show");
         } else {
             $('.search-box-topics-sidebar').removeClass("show");
         }
     });
     
 //----------------------------------------------------/
 // navbar collapse
 //----------------------------------------------------/
     $(document).click(function() {
         $('.navbar-collapse').collapse('hide');
     });
     
 //----------------------------------------------------/
 // popupp first time
 //----------------------------------------------------/	
 if(jQuery("#gbpr-badge-close").length > 0) {
 (function() {
     var act1 = document.getElementById('gbpr-badge-close')
     var act2 = document.getElementById('popuppfirsttime')
     function act1Clicked(){
        act2.classList.remove("not-accepted");
        act2.classList.add("accepted");
        localStorage.setItem('btn2-enabled', true);
     }
     if (localStorage.getItem('btn2-enabled'))
         act1Clicked();
     act1.addEventListener('click', act1Clicked);
 })();
 }
 //----------------------------------------------------/
 
 //----------------------------------------------------/
 if(jQuery(".animated-link").length > 0) {
 $(function() {		
     $(document).on('click', '.animated-link', function(event) {
         event.preventDefault();
         var nav_height = 50;
         if($($.attr(this, 'href')).offset()) {
             $('html, body').animate({
                 scrollTop: $($.attr(this, 'href')).offset().top - nav_height
             }, 1200);
         }
     });
     
     
     const callback = (entries, observer) => {
       entries.forEach(entry => {
         const id = entry.target.id;
         const el = document.body.querySelector('[href="#' + id + '"]');
         if (entry.isIntersecting) {
           el.classList.add('active');
         } else {
           el.classList.remove('active');
         }
       });
     };
     const sections = document.querySelectorAll('.page-section');
     const options = {
       threshold: 0.25
     };
     const observer = new IntersectionObserver(callback, options);
     sections.forEach(section => {
       observer.observe(section);
     });
 });	
 }	
     
 //----------------------------------------------------/
 // popover host features 
 //----------------------------------------------------/	
     $('.popover-host-features').popover({
         trigger: 'focus'
     });
     
 //----------------------------------------------------/
 // niceSelect 
 //----------------------------------------------------/	
     $('select').niceSelect();
 
 //----------------------------------------------------/
 // page pre loader 
 //----------------------------------------------------/
      $('.preloader').delay(100).fadeOut('slow');
 
 //----------------------------------------------------/
 // AOS init 
 //----------------------------------------------------/
     AOS.init();
     window.addEventListener('load', AOS.refresh);
     
 //----------------------------------------------------/
 // review textarea 
 //----------------------------------------------------/		
     $(document).ready(function() {
         $(".review-textarea").on('click', function() {
             $(".review-form-inner").addClass('selected');
         });
         $(".cancel-selected-form").on('click', function() {
             $(".review-form-inner").removeClass('selected');
         });
         $('.header-lang.dropdown').on('show.bs.dropdown', function() {
             $("html").addClass('overflow-hidden');
             $("header.site-header").addClass('white-bg light-mode-texts');
             $("header.site-header").removeClass('dark-mode-texts');
         })
         $('.header-lang.dropdown').on('hide.bs.dropdown', function() {
             $("html").removeClass('overflow-hidden');
             if(!$('header.site-header').hasClass('top-header-fixed')) {
                 if(!$('header.site-header').hasClass('light-color-header')) {
                     $("header.site-header").removeClass('light-mode-texts');
                     $("header.site-header").addClass('dark-mode-texts');
                 }
                 $("header.site-header").removeClass('white-bg');
             }
         })
     });
 
 //----------------------------------------------------/
 // checked button animation 
 //----------------------------------------------------/	
     $(function() {
         $(".checked-button-animation").on('click', function() {
             var self = $(this);
             if(!$(this).hasClass('validate')) {
                 $(this).addClass("onclic", 250);
                 setTimeout(function() {
                     self.removeClass('onclic').addClass('validate');
                 }, 1000);
             }
         });
     });
 //----------------------------------------------------/
 // dropdown screen fit
 //----------------------------------------------------/	
     $(function() {
         $(".drop-menu-item.dropdown").on('mouseenter mouseleave', function(e) {
             if($('.coodiv-menu-dropdown', this).length) {
                 var elm = $('.coodiv-menu-dropdown', this);
                 var off = elm.offset();
                 var l = off.left;
                 var w = elm.width();
                 var docW = $(window).width();
                 var isEntirelyVisible = (l + w <= docW);
                 if(!isEntirelyVisible) {
                     $(elm).addClass('invers-drop-down-menu');
                 } else {
                     $(elm).removeClass('invers-drop-down-menu');
                 }
             }
         });
     });
     
 //----------------------------------------------------/
 // fixed header layout
 //----------------------------------------------------/	
     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if($('header.site-header').hasClass('fixed-header-layout')) {
             if(scroll >= 50) {
                 $("header.site-header").addClass("top-header-fixed white-bg light-mode-texts");
                 $("header.site-header").removeClass('dark-mode-texts');
             } else {
                 $("header.site-header").removeClass("top-header-fixed");
                 $("header.site-header").removeClass("white-bg");
                 if(!$('header.site-header').hasClass('light-color-header')) {
                     $("header.site-header").removeClass("light-mode-texts");
                     $("header.site-header").addClass('dark-mode-texts');
                 }
             }
         }
     });
     
 //----------------------------------------------------/
 // two steps login form
 //----------------------------------------------------/	
     $(document).ready(function() {
         function validateEmail(email) {
             const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }
         function validate() {
             const $result = $("#result");
             const email = $("#email").val();
             $result.text("");
             if(validateEmail(email)) {
                 $(".login-wizard-container .email-input").removeClass('haserror');
                 $(".two-step-login-form .first-login-step").hide();
                 $(".two-step-login-form .second-login-step").fadeIn('slow');
                 $(".two-step-login-form .first-step-btn").addClass('d-none');
                 $(".two-step-login-form .second-step-btn").removeClass('d-none');
             } else {
                 $(".login-wizard-container .email-input").addClass('haserror');
             }
             return false;
         }
         $(".logout.return-to-step-one").on('click', function() {
             $(".two-step-login-form .second-login-step").hide();
             $(".two-step-login-form .first-login-step").fadeIn('slow');
             $(".two-step-login-form .first-step-btn").removeClass('d-none');
             $(".two-step-login-form .second-step-btn").addClass('d-none');
         });
         $("#validate-stepsform").on("click", validate);
     });
     
 //----------------------------------------------------/
 // fixed prices on scrolling tables
 //----------------------------------------------------/	
     if(jQuery("#tablewithfixedtop").length > 0) {
         var content = $('#tablewithfixedtop');
         $(window).scroll(function() {
             var scroll = $(window).scrollTop();
             var offset = content.offset();
             var height = content.height();
             if(offset.top <= scroll && scroll <= offset.top + height) {
                 $('.sticky-plans', content).addClass("show");
             } else {
                 $('.sticky-plans', content).removeClass('show');
             }
         });
     }
     
 //----------------------------------------------------/
 // sticky sidebar
 //----------------------------------------------------/
     if(jQuery("#sidebar").length > 0) {
         var a = new StickySidebar('#sidebar', {
             topSpacing: 20,
             bottomSpacing: 20,
             containerSelector: '.container-sidebar',
             innerWrapperSelector: '.sidebar__inner'
         });
     }
     
 //----------------------------------------------------/
 // signup page slider
 //----------------------------------------------------/
     if(jQuery(".signup-page-slider").length > 0) {
         $('.signup-page-slider').slick({
             dots: true,
             infinite: true,
             arrows: false,
             speed: 500,
             slidesToShow: 1,
             slidesToScroll: 1,
         });
     }
     
 //----------------------------------------------------/
 // services plans
 //----------------------------------------------------/
     if(jQuery(".sevrices-plans").length > 0) {
         $('.sevrices-plans-content').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             dots: true,
             autoplay: true,
             autoplaySpeed: 2000,
             asNavFor: '.sevrices-plans-content-nav'
         });
         $('.sevrices-plans-content-nav').slick({
             slidesToShow: 4,
             slidesToScroll: 1,
             asNavFor: '.sevrices-plans-content',
             dots: false,
             arrows: false,
             centerMode: false,
             focusOnSelect: true
         });
     }
     
     
 //----------------------------------------------------/
 // main homepage slider
 //----------------------------------------------------/
     if(jQuery(".main-homepage-plans-slider").length > 0) {
         $('.main-homepage-plans-slider').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             dots: false,
             autoplay: false,
             fade: true,
             adaptiveHeight: true,
             asNavFor: '.services-box-tabs-box',
         });
         $('.services-box-tabs-box').slick({
             slidesToShow: 5,
             asNavFor: '.main-homepage-plans-slider',
             dots: false,
             infinite: true,
             arrows: false,
             centerMode: true,
             focusOnSelect: true,
             responsive: [{
                 breakpoint: 557,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
             }, {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                 }
             }, {
                 breakpoint: 991,
                 settings: {
                     slidesToShow: 3,
                 }
             }]
         });
     }
     
     
 //----------------------------------------------------/
 // testimonial slider
 //----------------------------------------------------/
     if(jQuery(".testimonial-slider").length > 0) {
         $('.testimonial-slider').slick({
             dots: true,
             infinite: true,
             speed: 500,
             slidesToShow: 2,
             slidesToScroll: 2,
             responsive: [{
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }]
         });
     }
 
 
 //----------------------------------------------------/
 // single slide boxes slider
 //----------------------------------------------------/	
     if(jQuery(".single-slide-boxes-slider").length > 0) {
         $('.single-slide-boxes-slider').slick({
             dots: false,
             infinite: true,
             speed: 500,
             slidesToShow: 4,
             slidesToScroll: 1,
             arrows: true,
             appendArrows: '.single-slide-boxes-arrows',
             responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
                 }
             }, {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 2,
                 }
             }, {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1
                 }
             }]
         });
     }
 
     
 //----------------------------------------------------/
 // single slide boxes slider
 //----------------------------------------------------/		
     
     $("#pricing-deck-trigger").on("click", function(e) {
         var getActive = $(e.target).attr("data-active");
         $(e.target).addClass("active");
         $(e.target).siblings().removeClass("active");
         if (getActive == "yearly-active" && !$("#pricing-card-deck").hasClass(getActive)) {
             $("#pricing-card-deck").addClass(getActive);
             $("#pricing-card-deck").removeClass("monthly-active");
         }
         if (getActive == "monthly-active" && !$("#pricing-card-deck").hasClass(getActive)) {
             $("#pricing-card-deck").addClass(getActive);
             $("#pricing-card-deck").removeClass("yearly-active");
         }
     })
     
     $("[data-pricing-trigger]").on("click", function(e) {
         $(e.target).toggleClass("active");
         var target = $(e.target).attr("data-target");
         console.log($(target).attr("data-value-active") == "monthly");
         if ($(target).attr("data-value-active") == "monthly") {
             $(target).attr("data-value-active", "yearly");
         } else {
             $(target).attr("data-value-active", "monthly");
         }
     })
     
     
 
 //----------------------------------------------------/
 // dropdown menu toggle
 //----------------------------------------------------/	
     $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
         if(!$(this).next().hasClass('show')) {
             $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
         }
         var $subMenu = $(this).next(".dropdown-menu");
         $subMenu.toggleClass('show');
         $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
             $('.dropdown-submenu .show').removeClass("show");
         });
         return false;
     });
     
     
 
 //----------------------------------------------------/
 //  menu hover
 //----------------------------------------------------/		
     $('.main-menu .nav-item').hover(function() {
         $(this).addClass('menu-hover')
     }, function() {
         $(this).removeClass('menu-hover')
     })
 })
 $(window).load(function() {
     setTimeout(function() {
         $('#loading').fadeOut(500);
     }, 1000);
     setTimeout(function() {
         $('#loading').remove();
     }, 2000);
 })
 