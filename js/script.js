(function ($) {
    $(document).ready(function () {
        // opening searchbar
        $('.hide').on("click", function () {
            $(".nav ul").addClass('hide');
            $('.show').addClass('show-s-bar');
        });
        $('.show a').on("click", function () {
            $(".nav ul").removeClass('hide');
            $('.show').removeClass('show-s-bar');
        });
        //        end

        //  opening popup

        $('.open-popup').on("click", function () {
            $('.popup-bg').addClass('in');
            console.log(this);
        });

        //  closing popup

        $('.quit').on("click", function () {
            $('.popup-bg').removeClass('in');
            console.log(this);
        });

        //  opening cart-dropdown


        $('.cart-dropdown-opening').on("click", function () {
            $('.cart-dropdown').addClass('in');
            console.log(this);
        });

        //  closing cart-dropdown

        //  my account dropdown

        $('.my-account-dropdown').on("click", function () {
            $('.my-account').toggleClass('my-account-open');
            console.log(this);
        });

        //  closing my account dropdown

        $('.quit-img').on("click", function () {
            $('.cart-dropdown').removeClass('in');
            console.log(this);
        });

        // opening tablet menu
        $('.menu-md').on("click", function () {
            $('.nav').toggleClass('hide-md');
        });

        // opening tablet menu list
        $('.md-list-font').on("click", function () {
            $('.first-level').toggleClass('open-list-1');
        });

        // opening tablet searchbar
        $('.searchbar-md-dd').on("click", function () {
            $('.searchbar-md').toggleClass('active-md');
        });


        // hover on computers
        $('.dropdown-open').hover(
            function () { //mouseover
                if($(window).width() > 980)
                {
                    $(this).find('>.dropdown-content').removeClass('hidden');
                }
            }, function () { //mouseout
                if($(window).width() > 980)
                {
                    $(this).find('>.dropdown-content').addClass('hidden');
                }
            }
        );

        $('.dropdown-open > a').on("click", function (e) {
                 if($(window).width() < 980)
                 {
                     e.preventDefault();
                     if($(this).parent().find('>.dropdown-content').hasClass('hidden')) {
                         $('.dropdown-content').addClass('hidden flex');
                     }
                     $(this).parent().find('>.dropdown-content').toggleClass('hidden flex');
                 }

                }
        );

//        opening FAQ element


        var titles = $('.faq-text'),
            texts = $('.description');

        texts.hide();

        titles.on("click", function(){

            texts.stop().slideUp(300);


            /*var that = $(this),
                texts = that.next(),
                isVisible = texts.is(":visible");*/




            if(!isVisible) {
                text.stop().slideDown(300);
            } else {
                text.stop().slideUp(300);
            }


        });


        $( "#spinner" ).spinner();

















        // go to the top

        $('.up-arrow').click(function(){
            $('html, body').animate({scrollTop:0}, 'slow');
        });

        // featured images media properties
        $( window ).resize(function() {
        if($(window).width() > 768) {
            $("#image1").attr("src", "images/featured1.jpg");
            $("#image2").attr("src", "images/featured2.jpg");
            $("#image3").attr("src", "images/featured3.jpg");
        } else {
            $("#image1").attr("src", "images/featured_tablet.jpg");
            $("#image2").attr("src", "images/featured_tablet.jpg");
            $("#image3").attr("src", "images/featured_tablet.jpg");
        }
        });

        // all under this text refers to owl carousel


        $('.first-carousel').owlCarousel({
            singleItem: true,
            pagination: false,
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            loop: true,
            navigation: true,
            navigationText: [
                "<i class='fa fa-chevron-left fa-2x'></i>",
                "<i class='fa fa-chevron-right fa-2x'></i>"
            ]
        });
        $('.second-carousel').owlCarousel({
            items: 5,
            itemsTablet: [768, 3],
            itemsMobile: [479, 2],
            responsive: true,
            autoPlay: 2000,
            pagination: false,
            stopOnHover: true,
            loop: true
        });

    });
})(jQuery);
