'use strict';
(function() {
    /*
     * Define routes
     */
    var routes = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Players',
            href: '/players/'
        },
        {
            label: 'Team of the Tournaments',
            href: '/tott/'
        },
        {
            label: 'Players to Look Out For',
            href: '/playerstlof/'
        },
        {
            label: 'Records & History',
            href: '/statistics/'
        }, 
        {
            label: 'Records',
            href: '/records/'
        },
        {
            label: 'Historical Moments',
            href: '/history/'
        },
    ];

    /*
     * Create side menu and prepend to body.
     */
    var nav = document.createElement('nav');
    nav.setAttribute('class', 'side-menu');

    var ul = document.createElement('ul');
    routes.forEach(function(route) {
        var li = document.createElement('li');
        var link = document.createElement('a');

        link.innerText = route.label;
        link.setAttribute('href', route.href);
        
        var currentRoute = window.location.pathname;
        if (currentRoute === route.href) {
            li.classList.add('active');
        }

        li.appendChild(link);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.body.prepend(nav);

    /*
     * Toggle hamburger menu
     */
    var menuButton = document.querySelector('.hamburger');
    menuButton.addEventListener('click', function() {
        var menuNav = document.querySelector('.side-menu');
        var main = document.querySelector('.main');
        menuNav.classList.toggle('show');
        main.classList.toggle('open-side-menu');
    });

    /*
     * Carousel
     */
    var carousel = document.querySelector('.carousel');
    if (carousel) {
        var slides = carousel.children;
        var activeSlide = 0;
        var timer = 5000;

        var setActiveSlides = function(slideIndex, isActive) {
            if (isActive) {
                slides[slideIndex].classList.add('active');
            } else {
                slides[slideIndex].classList.remove('active');
            }

            var prevSlideIndex = slideIndex - 1;
            if (prevSlideIndex < 0) {
                prevSlideIndex = slides.length - 1;
            }
            if (isActive) {
                slides[prevSlideIndex].classList.add('prev');
            } else {
                slides[prevSlideIndex].classList.remove('prev');
            }

            var nextSlideIndex = slideIndex + 1;
            if (nextSlideIndex > slides.length - 1) {
                nextSlideIndex = 0;
            }
            if (isActive) {
                slides[nextSlideIndex].classList.add('next');
            } else {
                slides[nextSlideIndex].classList.remove('next');
            }
        }

        setActiveSlides(activeSlide, true);
        if (slides.length > 2)  {
            setInterval(function() {
                setActiveSlides(activeSlide, false);

                activeSlide = activeSlide + 1;
                if (activeSlide > slides.length - 1) {
                    activeSlide = 0;
                }
                setActiveSlides(activeSlide, true);
            }, timer);
        }
    }
})()

