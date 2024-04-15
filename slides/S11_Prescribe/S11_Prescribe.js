app.register("S11_Prescribe", function() {

  let contentSwiper = null;
  let swiperTimeout = null;

  return {
    events: {
      "tap [data-screen]": "updateScreen",
      "touchStart .swiper-slide": () => { clearTimeout(swiperTimeout); app.lock(); },
      "touchEnd .swiper-slide": () => { swiperTimeout = setTimeout(() => app.unlock(), 100); },
    },
    onRender: function(el) {
      contentSwiper = new Swiper('#product-swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        resistance: false,
      });
      contentSwiper.on('touchEnd', swiper => {
        if (swiper.swipeDirection === 'next' && swiper.realIndex === swiper.slides.length - 1) {
          app.slideshow.next();
        } else if (swiper.swipeDirection === 'prev' && swiper.realIndex === 0) {
          app.slideshow.prev();
        }
      });
    },
    onExit: function() {
      contentSwiper.slideTo(0);
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    }
  }

});