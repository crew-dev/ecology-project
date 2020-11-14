var instance = new vidbg('#video', {
		poster: "../video/video-poster.jpg", 
		webm: "video/forest.webm",
		mp4: "../video/forest.mp4",
		overlay: true, 
	},{
	const: defaultAttributes = {
  autoplay: true,
  controls: false,
  loop: true,
  muted: true,
  playsInline: true
}
	});
	
	  AOS.init({
    disable: function() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
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