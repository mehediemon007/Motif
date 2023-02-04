;(function($){

    var mobileMenuIcon = $('.mobile-menu-icon');

    
    if (mobileMenuIcon.length) {
        mobileMenuIcon.on('click', function (e) {
            e.preventDefault();
            $("i",this).toggleClass('fa-bars fa-times');
            $('.vea-main-nav').slideToggle();
        });

    }

    // totop scroller

    var totop = $('#toTop'),
        win = $(window);

    // Mobile Nav Menu Toggle

    $('li').on('click', function (e) {

        e.stopPropagation();
    
        var thisElement = $(e.target);
    
        if($(thisElement).next('.sub-menu').length){

            $("i",this).toggleClass('fa-plus fa-minus');
            thisElement.siblings('.sub-menu > li').fadeToggle();
            thisElement.siblings('.sub-menu').slideToggle();

        }else{

            if($('.mobile-menu-icon > i').hasClass('fa-times')){

                $('.mobile-menu-icon > i').toggleClass('fa-times fa-bars');
                $('.vea-main-nav').slideToggle();

            }
        }
        
    });

    // scrollTop init

    win.on('scroll', function () {

        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
        
    });

    totop.on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 500)

    });

    // Project Slider

    $(".project-slider").owlCarousel({
        items: 1.1,
        loop:true,
        autoplay:true,
        nav:true,
        navText: ["Pre","Next"],
        dots:false,
        smartSpeed : 500,
        // center:true,
        margin:10,
        onInitialized  : counter, //When the plugin has initialized.
        onTranslated : counter,
        responsive:{
            0:{
                margin: 16
            },
            576:{
                margin: 32
            },
            768:{
                margin: 10
            }
        }
    })

    // Creer Slider

    $(".career-slider").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        nav:true,
        navText: ["Pre","Next"],
        dots:false,
        center:true,
        autoHeight:true,
        smartSpeed : 500,
        onInitialized  : counter, //When the plugin has initialized.
        onTranslated : counter,
        responsive:{

        }
    })

    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
         var items     = event.item.count;     // Number of items
         var item      = event.item.index + 1;     // Position of the current item
       
       // it loop is true then reset counter from 1
       if(item > items) {
         item = item - items
       }
       $('#counter').html(item +"/" +items)
     }

    // Blog Slider
    
    $(".blog-slider").owlCarousel({
        items:2,
        loop:true,
        autoplay:true,
        nav:false,
        dots:false,
        margin:50,
        smartSpeed : 500,
        responsive:{
            0:{
                items: 1.15,
                margin:24
            },
            575:{
                items: 1.25,
                margin:50
            },
        }
    })

    // Testimonial Slider

    $('.testimonial-slider').owlCarousel({
        items:1,
        autoplay:true,
        nav: false,
        dots: true,
        smartSpeed : 500,
        dotsData: true,
        autoHeight:true
    });

    $('.testi-slider-2').owlCarousel({
        items:1,
        autoplay:true,
        nav: false,
        dots: false,
        // singleItem:true,
        smartSpeed : 500,
        autoHeight:true
    });

    $('.testi-slider-3').owlCarousel({
        items:1.5,
        autoplay:true,
        loop:true,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        dots: false,
        smartSpeed : 500,
        margin: 32,
        responsive:{
            0:{
                items:1.15,
                margin: 16
            },
            400:{
                items:1.5
            },
            768:{
                margin: 32
            }
        }
    });

    // Counter

    if($('.counter').length){

        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
        
    }
    
    // Mobile Menu Toggle 

    $(".nav-toggle").on("click",function(){
        // $("i",this).toggleClass("fa-sharp fa-solid fa-bars fa-solid fa-xmark")
        $(".mof-nav-wpr").slideToggle("500");
        $(".mof-nav-wpr").addClass("show");
    })

    $(".nav-close").on("click",function(){
        $(".mof-nav-wpr").removeClass("show");
        setTimeout(function(){
            $(".mof-nav-wpr").slideToggle("500");
        },1000)
    })

    // new WOW().init();

    // Preloader

    function loadCounter(){
        $("html").addClass("stop-scrolling");
        $("html").animate({
            scrollTop: 0
        });
        let count = setInterval(function(){
            let c = parseInt($(".load-count").text());
            $(".load-count").text((++c).toString());
            
            $("body").append('<style>.load-bar::before{width: ' + (++c) + '%;}</style>')

            if(c == 100){
                clearInterval(count);
                $(".preloader .content").addClass("hide");
                $(".preloader").addClass("active");
                $("html").removeClass("stop-scrolling");
            }
        },30);
    }

    $("document").ready(function(){
        loadCounter();
    })

})(jQuery)

// Portfolio Filter
    
const portfolioFilter = document.querySelector('.portfolio-filter');
const portfolioItems = document.querySelectorAll(".single-work");

if(portfolioFilter != null){

    portfolioItems.forEach(item =>{
        if(item.classList.contains('ui')){
            item.classList.remove('hide');
            item.classList.add('show')
        }else{
            item.classList.remove('show');
            item.classList.add('hide')
        }
    })

    portfolioFilter.addEventListener("click",(e)=>{
        if(e.target.classList.contains('filter-item')){
            portfolioFilter.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
    
            // Filter Value
    
            const filterValue = e.target.getAttribute('data-filter');
            portfolioItems.forEach(item =>{
                if(item.classList.contains(filterValue ) || filterValue ==='all'){
                    item.classList.remove('hide');
                    item.classList.add('show')
                }else{
                    item.classList.remove('show');
                    item.classList.add('hide')
                }
            })
        }
    })
}

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".mof-header");
    window.onscroll = ()=>{
        this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    // Start Animation

    document.addEventListener("DOMContentLoaded", function(event) {
        document.addEventListener("scroll", function(event) {
            const animatedBoxes = document.getElementsByClassName("animBox");
            const windowOffsetTop = window.innerHeight + window.scrollY;
    
            Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
                const animatedBoxOffsetTop = animatedBox.offsetTop;
    
                if (windowOffsetTop >= animatedBoxOffsetTop) {
                    addClass(animatedBox, "animateRight");
                }
            });
        });
    });
    
    function addClass(element, className) {
        const arrayClasses = element.className.split(" ");
        if (arrayClasses.indexOf(className) === -1) {
            element.className += " " + className;
        }
    }

})()
