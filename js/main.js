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

    // Testimonial Carousel

    $('.sliderColOne').slick({
        autoplay: true,
        infinite: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        arrows: true,
    });
    
    $('.reviews-3').slick({
        // autoplay: true,
        infinite: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        dots:true,
        arrows: false,
        responsive:[
            {
                breakpoint: 481,
                slidesToShow: 1,
            }
        ]
        
    });

    if($(".portfolio-slides").length){

        $(".portfolio-slides").slick({
            autoplay:true,
            infinite: true,
            slidesToShow:3,
            slidesToSlide: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:false,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                    },
                },
            ],
        })
    }

    // Cricle Skill Bar

    var progressPie = $(".radial-progs-pie")

    if (progressPie.length) {
        progressPie.appear(function () {

            progressPie.asPieProgress({
                namespace: "pieProgress",
                classes: {
                    svg: "radial-progs-pie-svg",
                    number: "radial-progs-pie-number",
                    content: "radial-progs-pie-content",
                },
                min: 0,
                max: 100,
                speed: 25,
                barsize: '6',
                barcolor:"#fff",
                trackcolor: '#737373',
                easing: 'ease',
            });
            progressPie.asPieProgress("start");
        });
    }

    // Progressbar

    if($(".single-progressbar").length){

        $('.figma').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#FF8059',
            backgroundColor: '#F7F1E9'
        });

        $('.ps').rProgressbar({
            percentage: 78,
            fillBackgroundColor: '#FF8059',
            backgroundColor: '#F7F1E9'
        });

        $('.xd').rProgressbar({
            percentage: 85,
            fillBackgroundColor: '#FF8059',
            backgroundColor: '#F7F1E9'
        });

        $('.inv').rProgressbar({
            percentage: 55,
            fillBackgroundColor: '#FF8059',
            backgroundColor: '#F7F1E9'
        });
    }

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
