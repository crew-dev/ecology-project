var instance = new vidbg('#video', {
    webm: "video/forest.webm",
    poster: "video/forest.jpg", 
    overlay: true, 
	});

$(function(){
$(".damage-arrow-down").elimore({
maxLength: 120
});
});

var mySwiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,        
  },
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
})
