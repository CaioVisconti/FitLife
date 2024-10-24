var swiper = new Swiper(document.getElementsByClassName("carrossel-info1"), {
    slidesPerView: 1,
    spaceBetween: 30,
    
    navigation: {
      nextEl: document.getElementsByClassName("next-info1"),
      prevEl: document.getElementsByClassName("prev-info1"),
    },
  });