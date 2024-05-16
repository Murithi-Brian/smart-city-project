document.addEventListener("DOMContentLoaded", function() {
    // Function to get the current year and display it in an element with id "displayYear"
    function getYear() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        document.querySelector("#displayYear").innerHTML = currentYear;
    }

    // Call the getYear function to display the current year
    getYear();

    // Check if jQuery is loaded and handle it accordingly
    if (typeof jQuery != 'undefined' && parseFloat(jQuery.fn.jquery) >= 1.7) {
        // jQuery is loaded, so you can safely use it
        // Initialize Owl Carousel for the service section
        $(document).ready(function() {
            var owl = $(".service_owl-carousel").owlCarousel({
                autoplay: true,
                center: true,
                nav: false,
                loop: true,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 3
                    }
                }
            });

            // Handle navigation buttons
            $(".prev-btn").click(function() {
                owl.trigger("prev.owl.carousel");
            });
            $(".next-btn").click(function() {
                owl.trigger("next.owl.carousel");
            });
        });

        // Initialize Owl Carousel for the portfolio section
        var owl = $('.portfolio_carousel').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            center: true,
            autoplay: true,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            autoplayHoverPause: true,
            responsive: {
                0: {
                    center: false,
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2
                },
                991: {
                    center: true,
                    items: 3
                }
            }
        });

        // Event handler for filtering items in Owl Carousel
        $('.owl-filter-bar').on('click', '.item', function(e) {
            var $items = $('.owl-filter-bar a')
            var $item = $(this);
            var filter = $item.data('owl-filter')
            $items.removeClass("active");
            $item.addClass("active");
            owl.owlcarousel2_filter(filter);
            e.preventDefault();
        });
    } else {
        // jQuery is not loaded or incompatible, handle the error or fallback to vanilla JavaScript
        console.error('jQuery is either not loaded or incompatible');
    }

    // Function to initialize Google Map
    function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(40.712775, -74.005973),
            zoom: 18,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    // Initialize nice select plugin when the document is ready
    $(document).ready(function() {
        $('select').niceSelect();
    });
});
