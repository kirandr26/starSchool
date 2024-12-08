// Marquee js

document.addEventListener("DOMContentLoaded", () => {
	const marquee = document.querySelector(".marquee-inner");
	const speed = 1; // Scrolling Speed
	let scrollAmount = 0;
	let isHovered = false;

	// Duplicates the content
	const marqueeContent = marquee.innerHTML;
	marquee.innerHTML += marqueeContent;

	const startScrolling = () => {
		if (!isHovered) {
			scrollAmount -= speed;
			if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
				scrollAmount = 0;
			}
			marquee.style.transform = `translateX(${scrollAmount}px)`;
		}
		requestAnimationFrame(startScrolling);
	};

	marquee.addEventListener("mouseover", () => {
		isHovered = true;
	});

	marquee.addEventListener("mouseout", () => {
		isHovered = false;
	});

	startScrolling();
});


document.addEventListener("DOMContentLoaded", () => {
	function counter(id, start, end, duration) {
	 let obj = document.getElementById(id),
	  current = start,
	  range = end - start,
	  increment = end > start ? 1 : -1,
	  step = Math.abs(Math.floor(duration / range)),
	  timer = setInterval(() => {
	   current += increment;
	   obj.textContent = current;
	   if (current == end) {
		clearInterval(timer);
	   }
	  }, step);
	}

	// Function to trigger the counter for all elements
	function startCounters() {
		counter("te1", 0, 8, 1000);
		counter("te2", 0, 1, 1000);
		counter("stuCount", 1000, 1200, 1000);
		counter("stuCount2", 1000, 1200, 1000);
		counter("stuCount3", 1000, 1200, 1000);
	}

	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				startCounters(); 
				observer.disconnect(); 
			}
		});
	});

	let section = document.getElementById('counterSection');
	observer.observe(section);
});


$(document).ready(function() {
	// $('.marqueeFooter').slick({
    //     speed: 8000,
	// 	autoplay: true,
	// 	autoplaySpeed: 0,
	// 	centerMode: false,
	// 	cssEase: 'linear',
	// 	draggable:false,
	// 	focusOnSelect:false,
	// 	pauseOnFocus:false,
	// 	pauseOnHover:false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	variableWidth: true,
	// 	infinite: true,
	// 	initialSlide: 1,
	// 	arrows: false,
	// 	buttons: false,
	// 	rtl:true 
    // });

	$(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
	
	$('.imgWrap').hover(
	  function() {
		$(this).addClass('grow').siblings().removeClass('grow');
		$(this).find('.imgWrap_cnt').addClass('darken');
	  },
	  function() {
		$(this).removeClass('grow')
		$(this).find('.imgWrap_cnt').removeClass('darken');
		$('.imgWrap').first().addClass('grow');
	  }
	);



	// testimonial Slider

	$('.testimonial_slider').slick({
		autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
		responsive: [
		  {
			breakpoint: 1025,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '0',
			  slidesToShow: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '0',
			  slidesToShow: 1
			}
		  }
		]
	});




	//Menu opened
	$('#menuOpenIcon').on('click',function(){
		$('.menuLinks').addClass('MenuOpened');
		$('body').addClass('bodyMenuOpened');
	}) 
	$('#menuCloseIcon').on('click',function(){
		$('.menuLinks').removeClass('MenuOpened');
		$('body').removeClass('bodyMenuOpened');
	})
	$(document).on('click', function (event) {
        if (
            !$(event.target).closest('.menuLinks').length && // Check if click is outside the menu
            !$(event.target).closest('#menuOpenIcon').length // Check if click is outside the open button
        ) {
            $('.menuLinks').removeClass('MenuOpened');
            $('body').removeClass('bodyMenuOpened');
        }
    });
});
  