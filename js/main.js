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
        items: 1,
        loop:false,
        autoplay:false,
        nav:true,
        navText: ["Pre","Next"],
        dots:false,
        center:true,
        onInitialized  : counter, //When the plugin has initialized.
        onTranslated : counter,
        responsive:{

        }
    })

    // Creer Slider

    $(".career-slider").owlCarousel({
        items: 1,
        loop:false,
        autoplay:false,
        nav:true,
        navText: ["Pre","Next"],
        dots:false,
        center:true,
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
        autoplay:false,
        nav:false,
        dots:false,
        margin:50,
        responsive:{
            // 0:{
            //     items: 2,
            //     center:false
            // },
            // 575:{
            //     items: 5,
            //     center:true,
            // },
        }
    })

    // Testimonial Slider

    $('.testimonial-slider').owlCarousel({
        items:1,
        nav: false,
        dots: true,
        dotsData: true,
    });

    // Counter

    if($('.counter').length){

        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
        
    } 

    new WOW().init();

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

    const headerContainer = document.querySelector(".vea-header-wpr");
    window.onscroll = ()=>{
        this.scrollY > 20 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

})()
