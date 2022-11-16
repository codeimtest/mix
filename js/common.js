$('.toggle-button').click(function(){
	$(this).toggleClass('active')
	$('.toggle-menu').toggleClass('active')
})
$(".pagination ul li a").click(function(){
	$(this).addClass("active")
	$(".pagination ul li a").removeClass("active")
	
})

var menu_selector = ".pagination"; 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});

var swiper = new Swiper(".testimonials-carousel", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1.2,
	watchOverflow: true,
  spaceBetween: 10,
	loop: false,
	watchSlidesProgress: true,
	
	navigation: {
		nextEl: ".button-next",
		prevEl: ".button-prev",
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	}
});