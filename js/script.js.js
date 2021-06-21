/*===========================================
			PORTFOLIO
=============================================*/
$(window).on('load', function () {
	// init Isotope
	$('#isotope-container').isotope({});


	// filter items on button click
	$('#isotope-filters').on('click', 'button', function () {

		// get filter value
		var filterValue = $(this).attr('data-filter');


		$('#isotope-container').isotope({
			filter: filterValue,
            // itemSelector: '.item',
            // filter: "*"
		});

		//  active button
		$("#isotope-filters").find('.active').removeClass('active');
		$(this).addClass('active');

	});

});
// Timer
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Jun 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //seconds
        }, 0)
    }());

    $('.todays_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        padding:10,

        navText: [
        
        ],
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items:2,
            },
            576: {
                items:2,
            },
            768: {
                items:3,
            },
            1200: {
                items:4,
            }
        }
    });

    // Instgram-Slider
    $('.instagram_post_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items:3,
            },
            992: {
                items:4,
            },
            1200: {
                items:5,
            }
        }
    });
    new SmoothScroll('a[href*="#"]' , {
        easing: 'linear',
        speed: 1000
    });
    

$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 120) {
        $('.seperate-sticky-bar').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '15px 40px');
    } else {
        $('.seperate-sticky-bar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 40px');
       
    }

    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});
   

     
